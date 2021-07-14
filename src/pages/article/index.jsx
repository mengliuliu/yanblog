
import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Layout } from 'antd';
import './index.scss'

const Article = () => {
    const { Content,Sider } = Layout;
    

    return (

        <Layout className='article'>
            <Content>
                <ReactMarkdown/>
            </Content>
            <Sider>
               
            </Sider>
        </Layout>

    )
}


export default Article