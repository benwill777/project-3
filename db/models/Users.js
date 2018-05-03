const mongoose = require('mongoose')
const Schema = require('../../db/Schema')

const Users = mongoose.model('Users', Schema.UserSchema)

module.exports = Users