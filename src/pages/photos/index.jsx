import { Card, Col, Row } from 'antd';

const { Meta } = Card;

const Photos = () => {

    const listData = [];


    for (let i = 0; i < 8; i++) {
        listData.push({
            id: i,
            img: 'https://hblyan.oss-cn-beijing.aliyuncs.com/blog/ChMkJ1fJVSuIJa8nABRXPbS61xoAAU92AOZ08oAFFdV279.jpg',
            title: '相册-' + i,
            description: '这是描述相册的内容'
        });
    }
    return (
        <div className='photos'>
            <Row gutter={24}>
                {
                    listData.map(item =>
                        <Col
                            key={item.id}
                            span={6}>
                            <Card
                                hoverable
                                style={{ marginBottom: '20px' }}
                                cover={<img alt="example" src={item.img} />}
                            >
                                <Meta title={item.title} description={item.description} />
                            </Card>
                        </Col>
                    )
                }
            </Row>

        </div>
    )
}

export default Photos
