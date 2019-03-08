import React, { Component } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter
} from "mdbreact";
import TimerComponent from "./countdown-timer-component.js";
import ReactCountdownClock from "react-countdown-clock";
import ProgressBarTimer from "./progressbar-timer-component.js";
import "../css/timeout-component.css";

class SessionTimeOut extends Component {
  state = {
    modal: false,
    timeOutStartValue:
      parseInt(this.props.inActivityTime) - parseInt(this.props.promptTimeOut)
  };

  events = [
    "load",
    "mousedown",
    "mousemove",
    "keypress",
    "scroll",
    "touchstart",
    "keypress",
    "click"
  ];

  showSessionTimeoutModal = () => {
    clearTimeout(this.inActivityTimeFn);
    this.events.forEach(name => {
      window.removeEventListener(name, this.resetTimer);
    });
    this.setState({
      modal: !this.state.modal
    });
  };

  inActivityTimeTrigger = () => {
    //console.log(parseInt(this.props.inActivityTime - this.props.promptTimeOut));
    this.inActivityTimeFn = setTimeout(
      this.showSessionTimeoutModal,
      this.state.timeOutStartValue * 1000
    );
  };

  resetTimer = () => {
    clearTimeout(this.inActivityTimeFn);
    this.inActivityTimeTrigger();
  };

  componentDidMount() {
    console.log("timeoutstartvalue" + this.state.timeOutStartValue);
    this.events.forEach(name => {
      window.addEventListener(name, this.resetTimer);
    });
  }

  componentWillUnmount() {
    clearTimeout(this.inActivityTimeFn);
    this.events.forEach(name => {
      window.removeEventListener(name, this.resetTimer);
    });
  }

  toggle = () => {
    /*this.setState({
      modal: !this.state.modal
    });*/
  };

  continueSession = () => {
    this.setState({
      modal: !this.state.modal
    });
    clearTimeout(this.inActivityTimeFn);
    this.events.forEach(name => {
      window.addEventListener(name, this.resetTimer);
    });
  };

  countDownComplete = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  render() {
    return (
      <MDBContainer>
        {/* MODAL */}
        <MDBModal
          size={this.props.size}
          class="sessionTimeOutModal"
          frame={this.props.frame}
          side={this.props.side}
          position={this.props.position}
          backdrop={this.props.backdrop}
          centered={this.props.centered}
          isOpen={this.state.modal}
          toggle={this.toggle}
        >
          <MDBModalHeader>{this.props.title}</MDBModalHeader>
          <MDBModalBody>
            <MDBContainer>
              <p style={{ textAlign: "left" }}>
                {" "}
                {this.props.firstParaContent} &nbsp;
                {(this.props.timerShow || this.props.progressBarShow) && (
                  <TimerComponent
                    onComplete={this.props.logoutSessionCallback}
                    timeOutStartValue={this.state.timeOutStartValue}
                  />
                )}
              </p>
              {this.props.countDownShow && (
                <div style={{ textAlign: "center", marginLeft: "-100px" }}>
                  <ReactCountdownClock
                    style={{ display: "inline-block" }}
                    seconds={this.state.timeOutStartValue}
                    weight={5}
                    color="#fb3"
                    alpha={0.9}
                    size={100}
                    onComplete={this.props.logoutSessionCallback}
                  />
                </div>
              )}
              <p style={{ textAlign: "left" }}>
                {this.props.secondParaContent}
              </p>
            </MDBContainer>
            {this.props.progressBarShow && (
              <ProgressBarTimer
                onComplete={this.props.logoutSessionCallback}
                timeOutStartValue={this.state.timeOutStartValue}
              />
            )}
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.continueSession}>
              {this.props.buttonTextContinue}
            </MDBBtn>
            <MDBBtn color="primary" onClick={this.props.logoutSessionCallback}>
              {this.props.buttonTextEnd}
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}
export default SessionTimeOut;
