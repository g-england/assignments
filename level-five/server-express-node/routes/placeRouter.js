const express = require('express')
const placeRouter = express.Router()
const {v4: uuidv4} = require("uuid")



const places = [
    {state: "Florida", city: "Miami", _id: uuidv4()},
    {state: "California", city: "Sand Diego", _id: uuidv4()},
    {state: "Hawaii", city: "Honolulu", _id: uuidv4()},
    {state: "Texas", city: "Austin", _id: uuidv4()},
    {state: "Utah", city: "Salt Lake City", _id: uuidv4()}
]



placeRouter.route("/")
    .get((req, res) => {
        res.send(places)
    })
    .post((req, res) => {
        const newPlace = req.body
        newPlace._id = uuidv4()
        places.push(newPlace)
        res.send(`Successfully added ${newPlace.state} to the database!`)
    })




module.exports = placeRouter