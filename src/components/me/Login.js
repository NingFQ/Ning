import React from 'react'
import './login.css'

export default class Login extends React.Component {
	Login() {
		console.log(this.refs.ipt1.value,this.refs.ipt2.value)
	}
	render() {
		return (
			<div className="me-login">
				<div className="me-ipt"><input type="text" placeholder="手机号/邮箱" ref="ipt1"/></div>
				<div className="me-psw"><input type="password" placeholder="密码" ref="ipt2"/></div>
				<div className="me-forget"><span>忘记密码?</span></div>
				<div className="me-loginbtn" onClick={this.Login.bind(this)}><button>登录</button></div>
			</div>
		)
	}
}
