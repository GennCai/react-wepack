import React, { Component } from 'react';

class Adder extends Component {
	componentDidMount() {
    console.log('Adder did Mount');
  }

	render() {
		return(
			<div className="">
        <div>Input a is {this.props.a}</div>
        <div>Input b is {this.props.b}</div>
        <div>Sum is {this.props.a + this.props.b}</div>
			</div>	
		) 
	}
}

export default Adder;