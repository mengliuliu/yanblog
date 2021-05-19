import React from 'react'
import { Container, Divider } from '@material-ui/core'
import Head from './header'
import './index.scss'

const BasicLayout = (props) => {
	return (
		<Container fixed className='container' maxWidth='md' >
			<Head />
            <Divider />
            {props.children}
		</Container>
	)
}

export default BasicLayout
