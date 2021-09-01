import { useState } from 'react'
import { Form, Input, Button } from 'antd'
import styled from 'styled-components'
// 引入编辑器样式
import 'braft-editor/dist/index.css'
// 引入编辑器组件
import BraftEditor from 'braft-editor'
import OperatingArea from 'src/components/OperatingArea/OperatingArea'


const AddOrEditForm: React.FC<any> = () => {
    const [content, setContent] = useState<any>('')

    return (
        <Box>
            <Form>
                <Form.Item label='标题' name='title'>
                    <Input type="text" />
                </Form.Item>
                <Form.Item label='描述' name='description'>
                    <Input type="text" />
                </Form.Item>
                <Form.Item label='内容' name='content'>
                    <div className='content'>
                        <BraftEditor value={content} onChange={value => setContent(value)} />
                    </div>
                </Form.Item>
                <div className="btn">
                    <Button>返回</Button>
                    <Button type='primary'>提交</Button>
                </div>


            </Form>
        </Box>
    )
}

const Box = styled.div`
    .content{
        border: 1px solid #000;
        border: 1px solid #d9d9d9;
        border-radius: 2px;
        transition: all 0.3s;
    }
    .btn{
        text-align: center;
        button{
            margin: 0 20px;
        }
    }
`

export default AddOrEditForm