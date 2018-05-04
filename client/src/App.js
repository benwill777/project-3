import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom'
import LoginPage from './components/LoginPage'
import Restaurants from './components/Restaurants'
import singleRestaurant from './components/singleRestaurant'
import Users from './components/Users'
class App extends Component {
  render() {
    return (
      <Router>
        <div><Switch>
          <Route exact path="/login" component={LoginPage} />
          <Route path="/restaurants" component={Restaurants} />
          <Route exact path="/singlerestaurant" component={singleRestaurant} />
          <Route exact path="/" component={Users} />



        </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
