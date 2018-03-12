import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './styles/imageBox.css'

class ImageBox extends Component {
	render(){
		return (
			<div className="appBody">
				<div className="wsp1">
				</div>
				<div className="wsp2">
				</div>
				<div className="i" style={this.props.getImag()}>
				</div>
				<div className="wsp3">
				</div>
				<div className="wsp4">
				</div>
			</div>
		)
	}
}

export default ImageBox

