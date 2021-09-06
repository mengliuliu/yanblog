import React from 'react'
import { Container, Divider } from '@material-ui/core'
import Head from './header'
import styled from 'styled-components'

const BasicLayout = (props) => {
	return (
		<Box>
			<Container fixed className='container' maxWidth='md' >
				<Head />
				<Divider />
				{props.children}
			</Container>
		</Box>
	)
}

const Box = styled.div`
	.container{
		height: 100vh;
		background-color: #fff;
		box-shadow: 0px 0px 5px 0px #999;
	}	
`

export default BasicLayout
