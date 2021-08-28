/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-param-reassign */
/* eslint-disable max-len */
import { AxiosRequestConfig, AxiosResponse } from "axios";
import { openLoading, closeLoading } from "./changeLoading";
import axios from "./request";

const requestList: any[] = [];

interface CustomParamsType {
  notLoading?: boolean;
}

interface RequestConfigType extends AxiosRequestConfig {
  customParams?: any;
}

interface ResponseConfigType extends AxiosResponse {
  config: RequestConfigType;
}

const preventEvent = (event: Event) => {
  event.stopPropagation();
  event.preventDefault();
  event.stopImmediatePropagation();
};

const requestAfter = (customParams: CustomParamsType): void => {
  if (customParams?.notLoading) return;
  requestList.pop();
  if (requestList.length <= 0) {
    closeLoading();
    window.removeEventListener("keyup", preventEvent, true);
    window.removeEventListener("keydown", preventEvent, true);
  }
};

// function addRequestLog(customParams, url, requestId, requestData) {
//   //防止错误影响正常流程
//   try {
//     customParams = customParams ?? {};
//     // 不重要的data可以不记录
//     if (customParams.notLogData) {
//       requestData = '';
//     }
//     // 一些隐私信息比如密码不记录
//     if (customParams.notLogPrivacyPaths && typeof requestData === 'object') {
//       requestData = cloneDeep(requestData);
//       customParams.notLogPrivacyPaths.forEach(v => {
//         if (get(requestData, v)) set(requestData, v, '●');
//       });
//     }
//     requestLog(url, requestId, requestData);
//   } catch (e) {
//     console.error(e);
//   }
// }

const requestBefore = (customParams: CustomParamsType): void => {
  if (customParams?.notLoading) return;
  requestList.push(new Date());
  if (requestList.length <= 1) {
    // 阻止按键事件，防止弹出遮盖后出现按esc 取消弹出层等问题
    window.addEventListener("keyup", preventEvent, true);
    window.addEventListener("keydown", preventEvent, true);
  }

  openLoading();
};

// 添加请求拦截器
axios.interceptors.request.use(
  (config: RequestConfigType) => {
    // const authorization = localStorage.getItem("authorization");
    // config.headers.common["authorization"] = authorization;
    // config.headers.common["x-forwarded-user"] = "185780519919960064";

    let customParams = {};
    // 为了防止同时有多次请求，所有只有第一次触发的请求才将之前的焦点状态存储

    if (config?.data?.customParams) {
      config.customParams = config.data.customParams;
      customParams = config.data.customParams;
      delete config.data.customParams;
    }
    requestBefore(customParams);
    return config;
    // 是否使用谷歌扩展获取加密信息
    // let useExtension = !!Number(localStorage.getItem('useExtension'));
    // return getMacInfo()
    //   .then(macinfo => {
    //     let app = vuex.state.app;
    //     let store = app.store;
    //     //统一将驼峰转为下划线给后台
    //     if (config.data && typeof config.data === 'object') {
    //       config.data = objectTrim(humps.decamelizeKeys(config.data), function(
    //         key,
    //         convert
    //       ) {
    //         return /^[A-Z0-9_]+$/.test(key) ? key : convert(key);
    //       });
    //     }

    //     if (config.params) {
    //       config.params = objectTrim(
    //         humps.decamelizeKeys(config.params),
    //         function(key, convert) {
    //           return /^[A-Z0-9_]+$/.test(key) ? key : convert(key);
    //         }
    //       );
    //     }

    //     config.headers.common = {
    //       ...config.headers.common,
    //       Language: store.languageAliasName || 'en',
    //       'Account-Token': app.token || '',
    //       'Sign-Type': 2,
    //       Authorization: macinfo ? window.btoa(JSON.stringify(macinfo)) : '',
    //     };
    //     config.requestAssociatedId = generateRequestId();
    //     addRequestLog(
    //       customParams,
    //       config.url,
    //       config.requestAssociatedId,
    //       config.params || config.data
    //     );
    //     // 在发送请求之前做些什么
    //     return config;
    //   })
    //   .catch(e => {
    //     return Message.warning(e);
    //   });
  },
  error => {
    requestAfter(error.config?.customParams);
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
// 统一在window unhandledrejection事件处理未捕获的promise事件
axios.interceptors.response.use(
  (response: ResponseConfigType) => {
    requestAfter(response.config?.customParams);

    const { data } = response;

    if (typeof data === "string") {
      return Promise.resolve(data);
    }

    // //统一将后台的下划线转为驼峰转为给前端
    // if (data.data && typeof data.data === "object") {
    //   data.data = humps.camelizeKeys(data.data, function(key, convert) {
    //     return /^[A-Z0-9_]+$/.test(key) ? key : convert(key);
    //   });
    // }

    // 不对错误码进行默认处理
    if (response.config?.customParams?.isNotErrorHandle) {
      if (data.code === 200) return Promise.resolve(data);
      return Promise.reject(data);
    }

    // 对响应数据做点什么
    switch (data.code) {
      case 200:
        return Promise.resolve(data);
      case 401: // 无凭证
      case 3002: // token无效
      case 3003: // 过期
        window.localStorage.setItem("authorization", "");
        window.location.href = "/";
        break;
      default:
        break;
    }
    return Promise.reject(data);
  },
  error => {
    requestAfter(error.config?.customParams);

    // 对响应错误做点什么
    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject({
      ...error,
      message: "commom.netWordError",
    });
  }
);

export default axios;