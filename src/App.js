import React, { Component } from "react";
import { ReviewRating } from "./components/ReviewRating/ReviewRating";

class App extends Component {
  render() {
    return (
      <div className="ratingComponent">
        <div className="text-center">
          <p className="heading">Rating component</p>
          <ReviewRating />
        </div>
      </div>
    );
  }
}

export default App;
