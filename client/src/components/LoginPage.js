import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import Button from './styledcomponents/Button'

class LoginPage extends Component {
    state = {
        users: [],
        user: {
            userName: '',
            password: ''
        }
    }

    componentDidMount() {
        this.getAllUsers()
    }

    getAllUsers = () => {
        axios.get('/api/users')
            .then(res => {
                console.log("Saving users to state", res.data)
                this.setState({ users: res.data })
            })
            .catch(err => {
                console.error(err)
            })
    }

    handleSignUp = (e) => {
        e.preventDefault()
        axios.post('/api/users', { user: this.state.user })
            .then((res) => {
                const users = [...this.state.users]
                users.push(res.data)
                this.setState({ users })
            })
    }

    handleChange = (event) => {
        const user = { ...this.state.user }
        user[event.target.name] = event.target.value
        this.setState({ user })
    }

    render() {
        const userLinks = this.state.users.map((user, i) => {
            return (
                <div key={i}>
                    <Link to={`/user/${user._id}`}>{user.userName}</Link>
                </div>)
        })

        return (
            <div class="form">
                <div class="Link-style">
                    <Link to='/'><Button>Return Home</Button></Link>
                </div>
                <div>
                    <h3>Log-In</h3>
                    <h6>Please Log In</h6>
                    <div class="update">
                        <p class="styleuserlinks">
                            <div> {userLinks} </div>
                        </p>
                    </div>
                </div>
                <h2>Sign-Up</h2>
                <form onSubmit={this.handleSignUp}>
                    <div>
                        <label htmlFor="userName">User Name</label>
                        <input onChange={this.handleChange} name="userName" type="text" />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input onChange={this.handleChange} name="password" type="text" />
                    </div>
                    <button class="waves-effect waves-light btn center-align btn-small center">Send</button>
                </form>
            </div>

        )
    }
}

export default LoginPage