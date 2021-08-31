import { Avatar } from "antd"
import StatusMap from './statusMap'

type UserStatus = "0" | "1"

//头像渲染
export const renderAvatar = (value: string) => {
    return <Avatar src={value} />
}

//用户状态
export const renderUserStatus = (value: UserStatus) => {
    return StatusMap.userStatus[value]
}