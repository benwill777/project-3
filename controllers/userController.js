const express = require('express');
const { User } = Schema
const router = express.Router()
const Schema = require('../db/schema.js')

router.get('/', async (req, res) => {
    try {
        const users = await User.find({})
        res.json(users)
    } catch (err) {
        console.log(err)
    }
})

router.get('/:userId', async (req, res) => {

    try {
        const user = await User.findById(req.params.userId)
        res.json(user)
    } catch (err) {
        console.log(err)
    }
})

router.delete('/:userId', async (req, res) => {
    try {
        const userId = req.params.userId
        await User.findByIdAndRemove(userId)
        res.json({

        })
    } catch (err) {
        console.log
    }

})
router.post('/', async (req, res) => {
    const newUserFromForm = req.body
    const user = new User({
        userName


    })
    try {
        const newUser = await user.save()
        res.json({ newUser })
    } catch (err) {
        console.log("this works")
    }
})



module.exports = router;