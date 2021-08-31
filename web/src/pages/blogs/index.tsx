import { useEffect, useState } from 'react'
import { Table, Button, Space } from 'antd';
import { getColumnsByPageName } from 'src/config/tableConfig'
import BlogsApiModules from 'api/blog'

const Blogs: React.FC = () => {
    const [dataSource, setDataSource] = useState<[{ [key: string]: any }]>([{ }])
    const [open, setOpen] = useState<boolean>(false)
    const [editData, setEditData] = useState<any>()

    useEffect(() => {
        getUserList()
    }, [])

    const getUserList = () => {
        BlogsApiModules.getBlogList()
            .then(res => {
                if (res) {
                    setDataSource(res.data)
                }
            })
            .catch(error => console.error(error)
            )
    }
    const handEdit = (value: any) => {
        setEditData(value)
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const getcloumn = () => {
        const extend = {
            operation: {
                render: () => 
                <Button type='primary'>修改</Button>,
            },
        }
        return getColumnsByPageName('blog', extend)
    }
    return (
        <div>
            <Table columns={getcloumn()} dataSource={dataSource} />
        </div>
    )
}

export default Blogs;
