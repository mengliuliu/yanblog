
import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Layout,Typography } from 'antd';
import './index.scss'

const Article = () => {
    const { Content,Sider } = Layout;
    const title = Typography
    const data = `
## 基本信息

姓名： 颜恒富

性别： 男

工作年限：半年实习经验

专业： 电子信息工程 / 本科(2017-2021)

邮箱：1315007322@qq.com

电话：15751490399

应聘职位： web前端

博客：www.hblyan.com

GitHub: https://github.com/1315007322

## 专业技能

- 熟练掌握HTML、CSS，熟练页面布局结构，熟悉W3C标准,了解浏览器兼容
- 熟悉HTML5、CSS3、熟悉rem、flex、grid等进行布局，实现响应式布局，熟悉Less、scss的使用
- 掌握JS,DOM等原生JS代码，熟悉一些原生API并能够手写实现，对闭包、作用域、原型链有自己的理解
- 熟悉ES6语法，能够使用ES6语法进行项目开发
- 熟练使用GIT，并使用简单的CI CD进行自动部署项目
- 掌握Vue全家桶，能够使用vueCli、vuex、vue-router配合axios等进行项目开发
- 掌握React相关技术栈，能够使用React-router、Redux配合axios等进行项目开发，对函数式编程有自己的理解
- 了解node、linux

## 实习描述

2020.10-2021.4 上海用友分公司  web前端工程师

- 参与团队开发，完成功能模块代码实现
- 驻场测试修改
- 完成小程序功能上线

## 项目经历

#### 美孚DDC资料库

- pc管理端运用vue，开发资料热区管理模块
  - 利用canvas绘制资料热区
- 小程序和h5端的资料热区浏览功能制作
  - 根据pc端配置的热区，进行渲染，并实现横竖屏放大缩小预览
  - 难点：小程序中嵌套h5，横竖屏兼容性问题

#### 广州五舟科技股份有限公司 mes 系统

- 负责前端页面制作，react、antd pro以及umi.js完成前端页面，
- 功能主要有离散订单、工单工序步骤、原件扫码、上报异常、员工管理等

- - 

####  708所门户对接

- 后端涉及spring boot 泛微数据接口对接
- 前端接口调试，门户金蝶、泛微等数据的调试准确性和性能测试

#### 颖领分享会小程序

- 页面改进，主要是 页面的布局改版
- 轮播图接口开发以及前端轮播图的功能开发
- 框架使用多端框架taro，以及axios网络请求配置

#### 格林奥合同管理后台

- 使用antd-pro（react） 框架
- 基本功能 商机管理-客户合同-供应商合同-收款付款-项目收款确认-项目完结确认





## 自我评价

- 性格外向
- 喜欢钓鱼

####  



`

    return (

        <Layout className='article'>
            <Content>
                <title />
                <ReactMarkdown children={data} />
            </Content>
            <Sider>
               
            </Sider>
        </Layout>

    )
}


export default Article