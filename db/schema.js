const mongoose = require('mongoose')
const Schema = mongoose.Schema

//mongoose.Promise = global.Promise


const SurveySchema = new Schema({
    name: String,
    question: String,
    answer: String
})

const RestaurantSchema = new Schema({
    title: String,
    location: String,
    survey: [SurveySchema]
})
const UserSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    Restaurants: [RestaurantSchema]
})


// Create models for each schema
const User = mongoose.model('User', UserSchema)
const Restaurant = mongoose.model('Restaurant', RestaurantSchema)
const Survey = mongoose.model('Survey', SurveySchema)



module.exports = {
    RestaurantSchema,
    SurveySchema,
    UserSchema
}