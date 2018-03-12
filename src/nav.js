import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './styles/nav.css'

class Nav extends Component {
	render(){
		return (
				<div className="nav">
					<div></div>
					<div className="name">Andrea Jones
						<hr></hr>
					</div>
					<div className="people">People
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


