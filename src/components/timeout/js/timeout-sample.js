import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBCardBody
} from "mdbreact";
import SessionTimeOut from "./timeout-component.js";
import "../css/timeout-component.css";

class SessionTimeOutSample extends Component {
  handleActivityTimeChange = this.handleActivityTimeChange.bind(this);
  handlePromptTimeChange = this.handlePromptTimeChange.bind(this);
  handleTimingStyleChange = this.handleTimingStyleChange.bind(this);
  handleModalStyleChange = this.handleModalStyleChange.bind(this);
  handlePositionStyleChange = this.handlePositionStyleChange.bind(this);
  handleStartSession = this.handleStartSession.bind(this);
  handleBackdropStyleChange = this.handleBackdropStyleChange.bind(this);
  handleCenterStyleChange = this.handleCenterStyleChange.bind(this);

  state = {
    inActivityTime: 0,
    promptTime: 0,
    timingStyle: "1",
    modalStyle: "1",
    backdropStyle: "1",
    centerStyle: "1",
    timerShow: true,
    countdownShow: false,
    progressBarShow: false,
    frameShow: false,
    sideShow: false,
    positionStyle: "top",
    backdrop: true,
    centered: true,
    showTimeOut: false
  };

  logoutSessionCallbackFn = () => {
    window.location.href = "/";
  };

  handleActivityTimeChange(event) {
    this.setState({ inActivityTime: event.target.value });
  }

  handlePromptTimeChange(event) {
    this.setState({ promptTime: event.target.value });
  }

  handleTimingStyleChange(event) {
    if (event.target.value === "1") {
      this.setState({
        timingStyle: event.target.value,
        timerShow: true,
        countdownShow: false,
        progressBarShow: false
      });
    }
    if (event.target.value === "2") {
      this.setState({
        timingStyle: event.target.value,
        timerShow: false,
        countdownShow: true,
        progressBarShow: false
      });
    }
    if (event.target.value === "3") {
      this.setState({
        timingStyle: event.target.value,
        timerShow: true,
        countdownShow: false,
        progressBarShow: true
      });
    }
  }

  handleModalStyleChange(event) {
    if (event.target.value === "1") {
      this.setState({
        modalStyle: event.target.value,
        frameShow: true,
        sideShow: false,
        centered: false
      });
    }
    if (event.target.value === "2") {
      this.setState({
        modalStyle: event.target.value,
        frameShow: false,
        sideShow: true,
        centered: false
      });
    }
  }

  handlePositionStyleChange(event) {
    this.setState({
      positionStyle: event.target.value
    });
  }

  handleStartSession() {
    this.setState({
      showTimeOut: true
    });
  }

  handleBackdropStyleChange(event) {
    this.setState({
      backdropStyle: event.target.value,
      backdrop: event.target.value === 1 ? true : false
    });
  }

  handleCenterStyleChange(event) {
    this.setState({
      centerStyle: event.target.value,
      centered: event.target.value === 1 ? true : false
    });
  }

