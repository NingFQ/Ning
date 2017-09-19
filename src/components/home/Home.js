import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../../style/common.css'
import BScroll from 'better-scroll'
export default class New extends React.Component {
	constructor() {
		super();
		this.state = {
			goodList : []
		}
	}
	componentDidMount() {
		this.getData();
	}
	getData() {
    	axios.get('/myapi/gethome').then((res) => {
        	this.setState({
        		goodList : res.data,
        	})
        }).then(() => {
    		setTimeout(() => {
    			new BScroll(this.refs.wrapper,{
					click :  true
				})
    		},100)
    	})
	}
	render() {
		return (
			<div id="po-container" ref="wrapper">
				<div className="main-content">
					<ul className="main-goodlist">
						{
							this.state.goodList.map((item,index) => {
								return(
									<Link to={'/detail' + item._id} className="main-item" key={"a" + index}>
										<li>
											<div className="goodImg">
												<img className="imgUrl" src={item.showImg} alt="" />
											</div>
											<div className="goodName">
												<img className="imgUrl" src={require(`${item.type}`)} alt="" />
												<span>{item.goodName}</span>
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

