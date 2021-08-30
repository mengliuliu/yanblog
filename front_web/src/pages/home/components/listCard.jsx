import {
	Card,
	CardContent,
	CardMedia,
	Grid,
	Typography,
	CardActionArea
} from '@material-ui/core'
import './index.scss'

const ListItem = (props) => {
    const {img, title, author, updateTime, descriptions} = props
	return (
		<Card className='card'>
			<CardActionArea>
				<Grid container>
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
	)
}


export default ListItem