  render() {
    return (
      <>
        <MDBContainer>
          <MDBRow className="mt-4 mb-4">
            <MDBCol md="12" lg="12">
              <MDBCard className="sessionTimeOutSection">
                <MDBCardBody>
                  <form>
                    <p className="h4 text-center py-4">
                      Session TimeOut & Modal Settings
                    </p>
                    <MDBRow className="mt-4 mb-4">
                      <MDBCol md="6" lg="6">
                        <label htmlFor="inActivityTime" className="grey-text">
                          InActivity Time (in seconds)
                        </label>
                        <input
                          type="text"
                          id="inActivityTime"
                          className="form-control"
                          value={this.state.inActivityTime}
                          onChange={this.handleActivityTimeChange}
                        />
                      </MDBCol>
                      <MDBCol md="6" lg="6">
                        <label htmlFor="promptTime" className="grey-text">
                          Session Timeout Prompt Time (in seconds)
                        </label>
                        <input
                          type="text"
                          id="promptTime"
                          className="form-control"
                          value={this.state.promptTime}
                          onChange={this.handlePromptTimeChange}
                        />
                      </MDBCol>
                    </MDBRow>
                    <MDBRow className="mt-4 mb-4">
                      <MDBCol md="4" lg="4">
                        <label className="grey-text">Timing Style</label>
                        <select
                          value={this.state.timingStyle}
                          onChange={this.handleTimingStyleChange}
                          className="browser-default custom-select"
                        >
                          <option value="1">Timer</option>
                          <option value="2">CountDown</option>
                          <option value="3">ProgressBar</option>
                        </select>
                      </MDBCol>
                      <MDBCol md="4" lg="4">
                        <label className="grey-text">Modal Style</label>
                        <select
                          value={this.state.modalStyle}
                          onChange={this.handleModalStyleChange}
                          className="browser-default custom-select"
                        >
                          <option value="1">Frame</option>
                          <option value="2">Side</option>
                        </select>
                      </MDBCol>
                      <MDBCol md="4" lg="4">
                        <label className="grey-text">Modal Position</label>
                        {this.state.modalStyle === "1" && (
                          <select
                            value={this.state.positionStyle}
                            onChange={this.handlePositionStyleChange}
                            className="browser-default custom-select"
                          >
                            <option value="top">Top</option>
                            <option value="bottom">Bottom</option>
                          </select>
                        )}
                        {this.state.modalStyle === "2" && (
                          <select
                            value={this.state.positionStyle}
                            onChange={this.handlePositionStyleChange}
                            className="browser-default custom-select"
                          >
                            <option value="top-left">Top-Left</option>
                            <option value="top-right">Top-Right</option>
                            <option value="bottom-right">Bottom-Right</option>
                            <option value="bottom-left">Bottom-Left</option>
                          </select>
                        )}
                      </MDBCol>
                    </MDBRow>

                    <MDBRow className="mt-4 mb-4">
                      <MDBCol md="6" lg="6">
                        <label className="grey-text">Backdrop</label>
                        <select
                          value={this.state.backdropStyle}
                          onChange={this.handleBackdropStyleChange}
                          className="browser-default custom-select"
                        >
                          <option value="1">true</option>
                          <option value="2">false</option>
                        </select>
                      </MDBCol>
                      <MDBCol md="6" lg="6">
                        <label className="grey-text">Centered Position</label>
                        <select
                          value={this.state.centerStyle}
                          onChange={this.handleCenterStyleChange}
                          className="browser-default custom-select"
                        >
                          <option value="1">true</option>
                          <option value="2">false</option>
                        </select>
                      </MDBCol>
                    </MDBRow>

                    <MDBRow className="mt-4 mb-4">
                      <MDBCol lg="12">
                        <MDBBtn
                          onClick={this.handleStartSession}
                          color="primary"
                        >
                          Start Session TimeOut
                        </MDBBtn>
                      </MDBCol>
                    </MDBRow>
                  </form>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        {this.state.showTimeOut && (
          <SessionTimeOut
            logoutSessionCallback={() => {
              window.location.href = "/";
            }}
            inActivityTime={parseInt(this.state.inActivityTime)}
            promptTimeOut={parseInt(this.state.promptTime)}
            title={"Session Timeout Warning"}
            firstParaContent={"Your session will expire automatically in"}
            secondParaContent={
              'Select "Continue session" to extend your session.'
            }
            buttonTextContinue={"Continue session"}
            buttonTextEnd={"End session now"}
            timerShow={this.state.timerShow}
            countDownShow={this.state.countdownShow}
            progressBarShow={this.state.progressBarShow}
            frame={this.state.frameShow}
            side={this.state.sideShow}
            position={this.state.positionStyle}
            backdrop={this.state.backdrop}
            centered={this.state.centered}
          />
        )}
      </>
    );
  }
}

export default SessionTimeOutSample;
