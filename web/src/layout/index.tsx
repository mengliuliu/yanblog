import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Sider from './components/sider';
import Header from './components/header';

const Layout: React.FC = (props: any) =>
    <Grid container>
        <Grid item md={1}>
            <Sider />
        </Grid>
        <Grid item md={11}>
            <Header />
            {props.children}
        </Grid>
    </Grid>

export default Layout;