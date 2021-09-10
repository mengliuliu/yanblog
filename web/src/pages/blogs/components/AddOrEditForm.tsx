
import { useState, useRef } from 'react'
import { Form, Input, Button, message } from 'antd'
import styled from 'styled-components'
import BlogModuleApi from 'api/blog'
import MdEditor from 'react-markdown-editor-lite'; 
import 'react-markdown-editor-lite/lib/index.css';

const MarkdownIt = require('markdown-it')

const mdParser = new MarkdownIt();

const AddOrEditForm: React.FC<any> = () => {
    const [content, setContent] = useState<any>('')
    const [form] = Form.useForm<any>()
    const editBox = useRef<any>()
    const handSubmit = () => {
        form.validateFields()
            .then(res => {
                res.userId = 1
                res.content = content;
                console.info(res)
                BlogModuleApi.addBlog(res)
                    .then((data: any) => {
                        message.success(data.message)
                        window.location.href = '#/blogs'
                    })
                    .catch(err => console.info(err))
            })
            .catch(error => console.info(error))
    }

    const handChange = (value: any) => {
        setContent(value.toHTML())
    }

    // Finish!
    const handleEditorChange = (html: any, text: any) => {
        // console.info('handleEditorChange', html, text)
        console.info(html.text)
        setContent(html.text)
    }

    return (
        <Box>
            <Form form={form}>
                <Form.Item
                    rules={[
                        { required: true, message: '请输入标题' },
                    ]}
                    label='标题'
                    name='title'
                >
                    <Input type="text" placeholder='请输入标题' />
                </Form.Item>
                <Form.Item
                    rules={[
                        { required: true, message: '请输入描述' },
                    ]}
                    label='描述'
                    name='description'
                >
                    <Input type="text" placeholder='请输入描述' />
                </Form.Item>
                <Form.Item
                    rules={[
                        { required: true, message: '请输入封面地址' },
                    ]}
                    label='封面'
                    name='coverImg'
                >
                    <Input type="text" placeholder='请输入封面地址' />
                </Form.Item>
                <Form.Item
                    label='内容'
                    name='content'
                >
                    <div className='content'>
                        <MdEditor style={{ height: '500px' }} 
                        renderHTML={text => mdParser.render(text)} 
                        onChange={handleEditorChange} />
                    </div>
                </Form.Item>
                <div className="btn">
                    <Button>返回</Button>
                    <Button type='primary' onClick={handSubmit}>提交</Button>
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