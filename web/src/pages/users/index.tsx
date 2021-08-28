import { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import UserApiModules from 'api/users'

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});
const Users: React.FC = () => {
    const [dataSource, setDataSource] = useState<[]>([])

    useEffect(() => {
        getUserList()
    }, [])

    const getUserList = () => {
        UserApiModules.getUserList()
            .then(res => {
                if (res) setDataSource(res.data)

            })
            .catch(error => console.error(error)
            )
    }

    const classes = useStyles()
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>用户名</TableCell>
                        <TableCell>头像</TableCell>
                        <TableCell>邮箱</TableCell>
                        <TableCell>最后登录时间</TableCell>
                        <TableCell>操作</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {dataSource.map((item: any) => (
                        <TableRow key={item.username}>
                            <TableCell component="th" scope="row">
                                {item.id}
                            </TableCell>
                            <TableCell component="th" scope="row">
                                {item.username}
                            </TableCell>
                            <TableCell component="th" scope="row">
                                <Avatar src={item.avatar} />
                            </TableCell>
                            <TableCell component="th" scope="row">
                                {item.email || "- - "}
                            </TableCell>
                            <TableCell component="th" scope="row">
                                {item.lastLogin || "- - "}
                            </TableCell>
                            <TableCell component="th" scope="row">
                                <Button variant="contained" color="primary">
                                    修改
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default Users;
