import './App.css'
import { useState } from 'react'
import BasicLayout from './layout'
import 'antd/dist/antd.css';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/home'
import Pigeonhole from './pages/pigeonhole'
import Photos from './pages/photos'
import Board from './pages/board'
import Project from './pages/project'

function App() { 
  return (
    
    <BasicLayout>
      <Switch>
        <Route path='/home' component={Home} exact/>
        <Route path='/photos' component={Photos}/>
        <Route path='/project' component={Project}/>
        <Route path='/board' component={Board}/>
        <Route path='/pigeonhole' component={Pigeonhole}/>
      </Switch>
    </BasicLayout>
  );
}

export default App;


// react 16  与之前  生命周期变化

// hook 
// hook 
// 单项链表 