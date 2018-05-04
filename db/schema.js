const mongoose = require('mongoose')
const Schema = mongoose.Schema

const surveySchema = new Schema({
    name: String,
    question: String,
    answer: String
})

const restaurantSchema = new Schema({
    title: String,
    location: String,
    surveys: [surveySchema]
})
const userSchema = new Schema({
    username: String,
    postion: String,
    restaurants: [restaurantSchema]
})



// Create models for each schema
const User = mongoose.model('User', userSchema)
const Restaurant = mongoose.model('Restaurant', restaurantSchema)
const Survey = mongoose.model('Survey', surveySchema)



module.exports = {
    User,
    Survey,
    Restaurant,
}