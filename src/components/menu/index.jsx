import { Menu } from 'antd';
import { useState } from 'react';
import { useHistory } from 'react-router'
import './index.scss'


const Nav = () => {
    const history = useHistory()
    const [currentkey,setCurrentkey] = useState([history.location.pathname.split('/')[1] === ''?'home': history.location.pathname.split('/')[1]])
    const handClick = (e) => {
        console.log(e.key);
        setCurrentkey([e.key])
        if(e.key === 'home'){
            history.push(`/`)

        }else{
            history.push(`/${e.key}`)
        }
    } 
    

    return (
        
            <Menu
                mode='horizontal'
                className='nav'
                selectedKeys={currentkey}
            >
                <Menu.Item key="home" onClick={handClick}>
                    首页
                </Menu.Item>
                <Menu.Item key="project" onClick={handClick}>
                    项目
                </Menu.Item>
                <Menu.Item key="board" onClick={handClick}>
                    留言
                </Menu.Item>
                <Menu.Item key="photos" onClick={handClick}>
                    相册
                </Menu.Item>
                <Menu.Item key="pigeonhole" onClick={handClick}>
                    归档
                </Menu.Item>
            </Menu>
    )
}

export default Nav