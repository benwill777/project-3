require('dotenv').config()
const Restaurant = require('../db/models/Restaurant')
const Survey = require('../db/models/Survey')
const mongoose = require('mongoose')
const User = require('../db/models/Users')
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
const customerService = new Survey({
    question: 'how many times did you return your food',
    answer: 'about 600'

})
const survey1 = new Survey({
    name: 'fun survey',
    question: 'how many drinks did you chug',
    answer: 'about hella'
})

const staplehouse = new Restaurant({
    title: 'Staplehouse',
    location: 'Edgewood',
    Survey: [survey1, customerService]
})
const felinis = new Restaurant({
    title: 'Felinis',
    location: 'Buckhead',
})


const theLocal = new Restaurant({
    title: 'The Local',
    location: 'Ponce DeLeon',
    Survey: [survey1, customerService]

})
const theYeahBurger = new Restaurant({
    title: 'Yeah Burger',
    location: 'Virginia Highlands',
    survey: [customerService]
})

const Bennett = new User({
    userName: 'benwill777',
    password: 'bennetttheman',
    Restaurant: [staplehouse, felinis, theLocal, theYeahBurger]
})

User.remove().then(() => {
    return Bennett.save()
}).then(() => {
    console.log('Saved User Successfully')
    db.close()

}).catch((error) => {
    console.log(error)
    db.close()
})