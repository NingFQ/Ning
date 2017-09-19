import React from 'react'
import { Link } from 'react-router-dom'
import './search.css'

export default class Search extends React.Component {
	render() {
		return (
			<div id="ps-search">
				<div className="search-header">
					<Link to={"/"} className="search-back">
						<img src={require('./back.png')} alt=""/>
					</Link>
					<div className="search-title">
						商品列表
					</div>
					<Link to={"/"} className="search-home">
						<img src={require('./home.png')} alt=""/>
					</Link>
				</div>
				<div className="search-content"></div>
			</div>
		)
	}
}