import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import PasswordInput from './components/password-input';

class App extends Component {
  constructor() {
    super();    
    this.state = {
      password: '',
	  showPasswordStrength: false
    };
    this.handlePasswordChanges = this.handlePasswordChanges.bind(this);
	this.onFocus = this.onFocus.bind(this);
  }

  handlePasswordChanges(event) {
    this.setState({ password: event.target.value});
  }
  
  onFocus(event) {
	  this.setState({showPasswordStrength: true});
  }

  render() {
	  const {showPasswordStrength} = this.state;
    return (
      <div className="App">
        <div className="App-intro">
          <PasswordInput  
            value={this.state.password}
            placeholder='Enter your password'
            handleChanges={this.handlePasswordChanges}
			onFocus={this.onFocus}
			showPasswordStrength={showPasswordStrength}
          />
          <span></span>
        </div>
      </div>
    );
  }
}

export default App;
