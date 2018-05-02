require('dotenv').config()
const Restaurant = require('../db/models/Restaurant')
const Survey = require('../db/models/Survey')
const Question = require('../db/models/Question')
const mongoose = require('mongoose')
const db = mongoose.connection
db.on('open', () => {
    console.log('successful connection with db')
})
db.on('error', (error) => {
    console.log(error)
})
// connect to database
mongoose.connect(process.env.MONGODB_URI)

db.once('open', () => {
    console.log(`Mongoose has connected to MongoDB`)
})
const Bennett = new User({
    userName: 'benwill777',
    password: 'bennetttheman',

})

const muddpie = new Restaurant({
    title: 'Staplehouse',
    location: 'Edgewood',
    survey: [{
        name: 'fake survey',
        question: [{
            question: 'how big is you dinner',
            answer: 'hello deez'
        }]
    }]

})
const felinis = new Restaurant({
    title: 'Felinis',
    location: 'Buckhead',
    survey: [{
        name: 'fun survey',
        question: [{
            question: 'how many drinks did you chug',
            answer: 'about hella'
        }]
    }]

})
const theLocal = new Restaurant({
    title: 'The Local',
    location: 'Ponce DeLeon',
    survey: [{
        name: 'Wing Sauce Survey',
        question: [{
            question: 'how many bugs did you eat',
            answer: 'about five'
        }]
    }]

})
const theYeahBurger = new Restaurant({
    title: 'Yeah Burger',
    location: 'Virginia Highlands',
    survey: [{
        name: 'Customer Satisfaction Survey',
        question: [{
            question: 'how many times did you return your food',
            answer: 'about 600'
        }]
    }]

})
Restaurant.remove().then(() => {
    return Restaurant.insertMany([muddpie, felinis, theLocal,
        theYeahBurger
    ])
}).then(() => {
    console.log('Saved User Successfully')
    db.close()
}).catch((error) => {
    console.log(error)
    db.close()
})