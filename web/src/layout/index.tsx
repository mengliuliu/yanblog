import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Sider from './components/sider';
import Header from './components/header';

const useMakeStyles = makeStyles(
    createStyles({
        content: {
            padding: '20px',
        },
    })
)

const Layout: React.FC = (props: any) => {
    const classes = useMakeStyles()
    return (
        < Grid container>
            <Grid item md={1}>
                <Sider />
            </Grid>
            <Grid item md={11}>
                <Header />
                <Container disableGutters maxWidth={false} className={classes.content}>
                    {props.children}
                </Container>
            </Grid>
        </Grid>
    )
}


export default Layout;