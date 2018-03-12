import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles/app.css';
import registerServiceWorker from './registerServiceWorker';

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

	getImg(){
		return {
			backgroundImage: `url(${this.getURL(this.state.picObj.people[0])})`
		}
	}

	getURL(string){
		var output = require(`../src/images/${string}`)
		return output
	}

	render(){
		return (
			<div className="appGrid">
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

				<div className="appBody">
					<div className="wsp1">
					</div>
					<div className="wsp2">
					</div>
					<div className="i" style={this.getImg()}>
					</div>
					<div className="wsp3">
					</div>
					<div className="wsp4">
					</div>
				</div>
			</div>
		)
	}
}

ReactDOM.render(
	<App />, 
	document.getElementById('root')
);

registerServiceWorker();
