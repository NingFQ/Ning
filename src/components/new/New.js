import React from 'react'
import { Carousel } from 'antd';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './new.css'

class NewUI extends React.Component {
	componentDidMount() {
		this.props.getBannerList();
	}
	render() {
		return (
			<div id="ps-new">
				<div className="new-header">
					<Link to={"/me"} className="new-list">
						<img src={require('./me.png')} alt=""/>
					</Link>
					<div className="new-logo">
						<img src={require('./logo.png')} alt="" />
					</div>
					<Link to={"/search"} className="new-info">
						<img src={require('./search.png')} alt=""/>
					</Link>
				</div>
				<div className="new-content">
					<div className="new-banner">
						<Carousel autoplay>
						    {
						    	this.props.banner_list.map((item,index) => {
						    		return  <div key={"a" + index}>
							    				<img src={item.url} alt="" />
							    			</div>
						    	})
						    }
						</Carousel>
						<ul className=""></ul>
					</div>
					<ul className="new-goodlist">
						<Link to={'/detail'} className="new-item">
							<li>
								<div className="goodImg">
									<img src={require('./demo.jpg')} alt="" />
								</div>
								<div className="goodName">
									<img src={require('./recommend.png')} alt="" />
									<span>莲霖梦秋装新款莲霖梦秋装新款</span>
								</div>
								<div className="goodInfo">
									<span className="goodPrice">¥520.0</span>
									<span className="goodPeople">100人在抢</span>
								</div>
							</li>
						</Link>
					</ul>
				</div>
			</div>
		)
	}
}
const mapState = (state) => {
	return {
		banner_list : state.banner_list
	}
}
const mapDispatch = (dispatch) => {
	return {
		getBannerList : () => {
			axios.get('/myapi/getdata')
            .then((res) => {
                dispatch({
                	type : 'GET_BANNER_LIST',
                	payload : res.data
                })
            })
            .catch((err) => {
            	console.log(err)
            })
		}
	}
}
const New = connect(mapState,mapDispatch)(NewUI);
export default New;