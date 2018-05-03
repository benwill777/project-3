import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class Restaurants extends Component {
    render() {
        return (
            <div>
                <h3>Be careful, or I will spill the beans on your placeholder text.</h3>
                <Link to="/survey"> <button> click to take a survey</button></Link>
            </div >
        );
    }
}

export default Restaurants;