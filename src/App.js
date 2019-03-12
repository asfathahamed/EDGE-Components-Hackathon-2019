import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import GoogleMapWithAutoComplete from "./components/molecules/GoogleMapWithAutoComplete/GoogleMapWithAutoComplete";
import PaginationComponent from './components/organisms/PaginationComponent/PaginationComponent';

class App extends Component {
  
  render() {
    return (
      <div className="main-component-container">
	      <Router>
          <div>
            <nav>
              <ul className="navigation-container">
                <li>
                  <Link to="/">Pagination</Link>
                </li>
                <li>
                  <Link to="/googlemapswithautocomplete/">Google Maps with Auto Complete</Link>
                </li>
              </ul>
            </nav>
            <Route exact path="/" component={PaginationComponent} />
            <Route path="/googlemapswithautocomplete/" component={GoogleMapWithAutoComplete} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;