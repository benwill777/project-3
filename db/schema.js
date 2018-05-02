const mongoose = require('mongoose')
const Schema = mongoose.Schema

//mongoose.Promise = global.Promise
const QuestionSchema = new Schema({
    question: String,
    answer: String
})

const SurveySchema = new Schema({
    name: String,
    question: [QuestionSchema]
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

})

// Create models for each schema
const User = mongoose.model('User', UserSchema)

module.exports = {
    RestaurantSchema,
    SurveySchema,
    QuestionSchema,
    UserSchema
}