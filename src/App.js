import React, { Component } from 'react';
import './App.css';
import Control from './Control'
import Timer from './Timer'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currMin: 25,
      currSec: 0,
      sessLength: 25,
      breakLength: 5,
      isSession: true,
      isRunning: false
    }
    this.minDown = this.minDown.bind(this)
  }
  minDown() {
    this.control.decrementMin()
  }

  startTimer() {
        this.setState({isRunning: true})
        let min = this.state.min
        let sec = this.state.sec
        setInterval(() => {
            if (sec > 0) {
                sec--
                this.setState({sec: sec})
            } else {
                min--
                sec = 59
                this.setState({
                    min: min,
                    sec: sec
                })
            }

            if (min === 0 && sec === 0) {
              if (this.state.isSession) {
                this.setState({isSession:false})
                min = this.state.breakLength
                sec = 0
              } else {
                this.setState({isSession:true})
                min = this.state.sessLength
                sec = 0
              }
            }
            
        }, 10)
    }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>React Pomodoro</h1>
        </div>
        <div className="row">
          <div className="col">
            <Control defaultValue="5" breakLength={this.state.breakLength}/>
          </div>
          <div className="col">
            <Control ref={(thing) => {this.control = thing}} defaultValue="25" sessLength={this.state.sessLength} minDown={this.minDown}/>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Timer onClick={this.startTimer} currMin={this.state.currMin} currSec={this.state.currSec}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App
