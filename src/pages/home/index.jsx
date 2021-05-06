import React from 'react'
import { Button, Layout } from 'antd';
import { List, Space } from 'antd';
import { useHistory } from 'react-router'
import { MessageOutlined, LikeOutlined, EyeOutlined } from '@ant-design/icons';
import './index.scss'

const { Content } = Layout;

const listData = [];
for (let i = 0; i < 23; i++) {
    listData.push({
        id: i,
        href: 'https://ant.design',
        title: `关于react的学习笔记 ${i}`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description:
            'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content:
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    });
}
const Home = () => {
    const history = useHistory()

    const IconText = ({ icon, text }) => (
        <Space>
            {React.createElement(icon)}
            {text}
        </Space>
    );

    return (
        <Layout>
            <Content>
                <List
                    itemLayout="vertical"
                    size="large"
                    pagination={{
                        onChange: page => {
                            console.log(page);
                        },
                        pageSize: 5,

                    }}
                    dataSource={listData}

                    renderItem={item => (
                        <List.Item
                            key={item.title}
                            actions={[
                                <IconText icon={EyeOutlined} text="156" key="list-vertical-star-o" />,
                                <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                                <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                            ]}
                            extra={
                                <img
                                    width={272}
                                    alt="logo"
                                    src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                                />
                            }
                        >
                            <List.Item.Meta
                                title={<Button type='link' style={{padding: 0,fontSize: '20px',color: '#000'}} onClick={() => {
                                    history.push('/article/' + item.id)
                                }}>{item.title}</Button>}
                                description={'2021-05-05 by 颜2愣子'}
                            />
                            {item.content}
                        </List.Item>
                    )}
                />,
                </Content>
            {/* <Sider>
                123
                </Sider> */}
        </Layout>

    )
}

export default Home