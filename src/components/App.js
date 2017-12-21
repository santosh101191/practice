import React, {Component} from 'react';

import Header from './headers/headers';
import LoginComponent from './Auth/Login';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false
    }
    this.authForm = null;
  }

  getAuthState(type) {
    switch (type) {
      case 'login':
        this.authForm = <LoginComponent/>;
        this.setState({showForm: true});
        break;
      default:
        this.authForm = null;
    }
  };
  render() {
    return (
      <div className="App">
      <Header> </Header>
      <div className="AppHeader">App</div>
      <button className="btn btn-primary" onClick={()=> this.getAuthState('login')}> ShowModal </button>
      <div>{this.authForm}</div>
      </div>
      
    )
  };
};
export default App; 