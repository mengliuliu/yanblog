import React, { useEffect, useState } from 'react'
import { Card, Grid, Avatar } from '@material-ui/core'
import Pagination from '@material-ui/lab/Pagination';
import ListItem from './components/listCard'
import { makeStyles } from '@material-ui/core/styles'
import ApiModule from '../../api'
import styled from 'styled-components';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		'& > *': {
			margin: theme.spacing(1),
		},
	},
	small: {
		width: theme.spacing(3),
		height: theme.spacing(3),
	},
	large: {
		width: theme.spacing(7),
		height: theme.spacing(7),
		margin: 'auto',
		transform: 'translateY(-50%)'
	},
}));
const Home = () => {
	const classes = useStyles();
	const [listData, setListData] = useState([])

	useEffect(() => {
		ApiModule.getBlogList().then(res => {
			setListData(res) 
		})
	}, [])
	return (
		<Box>
			<Grid container>
				<Grid item md={8}>
					{listData.map(item => {
						return (
							<ListItem
								key={item.id}
								id={item.id}
								title={item.title}
								img={item.coverImg}
								author={item.author}
								descriptions={item.description}
							/>)
					})}
					<div className='pagination'>
						<Pagination
							count={10}
							variant='outlined'
							shape='rounded'></Pagination>
					</div>
				</Grid>
				<Grid item md={4}>
					<Card className="info">
						<div className="top_bg"></div>
						<Avatar alt='这是我帅气的头像' className={classes.large} src='https://assets.gitlab-static.net/uploads/-/system/user/avatar/7358519/avatar.png?width=90' />
					</Card>
				</Grid>
			</Grid>
		</Box>

	)
}


const Box = styled.div`
	.card{
		margin-top: 15px;
		.media{
			height: 100%;
		}
		
	}
	.pagination{
		display: flex;
		justify-content: center;
		padding: 20px 0;
	}
	.info{
		margin-top: 15px;
		margin-left: 15px;
		height: 300px;
		.top_bg{
			width: 100%;
			height: 150px;
			background-image: url('https://hblyan.oss-cn-beijing.aliyuncs.com/work/20210519182917.png');
			background-position: center;
			background-size: cover;
			background-repeat: no-repeat;
		}
	}
`


export default Home
