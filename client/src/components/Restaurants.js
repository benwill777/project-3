import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Button from './styledcomponents/Button'



class Restaurants extends Component {
    render() {
        return (
            <div>
                <h4> Click here to see all surveys</h4>

                <Link to="/survey"> <Button> click to take a survey</Button> </Link>

            </div >
        );
    }
}

export default Restaurants;