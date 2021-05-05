import React from 'react'
import { Layout } from 'antd';
import Head from './header'

import './index.scss'

const { Footer } = Layout;
const BasicLayout = (props) => {
    console.log(props)
    const { children } = props
    return (
        <Layout className="container">
            <Head />
            {
                React.Children.map(children, (child, i) => {
                    return child;
                })
            }
            {/* {props.children.map(item => item)} */}
            <Footer>
                Yan © 版权所有
            </Footer>
        </Layout>
    )
}

export default BasicLayout