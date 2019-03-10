import React from 'react';
import PropTypes from 'prop-types';
import '../styles/IdleTimePopup.css';

// Default time out message
const TIME_OUT_MESSAGE = 'Your session has been expired. Do you want to continue the session?'

/*
 * IdleTimePopup - default popup shown when timeout, if custom popup is not provided.
 * @params {function} okHandler - handles the ok button click on default timeout popup.
 * @params {string} message - message to be displayed on default popup.
 * @params {function} popUp - custom pop up to display when timeout. 
 * @params {string} okButtonLabel - label to display on ok button.
 */
const IdleTimePopup = ({okHandler, message, popUp, okButtonLabel}) => {
    if (popUp) {
        const PopUp = popUp;

        return <PopUp />;
    }
    return (
        <div className="idle-time-popup-container">
            <div className="idle-time-popup-content">
                <p>{message}</p>
                <div className="idle-time-buttons">
                    <button onClick={okHandler}>{okButtonLabel}</button>
                </div>
            </div>
        </div>
    );
}

IdleTimePopup.propTypes = {
    popUp: PropTypes.func,
    message: PropTypes.string,
    okHandler: PropTypes.func.isRequired,
    okButtonLabel: PropTypes.string
};

IdleTimePopup.defaultProps = {
    popUp: null,
    message: TIME_OUT_MESSAGE,
    okButtonLabel: 'Ok'
};

export default IdleTimePopup
