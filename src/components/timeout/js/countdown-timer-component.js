import React, { Component } from "react";
import CountDownTimer from "./countdown-timer.js";

class TimerComponent extends Component {
  countDownTimer = new CountDownTimer(this.props.timeOutStartValue);

  state = {
    timeDisplay: ""
  };

  completeCallBack = this.props.onComplete;

  componentDidMount() {
    this.countDownTimer.onTick(this.format, this.completeCallBack).start();
    //this.setState({timeDisplay: '4' });
  }

  componentWillUnmount() {
    this.countDownTimer.stop();
  }

  format = (minutes, seconds) => {
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    var timeDisplayData = minutes + " min " + seconds + " sec";
    this.setState({ timeDisplay: timeDisplayData });
    if (seconds === "00" && minutes === "00") {
      this.completeCallBack();
    }
  };

  render() {
    return <>{this.state.timeDisplay}</>;
  }
}

export default TimerComponent;
