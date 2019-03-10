import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Countdown from 'react-countdown-now';
import IdleTimePopup from './IdleTimePopup';
import '../styles/IdleTimeOut.css';

const MINUTES_UNITL_AUTO_LOGOUT = 2 // in mins

class IdleTimeOut extends Component {
/*
 * @params {string} message - message to be displayed on default popup.
 * @params {number} minsToLogout - no. of minutes to logout.
 * @params {number} secsToLogout - no. of seconds to logout.
 * @params {function} popUp - custom pop up to display when timeout. 
 * @params {function} timeOutHandler - handles the ok button click on default timeout popup.
 * @params {string} okButtonLabel - label to display on ok button.
 * @params {bool} showIdleTimeLeft - show the count down with idle time left
 * @params {number} showIdleTimeBefore - show count down before "showIdleTimeBefore" seconds left for idle time out. 
 */
  static propTypes = {
    message: PropTypes.string,
    minsToLogout: PropTypes.number,
    secsToLogout: PropTypes.number,
    popUp: PropTypes.func,
    timeOutHandler: PropTypes.func,
    okButtonLabel: PropTypes.string,
    showIdleTimeLeft: PropTypes.bool,
    showIdleTimeLeftBefore: PropTypes.number
  }

  static defaultProps = {
    showIdleTimeLeft: false
  }

  constructor(props) {
    super(props);
    this.state = {
      lastAction: Date.now(),
      events: ['click', 'mousemove', 'mousedown', 'keydown', 'keyup', 'keypress', 'touchstart', 'scroll'],
      timer: null,
      countdownTimer: null,
      showWarning: false,
      idleTime: this.getIdleTime(),
      showCountdown: false
    }
    this.initListener();
  }

  // returns calculated showIdleTimeBefore in seconds, when it is not passed or value is greater than the minsToLogout/secsToLogout
  getShowIdleTimeLeftBefore = () => {
    const {showIdleTimeLeftBefore} = this.props;

    if (showIdleTimeLeftBefore) {
      if (showIdleTimeLeftBefore > this.getIdleTime() / 1000) {
        return this.getIdleTime() / 1000;
      }
      return showIdleTimeLeftBefore;
    }

    return this.getIdleTime() / 1000;
  }

  // returns the idle time out in milli seconds
  getIdleTime = () => {
    const {minsToLogout, secsToLogout} = this.props;

    if (minsToLogout) {
      return minsToLogout * 60 * 1000;
    } else if (secsToLogout) {
      return secsToLogout * 1000;
    }

    return MINUTES_UNITL_AUTO_LOGOUT * 60 * 1000;
  }

  // returns the remaining time in seconds to logout when idle
  getIdleTimeLeft = () => this.getIdleTime() - new Date(this.state.lastAction - Date.now()).getSeconds();

  // removes all event listeners on unmount
  componentWillUnmount() {
    this.removeListener();
  }

  // starts timer on mount of the component.
  componentDidMount() {
    if (this.props.timeOutHandler || this.props.popUp) {
      this.startTimer();
    }
  }
 
  // initialises all the listeners required
  initListener = () => {
    if (this.props.timeOutHandler || this.props.popUp) {
      this.state.events.forEach(eventName => document.addEventListener(eventName, this.startTimer));
    }
  }

  // removes listeners which are registered
  removeListener = () => this.state.events.forEach(eventName => document.removeEventListener(eventName, this.startTimer));
 
  // starts the timer for idleTimeOut and if required countdownTimer
  startTimer = () => {
    const lastAction = Date.now();
    let countdownTimer = null;

    if (this.props.showIdleTimeLeft) {
      clearTimeout(this.state.countdownTimer);
      countdownTimer = setTimeout(() => this.setState({showCountdown: true}), this.getIdleTime() - this.getShowIdleTimeLeftBefore() * 1000);
    }

    clearTimeout(this.state.timer);
    const timer = setTimeout(() => this.setState({showWarning: true}), this.getIdleTime());
    
    this.setState({timer, lastAction, countdownTimer, showCountdown: false});
  }
 
  // timeoutHandler will remove the popup and triggers the timeOutHandler passed from outside of this component by passing startTimer as param.
  timeOutHanlder = () => {
    this.setState({showWarning: false, showCountdown: false});
    this.props.timeOutHandler(this.startTimer);
  }

  render() {
    const {message, popUp, children, timeOutHandler, okButtonLabel, showIdleTimeLeft} = this.props;
    const showIdleTimeLeftBefore = this.getShowIdleTimeLeftBefore();
    const {showCountdown} = this.state;

    // either timeOutHandler or popup is not provided then it will simply render the children but do not start timer.
    if (!timeOutHandler && !popUp) {
      console.warn('Warning: Could not start timer, either pass timeOutHandler or custom popUp.');
      return (
        <div>
          {children}
        </div>
      );
    }
    
    return (
      <div>
        {
          this.state.showWarning &&
          <IdleTimePopup
            message={message}
            popUp={popUp}
            okHandler={this.timeOutHanlder}
            okButtonLabel={okButtonLabel}
          />
        }
        {
          showCountdown && !this.state.showWarning && showIdleTimeLeft &&
          <div className="countdown">
            Idle time left <Countdown date={Date.now() + showIdleTimeLeftBefore * 1000} />
          </div>
        }
        <div className="child">
          {children}
        </div>
      </div>
    );
  }
}

export default IdleTimeOut;