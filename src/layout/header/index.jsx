import { Typography,Layout } from 'antd';
import Nav from '../../components/menu'
import './index.scss'

const {Header} = Layout
const { Title } = Typography;
const Head = () => {
    return (
        <Header className='header'>
             <div className="header_top">
                <Title level={2}>
                    Yan · blog
                </Title>
            </div>
            <Nav />
        </Header>
       
    )
}

export default Head