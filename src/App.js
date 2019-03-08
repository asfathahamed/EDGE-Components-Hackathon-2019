import React, { Component } from 'react';
import './App.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import RatingPanelSection from './components/rating/js/rating-components-example.js';
import SessionTimeOutSample from './components/timeout/js/timeout-sample.js';


class App extends Component {
  render() {
    return (
      <div className="App">
		<SessionTimeOutSample></SessionTimeOutSample>
        <RatingPanelSection></RatingPanelSection>
      </div>
    );
  }
}

export default App;
