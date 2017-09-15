import React from 'react'
import { Link } from 'react-router-dom'
import './me.css'

export default class Me extends React.Component {
	render() {
		return (
			<div id="ps-me">
				<div className="me-header">
					<Link to={"/"} className="me-back">
						<img src={require('./back.png')} alt=""/>
					</Link>
					<div className="me-title">
						个人中心
					</div>
					<Link to={"/"} className="me-home">
						<img src={require('./home.png')} alt=""/>
					</Link>
				</div>
				<div className="me-content"></div>
			</div>
		)
	}
}
