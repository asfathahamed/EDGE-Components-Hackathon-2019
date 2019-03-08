This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Session Timeout and Rating Component
Components for showing session timeout warning and getting rating or review.

# Getting Started
Clone or download the repository.  Navigate to the repository directory. Run
### `npm install`

Once the installation of npm dependencies is complete, run
### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

# External Dependencies
- jquery
- MDBReact

# How to use
## Session Timeout component
1. Import SessionTimeOut from timeout-component.js which is present under components folder.

2. Set the properties

| Prop  |  Value | Description  |
| ------------ | ------------ | ------------ |
|  inActivityTime |  numeric value in seconds | The time that needs to be considered as inactive if there is no acitivity on the page/application.   |
| promptTimeOut  | numeric value in seconds  | This value denotes the remaining after the inactivity time has started and before which the session timeout prompt should be showed  |
| title | text | title of the session timeout modal |
| buttonTextContinue | text | Text of the Continue session button |
| buttonTextEnd | text | Text of the End session button |
| timerShow | boolean | If remaining session time has to be showed in numeric timer format |
| countDownShow | boolean | If remaining session time has to be showed in circular timer format |
| progressBarShow | boolean | If remaining session time has to be showed in progress bar format |
| frame | boolean | If the modal has to be shown at top/Bottom (position) with full width |
| size | boolean | If the modal has to be shown at Top-Left, Top-Right,  Bottom-Right, Bottom-Left(position) with normal size |
| position | text | Refer frame, size properties of possible values |
| backdrop | boolean | If there has to be overlay background to the modal |
| centered | boolean | If the modal has to be shown in center position. Make it false it size or frame position is used. |

3. Include the component in whichever page it is needed.

## Rating/Review Component
1. Import RatingComponent from rating-component.js which is present under components folder.

2. Set the properties

| Prop  | Value  |  Description |
| ------------ | ------------ | ------------ |
|  name |  text |  Give any name to the component |
|  theme | bars-horizontal, bars-square, bars-pill, bars-reversed, css-stars  | Based on the rating theme and look needed, give any one of the value.  |
| reverse | boolean | If the rating bars or star are to be shown in reverse order |
| showValues | boolean | If the rating values are to be shown along with the rating bars or star |
| showSelectedRating | boolean | If the value of the rating selected has to be shown explicitly below the rating element |
| Children | HTML - Option elements | Set the Select Option HTML elements with values that are to be shown as rating element inside the RatingComponent element |
| selectionCallback | function | The callback to handle the selection. Two parameters will be returned on selection - value and text |

3. Include the component in whichever page it is needed.

# Demo
https://cryptic-tor-62566.herokuapp.com/
















