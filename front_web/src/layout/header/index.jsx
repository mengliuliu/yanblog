import React from 'react'
import { Typography, Grid, Link } from '@material-ui/core'
import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';


const LinkBehavior = React.forwardRef((props, ref) => {
	return <RouterLink ref={ref}  {...props} />
});

const Head = () => {
	return (
		<Box>
			<Grid container className='header'>
				<Grid item md={4} sm={4}>
					<Typography className='title' variant='h4' align='left'>
						YAN · blog
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

		</Box>
	)
}

const Box = styled.div`
	.header {
		position: -webkit-sticky;
		position: sticky;
		top: 0 !important;
		padding: 0 !important;
		height: auto !important;
		background-color: #fff !important;
		z-index: 999;
		.title {
			font-family: monospace;
			padding: 10px 0;
		}
		.link {
			display: flex;
			align-items: center;
			height: 100%;
			justify-content: flex-end;
			a {
				color: #999;
				padding-right: 20px;
			}
		}
	}

`

export default Head
