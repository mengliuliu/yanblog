import { useState } from 'react';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import logo from '../../static/images/logo.jpg'


const useStyles = makeStyles({
    root: {
        height: '100vh',
    },
    logo: {
        padding: '5px 10px',
        "& img": {
            width: '100%',
        },
    },
})

const options = [
    {
        icon: 'DescriptionIcon',
        name: '文章管理',
        path: '/blogs',
    },
    {
        icon: 'FaceIcon',
        name: '用户管理',
        path: '/users',
    },
]
const Sider: React.FC = () => {
    const [selectedIndex, setSelectedIndex] = useState(1);
    const classes = useStyles();
    const handleMenuItemClick =
        (item: any, index: number) => {
            setSelectedIndex(index);
            window.location.hash = item.path
        };

    return (
        <Paper className={classes.root}>
            <div className={classes.logo}>
                <img src={logo} alt="" />
            </div>
            <MenuList>
                {options.map((item, index) => (
                    <MenuItem
                        key={item.name}
                        selected={index === selectedIndex}
                        onClick={() => handleMenuItemClick(item, index)}
                    >
                        <Typography variant="inherit">{item.name}</Typography>
                    </MenuItem>
                ))}
            </MenuList>
        </Paper>
    )
}

export default Sider;