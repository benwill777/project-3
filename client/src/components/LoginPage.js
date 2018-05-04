import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import Button from './styledcomponents/Button'
import PageStyle from './styledcomponents/PageStyle'

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
                const users = [...this.state.user]
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
            <PageStyle>
                <div class="form">
                    <div class="Link-style">
                        <Link to='/users'><Button>Users</Button></Link>
                    </div>
                    <div>
                        <h2>Log-In</h2>

                        <div class="update">
                            <p class="styleuserlinks">
                                <div> {userLinks} </div>
                            </p>
                        </div>
                    </div>

                    <form onSubmit={this.handleSignUp}>
                        <div>
                            <label htmlFor="userName">User Name</label>
                            <input onChange={this.handleChange} name="userName" type="text" />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input onChange={this.handleChange} name="password" type="text" />
                        </div>
                        <Button >Sign-In</Button>
                    </form>
                </div>
            </PageStyle>

        )
    }
}

export default LoginPage