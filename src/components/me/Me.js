import React from 'react'
import { Link } from 'react-router-dom'
import './me.css'

export default class Me extends React.Component {
	constructor() {
		super();
		this.state = {
			showHtml : 
				<div id="ps-me">
					<div className="me-header">
						<Link to={"/"} className="me-back">
							<img src={require('./back.png')} alt=""/>
						</Link>
						<div className="me-title">
							个人中心
						</div>
						<div className="me-register" onTouchEnd={this.changeRegister.bind(this)}>
							<span>注册</span>
						</div>
					</div>
					<div className="me-content">
						<form className="me-form1">
							<div className="me-ipt"><input type="text" placeholder="手机号/邮箱"/></div>
							<div className="me-psw"><input type="password" placeholder="密码"/></div>
							<div className="me-forget"><span>忘记密码?</span></div>
							<div className="me-login"><button>登&nbsp;&nbsp;&nbsp;&nbsp;录</button></div>
						</form>
					</div>
				</div>
		}
	}
	changeRegister() {
		this.setState({
			showHtml : 
				<div id="ps-me">
					<div className="me-header">
						<Link to={"/"} className="me-back">
							<img src={require('./back.png')} alt=""/>
						</Link>
						<div className="me-title">
							个人中心
						</div>
						<div className="me-register" onTouchEnd={this.changeLogin.bind(this)}>
							<span>登录</span>
						</div>
					</div>
					<div className="me-content">
						<form className="me-form2">
							<div className="me-ipt"><input type="text" placeholder="手机号/邮箱"/></div>
							<div className="me-psw"><input type="password" placeholder="请输入密码"/></div>
							<div className="me-psw"><input type="password" placeholder="请再次输入密码"/></div>
							<div className="me-login"><button>点击注册</button></div>
						</form>
					</div>
				</div>
		})
	}
	changeLogin() {
		this.setState({
			showHtml : 
				<div id="ps-me">
					<div className="me-header">
						<Link to={"/"} className="me-back">
							<img src={require('./back.png')} alt=""/>
						</Link>
						<div className="me-title">
							个人中心
						</div>
						<div className="me-register" onTouchEnd={this.changeRegister.bind(this)}>
							<span>注册</span>
						</div>
					</div>
					<div className="me-content">
						<form className="me-form1">
							<div className="me-ipt"><input type="text" placeholder="手机号/邮箱"/></div>
							<div className="me-psw"><input type="password" placeholder="密码"/></div>
							<div className="me-forget"><span>忘记密码?</span></div>
							<div className="me-login"><button>登&nbsp;&nbsp;&nbsp;&nbsp;录</button></div>
						</form>
					</div>
				</div>
		})
	}
	render() {
		return (
				this.state.showHtml
		)
	}
}
