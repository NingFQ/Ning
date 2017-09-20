import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom'
//引入组件
import New from '../new/New.js'
import Women from '../women/Women.js'
import Shoebag from '../shoebag/Shoebag.js'
import Home from '../home/Home.js'
import Paint from '../paint/Paint.js'
import Child from '../child/Child.js'
import Baby from '../baby/Baby.js'
import Me from '../me/Me.js'
import Search from '../search/Search.js'
import Detail from '../detail/Detail.js'
import Cart from '../cart/Cart.js'
//引入样式文件
import './app.css'
//UI
import { Menu } from 'antd';


//App组件 路由
class App extends React.Component {
  state = {
    current: 'index',
  }
  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
  }
  render() {
    return (
    		<div id="po-app">
	 			 		<Router>
	  						<div id="po-router">
						    		<div id="po-header">
												<Link to={"/me"} className="po-info">
														<img src={require('../../style/icon/me.png')} alt=""/>
												</Link>
												<div className="po-logo">
														<img src={require('../../style/icon/logo.png')} alt="" />
												</div>
												<Link to={"/search"} className="po-list">
														<img src={require('../../style/icon/search.png')} alt=""/>
												</Link>
										</div>
							      <Menu id="po-nav" 
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
					      		<Link to="/cart" id="po-cart">
					      				<img src={require("../../style/icon/cart.png")} alt="购物车"/>
					      		</Link>
						      	<Route exact path="/" component={New}/>
						      	<Route  path="/women" component={Women}/>
						      	<Route  path="/shoebag" component={Shoebag}/>
						      	<Route  path="/home" component={Home}/>
						      	<Route  path="/paint" component={Paint}/>
						      	<Route  path="/child" component={Child}/>
						      	<Route  path="/baby" component={Baby}/>
						      	<Route  path="/me" component={Me} />
						      	<Route  exact path="/me" render={()=><Redirect to="/me/login"/>}/>
						      	
						      	<Route  path="/search" component={Search}/>
						      	<Route  path="/detail:goodID" component={Detail}/>
						      	<Route  path="/cart" component={Cart}/>
	  						</div>
	  				</Router>
    		</div>
    )
  }
}
export default App


