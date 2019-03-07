import React, { Component } from 'react';
import StarRatingComponent from './starsRating';

class App extends Component {

  ratingChanged = (updatedStarRating) => {
    console.log(updatedStarRating)
  }
   

  render() {
    return (
      <div className="App">        
        <StarRatingComponent  count={5}  onChange={this.ratingChanged}  size={36} defaulfStarColor={'#cccccc'}  fillfStarColor={"#e9bd6d"} />
      </div>
    );
  }
}

export default App;
