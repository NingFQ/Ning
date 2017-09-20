import React from 'react'
import './register.css'
export default class Register extends React.Component {
	render() {
		return (
			<div className="me-register">
				<div className="me-ipt">
					<input type="text" placeholder="手机号/邮箱"/>
				</div>
				<div className="me-get">
					<input type="text" placeholder="请输入验证码"/>
					<button>获取验证码</button>
				</div>
				<div className="me-psw">
					<input type="password" placeholder="请输入密码"/>
				</div>
				<div className="me-psw">
					<input type="password" placeholder="请再次输入密码"/>
				</div>
				<div className="me-registerbtn"><button>点击注册</button></div>
			</div>
		)
	}
}
