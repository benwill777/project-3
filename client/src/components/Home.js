import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <Router>
                <div>
                    <h1>Welcome to SurveyHQ!</h1>
                    <Link to='/login'><button>Log In Here</button> </Link>

                </div>
            </Router>
        );
    }
}

export default Home;