import {
    renderAvatar,
    renderUserStatus
} from './tableRender'

const pageColumns: { [str: string]: { [str: string]: any;[index: number]: string } } = {
    user: ['id', 'username', 'email', 'avatar', 'status', 'created', 'lastLogin', 'operation'],
}

const columnsDetail: { [str: string]: { [index: string]: any } } = {
    id: { dataIndex: 'id', title: 'ID' },
    username: { dataIndex: 'username', title: '用户名' },
    email: { dataIndex: 'email', title: '邮箱' },
    avatar: { dataIndex: 'avatar', title: '头像', render: renderAvatar },
    status: { dataIndex: 'status', title: '状态', render: renderUserStatus },
    created: { dataIndex: 'created', title: '创建时间' },
    lastLogin: { dataIndex: 'lastLogin', title: '最后登陆时间' },
    operation: { dataIndex: 'operation', title: '操作' }
}

export const getColumnsByPageName = (pageName: string, columns?: { [name: string]: any }) => {
    const arr = pageColumns[pageName]
    if (!arr) return []
    const result: any = []
    arr.forEach((item: string) => {
        if (columns && columns[item]) result.push(Object.assign({ }, columnsDetail[item], columns[item]))
        else if (columnsDetail[item]) result.push(columnsDetail[item])
    })

    return result
}
