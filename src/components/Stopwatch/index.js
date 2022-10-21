// Write your code here

import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {timeInMinutes: 0, timeInSeconds: 0}

  renderTimeLapse = () => {
    const {timeInMinutes, timeInSeconds} = this.state

    const remainingSeconds = timeInMinutes * 60 + timeInSeconds

    const minutes = Math.floor(remainingSeconds / 60)

    const seconds = Math.floor(remainingSeconds % 60)

    const stringifiedMinutes = minutes > 9 ? minutes : `0${minutes}`
    const stringifiedSeconds = seconds > 9 ? seconds : `0${seconds}`

    return `${stringifiedMinutes}:${stringifiedSeconds}`
  }

  onStart = () => {
    this.timeID = setInterval(this.onStartTimer, 1000)
  }

  onStop = () => {
    clearInterval(this.timeID)
  }

  onReset = () => {
    this.setState({timeInSeconds: 0, timeInMinutes: 0})
  }

  onStartTimer = () => {
    this.setState(prevState => ({
      timeInSeconds: prevState.timeInSeconds + 1,
    }))
  }

  render() {
    return (
      <div className="mainContainer">
        <div className="cardContainer">
          <h1>Stopwatch</h1>
          <div className="card">
            <div className="imageAndTimer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
              <h1 className="headingTimer">Timer</h1>
            </div>
            <h1>{this.renderTimeLapse()}</h1>
            <div>
              <button
                className="button green"
                type="button"
                onClick={this.onStart}
              >
                Start
              </button>
              <button
                className="button red"
                type="button"
                onClick={this.onStop}
              >
                Stop
              </button>
              <button
                className="button yellow"
                type="button"
                onClick={this.onReset}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
