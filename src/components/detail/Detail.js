import React from 'react'
import { Link } from 'react-router-dom'
import './detail.css'
import { Carousel } from 'antd';
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
		console.log(this.props.match.params.goodID)
	}
	getDetail (){
		fetch("/myapi/getdetail?_id=" + this.props.match.params.goodID)
			.then( (res) => {
				return res.json();
			})
			.then((json) => {
				this.setState({
					goodInfo : json[0],
					slideImg : json[0].slideImg,
					shotImg : json[0].shotImg
				})
				console.log(this.state.goodInfo)
			})
		}
	render() {
		return(
			<div id="po-detail">
				<Link to={'/'} className="detail-back">
					<img src={require('./back.png')} alt=""/>
				</Link>
				<div className="detail-content">
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
						</div>
						<div className="detail-name">
							<h3>{this.state.goodInfo.goodName}</h3>
						</div>
						<div className="detail-describe">
							<p>{this.state.goodInfo.describe}</p>
						</div>
					</div>
					<div className="detail-shotimg">
						{
							this.state.shotImg.map((item,index) => {
								return (
									<img key={index} src={item} alt="" />
								)
							})
						}
					</div>
				</div>
				<div className="detail-footer">
					<h1>加入购物车</h1>
				</div>
			</div>
		)
	}
}

		

