const express = require('express')
const { User, Idea } = require('../db/schema')
const router = express.Router({ mergeParams: true })

router.post('/', (req, res) => {
    User.findById(req.params.id)
        .then((data) => {
            user.ideas.push(new Restaurant)
            user.save()
                .then((data) => {
                    res.json(data)

                })
        })
})


router.delete('/', (req, res) => {
    User.findById(req.params.userid)
        .then((data) => {
            user.update({
                $pull:
                    { ideas: { _id: req.params.id } }
            })
                .then((data) => {
                    res.sendStatus(200)
                })
        })
})
module.exports = router