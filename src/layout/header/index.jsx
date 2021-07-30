import React from 'react'
import { Typography, Grid ,Link } from '@material-ui/core'
import { Link as RouterLink } from 'react-router-dom';
import './index.scss'



const LinkBehavior = React.forwardRef((props, ref) => {
    return <RouterLink ref={ref}  {...props} />
});

const Head = () => {
	return (
		<Grid container className='header'>
			<Grid item md={4} sm={4}>
				<Typography className='title' variant='h4' align='left'>
					YAN · blog 123123123
				</Typography>
			</Grid>
			<Grid item md={8} sm={8}>
				<Typography className='link' align='right'>
					<Link component={LinkBehavior} to='/' >
						首页
					</Link>
                    <Link component={LinkBehavior} to='/Project'>
						项目
					</Link>
                    <Link component={LinkBehavior} to='/Photos'>
						相册
					</Link>
                    <Link component={LinkBehavior} to='/Board'>
						留言
					</Link>
                    <Link component={LinkBehavior} to='/Pigeonhole'>
						归档
					</Link>
				</Typography>
			</Grid>
           
        </Grid>
	)
}

export default Head
