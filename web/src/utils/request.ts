/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios from "axios";

const myAxios = axios.create();

interface ConfigType {
  customParams?: any;
}

// 查询数据列表公用方法 get
export const get = (
  url: string,
  val?: any,
  config: ConfigType = {}
): Promise<void> =>
  myAxios.get(url, {
    params: val,
    ...config,
    data: { customParams: config.customParams },
  });

// 删除公用方法
export const del = (url: string, data: any, config: any = {}): Promise<void> =>
  myAxios.delete(url, {
    data: config.customParams
      ? { ...data, customParams: config.customParams }
      : data,
    ...config,
  });

export const post = (
  url: string,
  val: any,
  config: any = {}
): Promise<void> => {
  let contentType;

  return myAxios.request({
    url,
    data: config.customParams
      ? { ...val, customParams: config.customParams }
      : val,
    method: "post",
    headers: {
      "Content-type": contentType,
    },
    ...config,
  });
};

// 修改数据公用方法
export const put = (url: string, val: any, config: any = {}): Promise<void> => {
  let contentType;

  return myAxios.request({
    url,
    data: val,
    method: "put",
    headers: {
      "Content-type": contentType,
    },
    ...config,
  });
};

// formadata post 提交数据
export const postFormData = (
  url: string,
  val: any,
  config: any = {}
): Promise<void> =>
  myAxios.request({
    url,
    data: val,
    method: "post",
    headers: {
      "Content-type": "application/x-www-form-urlencoded",
    },
    ...config,
  });

export default myAxios;
