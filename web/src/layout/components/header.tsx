import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import avatar from '../../static/images/avatar.jpg';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
        Avatar: {
            marginRight: '10px',
        },
    })
);

const Header: React.FC = (props: any) => {
    const classes = useStyles()
    return (
        <Grid item md={12}>
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            News
                        </Typography>
                        <Avatar src={avatar} className={classes.Avatar} />
                        <Typography variant="h6" style={{ lineHeight: '40px' }}>
                            颜恒富
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        </Grid>
    )
}


export default Header;