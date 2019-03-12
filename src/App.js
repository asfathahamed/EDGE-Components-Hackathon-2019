import React, { Component } from 'react';
import './App.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import RatingPanelSection from './demo/rating-components-example.js';
import SessionTimeOutSample from './demo/timeout-sample.js';
import ProductRatingDemo from './demo/product-rating-demo.js';



class App extends Component {
  render() {
    return (
      <div className="App">
		<SessionTimeOutSample></SessionTimeOutSample>
        	<RatingPanelSection></RatingPanelSection>
	    	<ProductRatingDemo></ProductRatingDemo>
      </div>
    );
  }
}

export default App;
