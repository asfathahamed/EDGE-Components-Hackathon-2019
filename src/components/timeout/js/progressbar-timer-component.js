import React, { Component } from "react";
import { MDBProgress } from "mdbreact";

class ProgressBarTimer extends Component {
  state = {
    timePercLeft: 100
  };

  componentDidMount() {
    this.startProgress(this.props.timeOutStartValue);
  }

  componentWillUnmount() {
    clearInterval(this.timeIntervalFn);
  }

  timeIntervalFunction = timeLimit => {
    var tempTimeLimit = timeLimit;
    this.timeIntervalFn = setInterval(() => {
      --tempTimeLimit;
      if (tempTimeLimit > 1) {
        this.setState({
          timePercLeft: parseInt((tempTimeLimit * 100) / timeLimit)
        });
      } else {
        this.setState({
          timePercLeft: 0
        });
        clearInterval(this.timeIntervalFn);
        this.props.onComplete();
      }
    }, 1000);
  };

  startProgress = timeLimit => {
    this.timeIntervalFunction(timeLimit);
  };

  render() {
    return (
      <MDBProgress value={this.state.timePercLeft} className="md-progress" />
    );
  }
}

export default ProgressBarTimer;
