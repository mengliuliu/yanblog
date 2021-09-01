import { useEffect, useState } from 'react'
import { Table, Button, Space } from 'antd';
import { getColumnsByPageName } from 'src/config/tableConfig'
import OperatingArea from 'src/components/OperatingArea/OperatingArea'
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
                    <Button
                        type='primary'

                    >修改</Button>,
            },
        }
        return getColumnsByPageName('blog', extend)
    }
    return (
        <div>
            <OperatingArea>
                <Button
                    type='primary'
                    onClick={() => {
                        window.location.href = '#/addArticle'
                    }}
                >新增文章</Button>
            </OperatingArea>
            <Table columns={getcloumn()} dataSource={dataSource} />
        </div>
    )
}

export default Blogs;
