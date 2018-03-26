import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Nav from './nav.js'
import ImageBox from './imageBox.js'
import './styles/index.css'
import registerServiceWorker from './registerServiceWorker'

class App extends Component {
	constructor(){
		super();
		this.state = {
			picObj: {
					animals: [
							"bedBells.png", 
							"youngBells.jpg",
							"bellsXmasTrees.jpg", 
							"perfectBells.jpg",
							"mistCloseLyin.jpg",
							"kael.jpg",
							"mikes.jpg",
							"mikeSniffs.jpg",
							"molls.jpg",
							"kirbWindow.jpg",
					],
					culture: [ 
							"sushi.jpg",
							"potatos.jpg"
					],
					nature: [
							"upTree.jpg",
							"rose.jpg",
							"treeTrail.jpg",
					],
					hands: [
							"handwrite.jpg",
							"handhold.jpg",
					],
					sundial: [
							"harpBridge.jpg", 
							"sideHarpBridge.jpg",  
							"cloudsHarpBridge.jpg",
					]
			},
			num: 0,
			picKind: "animals"
		}
	}
	getPath(string){
		var output = require(`../src/images/${string}`)
		return output
	}
	getImg(){
		let num = this.state.num
		let kind = this.state.picKind
		//kinds
		let anima = this.state.picObj.animals
		let cult = this.state.picObj.culture
		let natr = this.state.picObj.nature
		let hands = this.state.picObj.hands
		let sundi = this.state.picObj.sundial
		switch(kind) {
		    case "animals":
		        return this.contain(anima[num])
		    case "culture":
		        return this.contain(cult[num])
		    case "nature":
		        return this.contain(natr[num])
		    case "hands":
		        return this.contain(hands[num])
		    case "sundial bridge":
		        return this.contain(sundi[num])
		    default:
		        break
		}	
	}

	contain(pic){
		return {
		 		backgroundImage: `url(${this.getPath(pic)})`,
		 		backgroundSize: `contain`,
		 		backgroundPosition: `center`
		 	}
	}

	updateKind(kin){
		this.setState({picKind: kin})
	}

	updateNum(numb){
		this.setState({num: numb})
	}

	render(){
		return (
			<div className="appGrid">
				<Nav 
					upKind={(kin)=>this.updateKind(kin)}
					upNum={(num)=>this.updateNum(num)} 
					num={this.state.num}
					picsObj={this.state.picObj}
					kind={this.state.picKind}

				/>
				<ImageBox 
					getImag={() => this.getImg()}
					upKind={(kin)=>this.updateKind(kin)}
					upNum={(num)=>this.updateNum(num)} 
					num={this.state.num}
					picsObj={this.state.picObj}
					kind={this.state.picKind}
					/>
			</div>
		)
	}
}

ReactDOM.render(
	<App />, 
	document.getElementById('root')
);

registerServiceWorker()
