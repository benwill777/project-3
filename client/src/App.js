import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div><Home />
        {/* <Route path="/login" component={LogInPage} /> */}
      </div>
    )
  }
}

export default App;
