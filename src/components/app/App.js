import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
//引入组件
import New from '../new/New.js'
import Women from '../women/Women.js'
import Shoebag from '../shoebag/Shoebag.js'
import Home from '../home/Home.js'
import Paint from '../paint/Paint.js'
import Child from '../child/Child.js'
import Baby from '../baby/Baby.js'
//引入样式文件
import './App.css'
//UI
import { Menu } from 'antd';


//App组件 路由
class App extends React.Component {
  state = {
    current: 'index',
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  render() {
    return (
    		<div id="ps-app">
	    			<div id="ps-header">头部</div>
	 			 		<Router>
	  						<div id="ps-router">
							      <Menu id="ps-nav" 
							      		onClick={this.handleClick} 
							     			selectedKeys={[this.state.current]} 
							     			mode="horizontal"
							     	>
									      	<Menu.Item key="index">
									      			<Link to="/">新品</Link>
									      	</Menu.Item>
									      	<Menu.Item key="women">
									      			<Link to="/women">女装</Link>
									      	</Menu.Item>
									      	<Menu.Item key="shoebag">
									      			<Link to="/shoebag">鞋包</Link>
									      	</Menu.Item>
									      	<Menu.Item key="home">
									      			<Link to="/home">居家</Link>
									      	</Menu.Item>
									      	<Menu.Item key="paint">
									      			<Link to="/paint">美妆</Link>
									      	</Menu.Item>
									      	<Menu.Item key="child">
									      			<Link to="/child">童装</Link>
									      	</Menu.Item>
									      	<Menu.Item key="baby">
									      			<Link to="/baby">母婴</Link>
									      	</Menu.Item>
					      		</Menu>
						      	<Route exact path="/" component={New}/>
						      	<Route  path="/women" component={Women}/>
						      	<Route  path="/shoebag" component={Shoebag}/>
						      	<Route  path="/home" component={Home}/>
						      	<Route  path="/paint" component={Paint}/>
						      	<Route  path="/child" component={Child}/>
						      	<Route  path="/baby" component={Baby}/>
	  						</div>
	  				</Router>
    		</div>
    )
  }
}
export default App
