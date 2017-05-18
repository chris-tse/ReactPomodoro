import React, { Component } from 'react';

class Control extends Component {
	constructor(props) {
		super(props)
		this.state = {
			type: props.lengthType,
			value: props.defaultValue
		}
		this.handleMinus = this.handleMinus.bind(this)
		this.handlePlus = this.handlePlus.bind(this)
	}

	handleMinus() {
		let curr = Number(this.state.value)
		
		if (curr >= 1) {
			curr--
		}

		this.setState({ value: curr })
		this.props.minDown()
	}

	handlePlus() {
		let curr = Number(this.state.value)

		if (curr < 60) {
			curr++
		} 

		this.setState({ value: curr })		
	}

	render() {
		return (
			<div className="Control">
				<p>{this.props.lengthType} Length</p>
				<a href="#" onClick={this.handleMinus} className="ControlBtn minus">-</a> <span>{this.state.value}</span> <a href="#" onClick={this.handlePlus} className="ControlBtn plus">+</a>
			</div>
		);
	}
}

export default Control