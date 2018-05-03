import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'react-materialize'
class Restaurants extends Component {
    render() {
        return (
            <div>
                <h3>Be careful, or I will spill the beans on your placeholder text.</h3>
                <Link to="/survey"> </Link>
                <Button waves='light'> click to take a survey</Button>

            </div >
        );
    }
}

export default Restaurants;