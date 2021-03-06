require('dotenv').config()
const { Restaurant } = require('./schema')
const { Survey } = require('./schema')
const { User } = require('./schema')


const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)


const db = mongoose.connection

db.on('open', () => {
    console.log('successful connection with db')
})
db.on('error', (error) => {
    console.log(error)
})

User.remove()

    .then(() => {
        const bennett = new User({
            username: "bennett777",
            postion: "customer",
        })
        const staplehouse = new Restaurant({
            title: "staplehouse",
            location: "Edgewood",

        })
        const tonton = new Restaurant({
            title: "Ton Ton",
            location: "Ponce City Market",

        })
        const random = new Survey({
            name: "customer satisfaction",
            question: "how quickly did your server greet your table?",
            answer: "fast"
        })

        staplehouse.surveys.push(random)

        bennett.restaurants.push(staplehouse, tonton)


        return bennett.save()
    })



