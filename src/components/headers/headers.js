import React, {Component } from 'react';

import LoginComponent from '../Auth/Login';
class Header extends Component {
  constructor (props) {
    super(props);
    this.state = {
      showForm: false
    }
  this.authForm = null;
  }
  
  getAuthState (type) {
    switch (type) {
      case 'login':
        this.authForm = <LoginComponent/>;
        this.setState({showForm: true});
      break;
      default:
      this.authForm = null;
    }
  };
  render( ){
    
    return (
      <div> 
        <nav class="navbar  AppNavBar">
          <div class="container-fluid">
            <div class="navbar-header ">
              <a class="navbar-brand" href="#">WebSiteName</a>
            </div>
            <div class="collapse navbar-collapse" id="myNavbar">
              <ul class="nav navbar-nav">
                <li class="active"><a href="#">Home</a></li>
                <li><a href="#">Page 1</a></li>
                <li><a href="#">Page 2</a></li>
                <li><a href="#">Page 3</a></li>
              </ul>
              <ul class="nav navbar-nav navbar-right">
                <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
                <li><a href="#" onClick = {()=> this.getAuthState("login")}><span className="glyphicon glyphicon-log-in" ></span> Login</a></li>
              </ul>
            </div>
          </div>
        </nav>
        <div>{this.authForm}</div>
      </div>
    )
  }
}
export default Header;