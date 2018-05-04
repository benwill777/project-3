import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import PageStyle from './styledcomponents/PageStyle'
import styles from 'styled-components'

class Users extends Component {
    state = {
        users: []

    }
    componentDidMount() {
        this.getAllUsers()
    }

    getAllUsers = () => {
        axios.get('/api/users')
            .then(res => {
                console.log('get response: ', res.data)
                this.setState({ users: res.data })
            })
    }
    render() {
        const userLinks = this.state.users.map((user, i) => {
            return (
                <div key={i}>
                    <Link to={`/users/${user._id}`}> My Link {user.username}</Link>
                </div>
            )
        })
        return (
            <PageStyle>

                <h1>Check out the users page! </h1>
                {userLinks}

            </PageStyle >
        );
    }
}

export default Users;