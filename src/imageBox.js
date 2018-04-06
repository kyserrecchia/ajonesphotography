import React, { Component } from 'react';
import './styles/imageBox.css';

class ImageBox extends Component {	

	nextNum(){
		//ensuring mod is set properly for particular pic array
		let mod = 2;
		let pics = this.props.picsObj;
		switch(this.props.kind) {
		    case "animals":
		        mod = pics.animals.length;
		        break;
		    case "culture":
		        mod = pics.culture.length;
		        break;
		    case "nature":
		        mod = pics.nature.length;
		        break;
		    case "hands":
		        mod = pics.hands.length;
		        break;
		    case "sundial bridge":
		        mod = pics.sundial.length;
		        break;
		    default:
		        break;
		}

		//changing number
		let numb = this.props.num;
		numb++;
		let numba = numb%mod;
		this.props.upNum(numba);
	}

	lastNum(){
		//ensuring mod is set properly for particular pic array
		let mod = 2;
		let pics = this.props.picsObj;
		switch(this.props.kind) {
		    case "animals":
		        mod = pics.animals.length;
		        break;
		    case "culture":
		        mod = pics.culture.length;
		        break;
		    case "nature":
		        mod = pics.nature.length;
		        break;
		    case "hands":
		        mod = pics.hands.length;
		        break;
		    case "sundial bridge":
		        mod = pics.sundial.length;
		        break;
		    default:
		        break;
		}

		let numb = this.props.num;
		numb--;
		let numba;
		if(numb<0){
			numba = mod - 1;
		} else{
			numba = numb%mod;
		}
		this.props.upNum(numba);
		
	}

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
				<div className="last" onClick={(e)=>this.lastNum()}>
				</div>
				<div className="next" onClick={(e)=>this.nextNum()}>
				</div>
			</div>
		)
	}
}

export default ImageBox;

