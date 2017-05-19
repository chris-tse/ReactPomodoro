import React, { Component } from 'react';

class Timer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            min: Number(props.currMin),
            sec: Number(props.currSec),
            
        }

        this.startTimer = this.startTimer.bind(this)
        this.decrementMin = this.decrementMin.bind(this)
        
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
            <div className="Timer">
                <p>{this.state.isRunning ? phrase : "  "}</p>
                <span id="minute">{this.state.min}:</span><span id="second">{sec}</span>
            </div>
        );
    }
}

export default Timer