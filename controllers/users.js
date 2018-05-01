const express = require('express')
const { User } = require('../db/schema')
const router = express.Router()

router.get('/', (req, res) => {
    User.find()
        .then(users => {
            res.json(users)
        })
        .catch((err) => console.log(err))
})

router.post('/', (req, res) => {
    User.create(req.body.user)
        .then((data) => {
            res.json(data)
        })

})
module.exports = router;