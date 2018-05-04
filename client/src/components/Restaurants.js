import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Button from './styledcomponents/Button'
import PageStyle from './styledcomponents/PageStyle'
import axios from 'axios'


class Restaurants extends Component {
    state = {
        user: {},
        restaurants: []
    }

    componentDidMount = () => {
        const userId = this.props.match.params.userId
        axios.get(`/api/users/${userId}`)
            .then((res) => {
                this.setState({ user: res.data, restaurants: res.data.restaurants })
            })
            .catch((err) => {
                console.log(err)
            })

    }

    render() {

        const restaurantLinks = this.state.restaurants.map((restaurant, i) => {
            return (
                <div key={i}>
                    <Link to={`/users/${restaurant._id}`}> <Button>{restaurant.title}</Button></Link>
                </div>
            )
        })
        return (
            <PageStyle>
                <div>
                    <h4> All surveys</h4>
                    {restaurantLinks}


                </div >
            </PageStyle>
        );
    }
}

export default Restaurants;