import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
//引入组件
import New from './components/New.js'
import Women from './components/Women.js'
import Shoebag from './components/Shoebag.js'
import Home from './components/Home.js'
import Paint from './components/Paint.js'
import Child from './components/Child.js'
import Baby from './components/Baby.js'
import './style/App.css'
const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={New}/>
      <Route path="/women" component={Women}/>
      <Route path="/shoebag" component={Shoebag}/>
      <Route path="/home" component={Home}/>
      <Route path="/paint" component={Paint}/>
      <Route path="/child" component={Child}/>
      <Route path="/baby" component={Baby}/>
      <ul>
        <li><Link to="/">上新</Link></li>
        <li><Link to="/women">女装</Link></li>
        <li><Link to="/shoebag">鞋包</Link></li>
        <li><Link to="/home">居家</Link></li>
        <li><Link to="/paint">美妆</Link></li>
        <li><Link to="/child">童装</Link></li>
        <li><Link to="/baby">母婴</Link></li>
      </ul>
      
    </div>
  </Router>
)
export default App
