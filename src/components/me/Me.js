import React from 'react'
import {
  Route,
  Link
} from 'react-router-dom'

import './me.css'
import Login from './Login'
import Register from './Register'

export default class Me extends React.Component {

	render() {
		return (
			<div id="po-me">
					<div className="me-content">
						<div className="me-header">
							<Link to="/" className="me-back">
								<img src={require('../../style/icon/back.png')} alt=""/>
							</Link>
							<Link to="/me/login" className="login-router">登录</Link>
							<Link to="/me/register" className="register-router">注册</Link>
						</div>
						<div className="me-container">
							<Route path="/me/login" component={Login}/>
							<Route path="/me/Register" component={Register}/>
						</div>
					</div>
			</div>
		)
	}
}
