import React, { Component } from 'react';

import '../static/css/main.scss'

class App extends Component {
  constructor(props) {
		super(props);
		this.state = {
			count: 0
		}
		this.add = this.add.bind(this)
		this.sub = this.sub.bind(this)
	}

	componentDidMount() {
    console.log('App did Mount 6, count ' + this.state.count);
  }

	add() {
		this.setState((preState) => {
			return{
				count: preState.count + 1
			}
		})
	}

	sub() {
		this.setState((preState) => {
			return{
				count: preState.count - 1
			}
		})
	}

	render() {
		return(
			<div className="container">
				<h1>count的值：{this.state.count}</h1>
				<button onClick={() => this.add()}>count+1</button>

				<button onClick={() => this.sub()}>count-1</button>
			</div>	
		) 
	}
}

export default App;