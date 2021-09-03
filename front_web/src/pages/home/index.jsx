import React, { useEffect, useState } from 'react'
import { Card, Grid, Avatar } from '@material-ui/core'
import Pagination from '@material-ui/lab/Pagination';
import './index.scss'
import ListItem from './components/listCard'
import { makeStyles } from '@material-ui/core/styles'
import ApiModule from '../../api'

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
// const listData = []
// for (let i = 0; i < 4; i++) {
// 	listData.push({
// 		id: i,
// 		author: 'Mr.yan',
// 		title: `关于react的学习笔记 ${i}`,
// 		img: 'https://hblyan.oss-cn-beijing.aliyuncs.com/work/20210519151138.jpeg',
// 		descriptions:
// 			'Ant Design, a design language for background applications, is refined by Ant UED Team.',
// 	})
// }
const Home = () => {
	const classes = useStyles();
	const [listData, setListData] = useState([])

	useEffect(() => {
		ApiModule.getBlogList().then(res => {
			setListData(res)
		})
	}, [])
	return (
		<Grid container>
			<Grid item md={8}>
				{listData.map(item => {
					return (
						<ListItem
							key={item.id}
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
	)
}

export default Home
