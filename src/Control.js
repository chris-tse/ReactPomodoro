import React, { Component } from 'react';

class Control extends Component {
	constructor(props) {
		super(props)
		this.state = {
			type: props.lengthType,
			value: props.defaultValue
		}
	}

	render() {
		return (
			<div className="Control">
				<p>{this.props.lengthType} Length</p>
				<a href="#" onClick={this.props.handleDown} className="ControlBtn minus">-</a> <span>{this.props.value}</span> <a href="#" onClick={this.props.handleUp} className="ControlBtn plus">+</a>
			</div>
		);
	}
}

export default Control