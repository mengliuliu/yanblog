import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import avatar from '../../static/images/avatar.jpg'

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'flex-end',
        height: '40px',
        lineHeight: '40px',
        padding: '5px 20px',
        marginBottom: '20px', 
    },
    Avatar: {
        marginRight: '10px',
    },
})

const Header: React.FC = (props: any) => {
    const classes = useStyles()
    return (
        <Grid item md={12}>
            <Paper className={classes.root}>
                <Avatar src={avatar} className={classes.Avatar}/>
                <Typography variant="h6" style={{lineHeight: '40px'}}>
                    颜恒富
                </Typography>
            </Paper>
        </Grid>
    )
}


export default Header;