const express = require('express')
const userRouter = express.Router()
const {v4: uuidv4} = require("uuid")



const users = [
    {name: "joe", age: 20, _id: uuidv4()},
    {name: "moe", age: 20, _id: uuidv4()},
    {name: "sarah", age: 20, _id: uuidv4()},
    {name: "betty", age: 20, _id: uuidv4()},
    {name: "mike", age: 20, _id: uuidv4()}
]



userRouter.route("/")
    .get((req, res) => {
        res.send(users)
    })
    .post((req, res) => {
        const newUser = req.body
        newUser._id = uuidv4()
        users.push(newUser)
        res.send(`Successfully added ${newUser.name} to the database!`)
    })


module.exports = userRouter