const mongoose = require('mongoose')
const Schema = mongoose.Schema

//mongoose.Promise = global.Promise
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
const QuestionSchema = new Schema({
    question: String,
    answer: String,
    user: [UserSchema]
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


// Create models for each schema
const User = mongoose.model('User', UserSchema)
const Restaurant = mongoose.model('Restaurant', RestaurantSchema)
const Survey = mongoose.model('Survey', SurveySchema)
const Question = mongoose.model('Question', QuestionSchema)


module.exports = {
    RestaurantSchema,
    SurveySchema,
    QuestionSchema,
    UserSchema
}