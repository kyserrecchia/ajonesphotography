import React, { Component } from 'react'
import './styles/nav.css'

class Nav extends Component {
	
	switchNum(){
		let numb = this.props.num;
		numb++
		let numba = numb%13
		this.props.upNum(numba)
	}

	render(){
		return (
				<div className="nav">
					<div></div>
					<div className="name">Andrea Jones
						<hr></hr>
					</div>
					<div onClick={()=>this.switchNum()} className="people">Switch
					</div>
					<div className="animals">
					</div>
					<div className="nature">
					</div>
					<div className="about">
					</div>
					<div></div>
				</div>
		)
	}
}

export default Nav


