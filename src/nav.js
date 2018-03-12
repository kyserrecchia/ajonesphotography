import React, { Component } from 'react'
import './styles/nav.css'

class Nav extends Component {
	
	switchNum(){
		let numb = this.props.num;
		numb++
		let numba = numb%2
		this.props.upNum(numba)
	}

	render(){
		return (
				<div className="nav">
					<div></div>
					<div className="name">Andrea Jones
						<hr></hr>
					</div>
					<div onClick={()=>this.switchNum()} className="people">People
					</div>
					<div className="animals">Animals
					</div>
					<div className="nature">Nature
					</div>
					<div className="about">About
					</div>
					<div></div>
				</div>
		)
	}
}

export default Nav


