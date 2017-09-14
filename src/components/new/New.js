import React from 'react'
import {connect} from 'react-redux'
import { Carousel } from 'antd';
import './New.css'


//UI组件
class NewUI extends React.Component {
	componentDidMount() {
		//生命周期中 调取方法
		this.props.getBannerImg();
	}
	render() {
		return (
			<div id="ps-new">
				<Carousel>
				    {
						this.props.banner_list.map((item,index) => {
							return <div key={'x'+ index}><img src={item.url} alt=""/></div>
						})
					}
				</Carousel>
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
		getBannerImg : () => {
			fetch("/myapi/getdata").then((res) => {
				return res.json();
			}).then((json) => {
				dispatch({
					type : "GET_BANNER",
					payload : json
				})
			})
		}
	}
}

const New = connect(mapState,mapDispatch)(NewUI);
export default New;
