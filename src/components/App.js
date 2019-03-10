import React from 'react';
import IdleTimeout from './IdleTimeOut';

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
        <div>
            This is a component which uses IdleTimeout.
        </div>
    </IdleTimeout>
);

export default App;