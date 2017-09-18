import React from 'react'
import { Carousel } from 'antd';
import { Link } from 'react-router-dom'
import axios from 'axios'
import './new.css'
//import BScroll from 'better-scroll'
export default class New extends React.Component {
	constructor() {
		super();
		this.state = {
			bannerList : [],
			goodList : [],
			allImg : []
		}
	}
	componentDidMount() {
		this.getData();
	}
	getData() {
		axios.get('/myapi/getbanner').then((res) => {
        	this.setState({
        		bannerList : res.data
        	})
        	axios.get('/myapi/getnewgood').then((res) => {
	        	this.setState({
	        		goodList : res.data,
	        	})
	        }).then(() => {
        		setTimeout(() => {
//      			new BScroll("#po-new",{
//  					click :  true
//  				})
        		},0)
        	})
	        
        })
	}
	render() {
		return (
			<div id="po-new" ref="wrapper">
				<div className="new-content">
					<div className="new-banner">
						<Carousel autoplay>
						    {
						    	this.state.bannerList.map((item,index) => {
						    		return  <div key={"a" + index}>
							    				<img className="imgUrl" src={item.url} alt="" />
							    			</div>
						    	})
						    }
						</Carousel>
						<ul className=""></ul>
					</div>
					<ul className="new-goodlist">
						{
							this.state.goodList.map((item,index) => {
								return(
									<Link to={'/detail' + item._id} className="new-item" key={"a" + index}>
										<li>
											<div className="goodImg">
												<img className="imgUrl" src={item.showImg} alt="" />
											</div>
											<div className="goodName">
												<img className="imgUrl" src={require(`${item.type}`)} alt="" />
												<span>{item.goodname}</span>
											</div>
											<div className="goodInfo">
												<span className="goodPrice">¥{item.price}</span>
												<span className="goodPeople">{item.rushNumber}人在抢</span>
											</div>
										</li>
									</Link>
								)
							})
						}
					</ul>
				</div>
			</div>
		)
	}
}
//const mapState = (state) => {
//	return {
//		banner_list : state.banner_list
//	}
//}
//const mapDispatch = (dispatch) => {
//	return {
//		
// 	}
//}
//const New = connect(mapState,mapDispatch)(NewUI);
//export default New;