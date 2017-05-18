import React, { Component } from 'react';

class Timer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            min: Number(props.startMin),
            sec: Number(props.startSec),
            isSession: true,
            isRunning: false
        }

        this.startTimer = this.startTimer.bind(this)
        this.decrementMin = this.decrementMin.bind(this)
        
    }

    decrementMin() {
        let min = this.state.min
        min--
        this.setState({min: min })
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
            
        }, 10)
    }

    render() {
        let sec = this.state.sec
        let phrase = ""

        if ( sec < 10 ) {
            sec = "0"+sec
        }

        if (this.state.isSession) {
            phrase  = "Get Working!"
        } else {
            phrase = "Break Time"
        }
        
        return (
            <div className="Timer" onClick={this.startTimer}>
                <p>{this.state.isRunning ? phrase : "  "}</p>
                <span id="minute">{this.state.min}:</span><span id="second">{sec}</span>
            </div>
        );
    }
}

export default Timer