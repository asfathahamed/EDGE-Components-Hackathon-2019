import React from 'react';
import IdleTimeout from './IdleTimeOut';
import '../styles/App.css';

const handleTimeOut = callback => {
    console.info('your session expired, hence restarting the timer again.');
    callback();
}

const App = () => (
    <IdleTimeout
        message="Idle time logged out"
        secsToLogout={7}
        timeOutHandler={handleTimeOut}
        showIdleTimeLeft
        showIdleTimeLeftBefore={4}
    >
        <div className="custom-component">
            <p>
                This is a component which uses IdleTimeout. Pleaseait for 7 secs it will display log out popup. Also it will display the countdown timer when IdleTime left is 4 secs. Once if you click "Ok" on popup, it will restart the timer again for this example.
            </p>
        </div>
    </IdleTimeout>
);

export default App;