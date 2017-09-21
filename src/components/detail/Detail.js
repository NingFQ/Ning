import React from 'react'
import './detail.css'
import { Carousel } from 'antd';
import BScroll from 'better-scroll'
export default class DetailUI extends React.Component {
	constructor() {
		super();
		this.state = {
			slideImg : [],
			shotImg : [],
			goodInfo : {}
		}
	}
	componentDidMount() {
		this.getDetail();
	}
	detailBack() {
		this.props.history.goBack();
	}
	getDetail() {
		fetch("/myapi/getdetail?goodid=" + this.props.match.params.goodID)
		.then( (res) => {
			return res.json();
		})
		.then((json) => {
			this.setState({
				goodInfo : json[0],
				slideImg : json[0].slideImg,
				shotImg : json[0].shotImg
			})
		})
		.then(() => {
			setTimeout(() => {
				new BScroll(".detail-content",{
					click : true
				})
			},0)
		})
	}
	addToCart() {
		if(localStorage.cart){
			//把购物车中所有商品id取出
			let cartArr = JSON.parse(localStorage.cart);
			console.log(cartArr);
			let goodIDArr = [];//存放商品ID的数组
			for(let a = 0;a < cartArr.length;a ++){
				goodIDArr.push(cartArr[a].goodid);
			}
			console.log(goodIDArr)
			//在存放商品ID的数组查找 已经存在则加一 不存在则储存
			for(let i = 0;i < goodIDArr.length;i ++){
				if(goodIDArr.indexOf(this.state.goodInfo.goodid) === -1){
					console.log("该商品不存在，第一次添加")
					this.state.goodInfo.num ++;
					cartArr.push(this.state.goodInfo);
					localStorage.cart = JSON.stringify(cartArr);
					return;
				}
				if(goodIDArr[i] === this.state.goodInfo.goodid){
					console.log("该商品已存在，num+1")
					cartArr[i].num ++;
					localStorage.cart = JSON.stringify(cartArr);
					return;
				}
			}
		}else{
			console.log("本地购物车不存在，第一次创建")
			let goodArr = [];
			this.state.goodInfo.num ++;
			goodArr.push(this.state.goodInfo)
			localStorage.cart = JSON.stringify(goodArr);
		}
	}
	render() {
		return(
			<div id="po-detail">
				<div onClick={this.detailBack.bind(this)} className="detail-back">
					<img src={require('../../style/icon/./back.png')} alt=""/>
				</div>
				<div className="detail-content">
					<div className="detail-scroll-content">
						<div className="detail-swiper">
							<Carousel autoplay slickGoTo>
								{
									this.state.slideImg.map((item,index) => {
									return(
											<div key={"a" + index}>
												<img src={item} alt=""/>
											</div>
										)
									})
								}
							</Carousel>
						</div>
						<div className="detail-info">
							<div className="detail-price">
								<span>{this.state.goodInfo.group}人团</span>
								<span>¥{this.state.goodInfo.price}</span>
								<span>¥{this.state.goodInfo.original}</span>
								<span>{this.state.goodInfo.buyNumber}人已购买</span>
							</div>
							<div className="detail-name">
								<h3>{this.state.goodInfo.goodName}</h3>
							</div>
							<div className="detail-describe">
								<p>{this.state.goodInfo.describe}</p>
							</div>
							
						</div>
						<div className="detail-shotimg">
							<div className="detail-line">
								<p>商家展示</p>
							</div>
							{
								this.state.shotImg.map((item,index) => {
									return (
										<img key={index} src={item} alt="" />
									)
								})
							}
						</div>
					</div>
				</div>
				<div className="detail-footer">
					<div className="detail-like">
						<img src={require('../../style/icon/like.png')} alt=""/>
					</div>
					<div className="detail-collect">
						<img src={require('../../style/icon/collect.png')} alt=""/>
					</div>
					<div className="detail-cart" onClick={this.addToCart.bind(this)}>
						加入购物车
					</div>
				</div>
			</div>
		)
	}
}

		

