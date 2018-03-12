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
					people: [
							"bedBells.png", 
							"bellsXmasTrees.jpg", 
							"harpBridge.jpg", 
							"sideHarpBridge.jpg",  
							"cloudsHarpBridge.jpg", 
							"upTree.jpg", 
							"rockyosemite.jpg",  
							"jakeBall.png"
					],
					animals: [],
					nature: []
			},
			num: 0
		}
	}
	getURL(string){
		var output = require(`../src/images/${string}`)
		return output
	}
	getImg(){
		let num = this.state.num
		let pic = this.state.picObj.people[num]
		 if(num>3) {
			return {
				backgroundImage: `url(${this.getURL(pic)})`,
				backgroundSize: `initial`,
				backgroundPosition: `center`
			}
		 } else{
		 	return {
		 		backgroundImage: `url(${this.getURL(pic)})`
		 	}
		 }	
	}
	updateNum(numb){
		this.setState({num: numb})
	}
	render(){
		return (
			<div className="appGrid">
				<Nav upNum={(num)=>this.updateNum(num)} num={this.state.num}/>
				<ImageBox getImag={() => this.getImg()}/>
			</div>
		)
	}
}

ReactDOM.render(
	<App />, 
	document.getElementById('root')
);

registerServiceWorker()
