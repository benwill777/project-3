import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
class Users extends Component {
    state = {
        users: [],

    }
    componentDidMount() {
        this.getAllUsers()
    }
    getAllUsers = () => {
        axios.get('/api/users')
            .then(res => {
                this.setState[{ users: res.data }]
            })

    }







    render() {
        const userLinks = this.state.users.map((user, i) => {
            return (
                <div key={i}>
                    <Link to={`/users/${users._id}`}> {users.username}</Link>
                </div>
            )
        })
        return (
            <div>
                {userLinks}

            </div>
        );
    }
}

export default Users;