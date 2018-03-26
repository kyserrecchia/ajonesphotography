import React, { Component } from 'react'
import './styles/nav.css'

class Nav extends Component {

	nextNum(){
		//ensuring mod is set properly for particular pic array
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

		//changing number
		let numb = this.props.num;
		numb++
		let numba = numb%mod
		this.props.upNum(numba)
	}

	changeKind(kin){
		this.props.upNum(0)
		this.props.upKind(kin)
	}

	render(){
		return (
				<div className="nav">
					<div></div>
					<div className="name">Andrea Jones	
					</div>
					<hr></hr>
					<div className="animals" onClick={(e)=>(this.changeKind(e.target.innerHTML.toLowerCase()))}>Animals
					</div>
					<div className="culture" onClick={(e)=>(this.changeKind(e.target.innerHTML.toLowerCase()))}>culture
					</div>
					<div className="nature" onClick={(e)=>(this.changeKind(e.target.innerHTML.toLowerCase()))}>Nature
					</div>
					<div className="hands" onClick={(e)=>(this.changeKind(e.target.innerHTML.toLowerCase()))}>Hands
					</div>
					<div className="sundial" onClick={(e)=>(this.changeKind(e.target.innerHTML.toLowerCase()))}>Sundial Bridge
					</div>
					<div></div>
				</div>
		)
	}
}

export default Nav


