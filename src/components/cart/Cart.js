import React from 'react'
import { Link } from 'react-router-dom'
import './cart.css'

export default class Cart extends React.Component {
	render() {
		return(
			<div id="cart">
				<div className="cart-header">
					<Link to="/" className="cart-back">
						<img src={require('../../style/icon/back.png')} alt=""/>
					</Link>
					<div className="cart-title">
						购物车
					</div>
					<Link to={"/"} className="cart-home">
						<img src={require('../../style/icon/home.png')} alt=""/>
					</Link>
				</div>
			</div>
		)
	}
}
