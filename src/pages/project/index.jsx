import { Card, Row, Col } from 'antd';
import './index.scss'

const Project = () => {
    const listData = [];
    const { Meta } = Card;

    for (let i = 0; i < 8; i++) {
        listData.push({
            id: i,
            img: 'https://hblyan.oss-cn-beijing.aliyuncs.com/blog/ChMkJ1fJVSuIJa8nABRXPbS61xoAAU92AOZ08oAFFdV279.jpg',
            title: '项目-' + i,
            description: '这是描述相册的内容'
        });
    }
    return (
        <div>
            <Row gutter={24}>
                {
                    listData.map(item =>
                        <Col
                            key={item.id}
                            span={6}>
                            <Card
                                className='project_item'
                                title={item.title}
                                style={{backgroundColor: ''}}
                            >

                            </Card>
                        </Col>
                    )
                }
            </Row>
        </div>
    )
}

export default Project
