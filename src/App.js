import './App.css'
import BasicLayout from './layout'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/home'
import Pigeonhole from './pages/pigeonhole'
import Photos from './pages/photos'
import Board from './pages/board'
import Project from './pages/project'
import Article from './pages/article'

function App() {
	return (
		<BasicLayout>
			<Switch>
				<Route path='/' component={Home} exact /> 
				<Route path='/photos' component={Photos} />
				<Route path='/project' component={Project} />
				<Route path='/board' component={Board} />
				<Route path='/pigeonhole' component={Pigeonhole} />
				<Route path='/article/:id' component={Article} />
			</Switch>
		</BasicLayout>
	)
}

export default App
