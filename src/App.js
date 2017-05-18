import React, { Component } from 'react';
import './App.css';
import Control from './Control'
import Timer from './Timer'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      minShown = props.minShown
    }
    this.minDown = this.minDown.bind(this)
  }
  minDown() {
    this.control.decrementMin()
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>React Pomodoro</h1>
        </div>
        <div className="row">
          <div className="col">
            <Control defaultValue="5" lengthType="Break"/>
          </div>
          <div className="col">
            <Control ref={(thing) => {this.control = thing}} defaultValue="25" lengthType="Session" minDown={this.minDown}/>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Timer startMin="25" startSec="0"/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
