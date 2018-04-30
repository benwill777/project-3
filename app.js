import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Restaurants from './components/Restaurants'
import SingleRestaurant from './components/SingleRestaurant'

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/" component={Creatures} />
                        <Route path="/:id" component={SingleCreature} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App