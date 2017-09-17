import React from 'react'
import { Link } from 'react-router-dom'
import './detail.css'
export default class Detail extends React.Component {
	render() {
		return(
			<div id="ps-detail">
				<div className="detail-header">
					<Link to={"/"} className="detail-back">
						<img src={require('./back.png')} alt=""/>
					</Link>
					<div className="detail-title">
						详情{this.props.match.params.goodID}
					</div>
					<Link to={"/"} className="detail-home">
						<img src={require('./home.png')} alt=""/>
					</Link>
				</div>
			</div>
		)
	}
}
