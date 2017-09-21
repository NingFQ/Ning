import React from 'react'
import { Link } from 'react-router-dom'
import './cart.css'
import BScroll from 'better-scroll'
export default class Cart extends React.Component {
	constructor() {
		super();
		this.state = {
			cartGoodList : []
		}
	}
	componentDidMount() {
		if(localStorage.cart){
			this.setState({
				cartGoodList : JSON.parse(localStorage.cart)
			})
			setTimeout(() =>{
				new BScroll(this.refs.wrapper,{
					click : true
				})
			},0)
		}
		console.log(this.props)
	}
	addCount(e) {
		if(e.target.previousSibling.value > 0){
			e.target.previousSibling.value ++;
		}else{
			return;
		}
	}
	disCount(e) {
		if(e.target.nextSibling.value > 0){
			e.target.nextSibling.value --;
		}else{
			return;	
		}
	}
	cartBack() {
		this.props.history.goBack();
	}
	render() {
		return(
			<div id="cart">
				<div className="cart-header">
					<div onClick={this.cartBack.bind(this)} className="cart-back">
						<img src={require('../../style/icon/back.png')} alt=""/>
					</div>
					<div className="cart-title">
						购物车
					</div>
					<Link to={"/"} className="cart-home">
						<img src={require('../../style/icon/home.png')} alt=""/>
					</Link>
				</div>
				<div className="cart-content" ref="wrapper">
					<div className="cart-container">
						{
							this.state.cartGoodList.map((item,index) => {
								return (
									<div className="cart-gooditem" key={index}>
										<div className="cart-goodinfo">
											<div className="cart-select">
												<input type="checkbox"name=""/>
											</div>
											<div className="cart-img">
												<img src={item.showImg} alt=""/>
											</div>
											<div className="cart-items">
												<div className="cart-describe">
													<div className="cart-goodname">
														<p>{item.goodName}</p>
													</div>
													<div className="cart-price">
														<span>¥{item.price}</span>
														<span>¥{item.original}</span>
													</div>
												</div>
												<div className="cart-num">
													<button onClick={this.disCount.bind(this)}>-</button>
													<input type="text" value={item.num}/>
													<button onClick={this.addCount.bind(this)}>+</button>
												</div>
											</div>
										</div>
										<div className="cart-count">
											<span className="cart-delete">删除商品</span>
											<div className="cart-xiaoji">
												<span>小计(共{item.num}件):</span><span>¥{item.price}</span>
											</div>
										</div>
									</div>								
								)
							})
						}
					</div>
				</div>
				<div className="cart-footer">
					<div className="cart-addcount">共计:1999元</div>
				</div>
			</div>
		)
	}
}
