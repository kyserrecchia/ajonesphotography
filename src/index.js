import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Nav from './nav.js'
import ImageBox from './imageBox.js'
import './styles/app.css'
import registerServiceWorker from './registerServiceWorker'

class App extends Component {
	constructor(){
		super();
		this.state = {
			picObj: {
					people: ["bedBells.png", "rockyosemite.jpg"],
					animals: [],
					nature: []
			}
		}
	}
	getURL(string){
		var output = require(`../src/images/${string}`)
		return output
	}
	getImg(){
		return {
			backgroundImage: `url(${this.getURL(this.state.picObj.people[0])})`
		}
	}
	render(){
		return (
			<div className="appGrid">
				<Nav/>
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
