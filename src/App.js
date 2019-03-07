import React, { Component } from 'react';
import StarRating from './starsRating';

class App extends Component {

  ratingChanged = (updatedStarRating) => {
    console.log(updatedStarRating)
  }
  

  render() {
    return (
      <div className="App">
        <StarRating  count={5} value={3} onChange={this.ratingChanged} char={"A"}  size={36} defaulfStarColor={'#fdd5b1'} fillfStarColor={'#ff5733'} half={false} />
        <StarRating  count={5}  onChange={this.ratingChanged}  size={24}  />
      </div>
    );
  }
}

export default App;
