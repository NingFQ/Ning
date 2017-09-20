import React from 'react'
import { Link } from 'react-router-dom'
import './detail.css'
import { Carousel } from 'antd';
import BScroll from 'better-scroll'
export default class DetailUI extends React.Component {
	constructor() {
		super();
		this.state ={
			slideImg : [],
			shotImg : [],
			goodInfo : {}
		}
	}
	componentDidMount() {
		this.getDetail();
		console.log(this.props.match)
	}
	getDetail (){
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
					console.log(this.state.goodInfo)
				},100)
			})
		}
	render() {
		return(
			<div id="po-detail">
				<Link to={'/'} className="detail-back">
					<img src={require('../../style/icon/./back.png')} alt=""/>
				</Link>
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
					<div className="detail-cart">
						加入购物车
					</div>
				</div>
			</div>
		)
	}
}

		

