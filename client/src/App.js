import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom'
import LoginPage from './components/LoginPage'
import Restaurants from './components/Restaurants'
import singleRestaurant from './components/singleRestaurant'
class App extends Component {
  render() {
    return (
      <Router>
        <div><Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={LoginPage} />
          <Route path="/restaurants" component={Restaurants} />
          <Route path="/singlerestaurant" component={singleRestaurant} />

        </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
