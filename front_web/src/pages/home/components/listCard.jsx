import {
	Card,
	CardContent,
	CardMedia,
	Grid,
	Typography,
	CardActionArea
} from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'


const ListItem = (props) => {
	const history = useHistory()
	const { id, img, title, author, updateTime, descriptions } = props
	const handleClick = () => {
		history.push(`article/${id}`)
	}
	return (
		<Box>
			<Card className='card'>
				<CardActionArea>
					<Grid container onClick={handleClick}>
						<Grid item md={4}>
							<CardMedia
								className={'media'}
								image={img}
								title='Contemplative Reptile'
							/>
						</Grid>
						<Grid item md={8}>
							<CardContent>
								<Typography gutterBottom variant='h6' component='h2' className='itemTitle'>
									{title}
								</Typography>
								<Typography
									variant='body2'
									color='textPrimary'
									component='p'
									className='tips'>
									<span>By {author}</span> <span>{updateTime}</span>
								</Typography>
								<Typography
									variant='body2'
									color='textSecondary'
									component='p'
									className='descirption'>
									{descriptions}
								</Typography>

							</CardContent>
						</Grid>
					</Grid>
				</CardActionArea>
			</Card>

		</Box>
	)
}

const Box = styled.div`
	.itemTitle{
		margin-bottom: 0 !important;
	}
	.tips{
		margin-bottom: 5px !important;
	}
	.media{
		/* background-size: 100% 100%; */
	}
`

export default ListItem