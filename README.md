#IdleTimeOut

## Description
   -----------

* This will be used to handle time out of the application when the root application is wrapped with this component.
* It will display default popup when no custom popup is not passed.
* You can pass custom popup.
* You can pass timeOutHandler, which will be called when idle time out by passing callback. If this callback is called then it will restart the      time again.


##props

|        Property        |                                                                   Description                                                                  |                                    Default Value                                   |   type   |             Mandatory             |
|:----------------------:|:----------------------------------------------------------------------------------------------------------------------------------------------:|:----------------------------------------------------------------------------------:|:--------:|:---------------------------------:|
| message                | Message to be displayed on the default popup                                                                                                   | Your session has been expired. Do you want to continue the session?                | string   | No                                |
| minsToLogout           | No. of minutes to logout. This will be preferred in case if you also pass secToLogout                                                          | If minsToLogout and secsToLoggout are not passed then its default value is 2 mins. | number   | yes if secsToLogout is not passed |
| secsToLogout           | No. of seconds to logout. If minsToLogout is also passed then this will not be used.                                                           | If minsToLogout and secsToLogout are not passed then its default value is 2 mins.  | number   | yes if minsToLogout is not passed |
| popUp                  | Custom popup to be shown when idle time out.                                                                                                   | default popup with default message will be displayed                               | function | No                                |
| timeOutHandler         | This handler will be called when idle time out and return the callback function. When this callback is called it will restart the timeer again | N/A                                                                                | function | No                                |
| okButtonLabel          | Label to be displayed on the button present on default popup.                                                                                  | Ok                                                                                 | string   | No                                |
| showIdleTimeLeft       | This will show the count down timer at top right corner of the screen.                                                                         | false                                                                              | bool     | No                                |
| showIdleTimeLeftBefore | Decides when countdownTimer to be shown. This will be shown only when showIdleTimeLeft is true                                                 | Considers either minsToLogout or secsToLogout                                      | number   | No                                |

##Example:- 

<IdleTimeout
    message="Idle time logged out"
    secsToLogout={10}
    timeOutHandler={handleTimeOut}
>
    <div>
        This is a component which uses IdleTimeout.
    </div>
</IdleTimeout>

##Steps to run an example

- npm i
- npm start
- open http://localhost:3000/ in web browser to check the example.