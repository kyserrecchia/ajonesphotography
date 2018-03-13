import React, { Component } from 'react'
import './styles/nav.css'

class Nav extends Component {
	
	switchKind(e){
		let kin = this.props.kind.toString()
		let target = e.target.innerHTML.toString().toLowerCase()
		if (target===kin){
			this.nextNum()
		} else{
			this.props.upKind(target)
			this.props.upNum(0)
		}
	}

	nextNum(){
		let mod = 2
		let pics = this.props.picsObj
		switch(this.props.kind) {
		    case "animals":
		        mod = pics.animals.length
		        break;
		    case "culture":
		        mod = pics.culture.length
		        break;
		    case "nature":
		        mod = pics.nature.length
		        break;
		    case "hands":
		        mod = pics.hands.length
		        break;
		    case "sundial bridge":
		        mod = pics.sundial.length
		        break;
		    default:
		        break
		}
		let numb = this.props.num;
		numb++
		let numba = numb%mod
		this.props.upNum(numba)
	}

	render(){
		return (
				<div className="nav">
					<div></div>
					<div className="name">Andrea Jones
						<hr></hr>
					</div>
					<div className="animals" onClick={(e)=>this.switchKind(e)}>Animals
					</div>
					<div className="culture" onClick={(e)=>this.switchKind(e)}>culture
					</div>
					<div className="nature" onClick={(e)=>this.switchKind(e)}>Nature
					</div>
					<div className="hands" onClick={(e)=>this.switchKind(e)}>Hands
					</div>
					<div className="sundial" onClick={(e)=>this.switchKind(e)}>Sundial Bridge
					</div>
					<div className="about">
					</div>
					<div></div>
				</div>
		)
	}
}

export default Nav


