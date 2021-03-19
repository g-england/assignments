const express = require('express')
const bountyRouter = express.Router()
const {v4: uuidv4} = require('uuid')

const bounties = [
    {firstName: "Johnny", lastName: "Depp", living: false, bountyAmount: 5000, type: "Jedi", _id: uuidv4()},
    {firstName: "Matt", lastName: "Damon", living: false, bountyAmount: 5000, type: "Jedi", _id: uuidv4()},
    {firstName: "Justin", lastName: "Beiber", living: false, bountyAmount: 5000, type: "Jedi", _id: uuidv4()},
    {firstName: "Peter", lastName: "Griffin", living: false, bountyAmount: 5000, type: "Jedi", _id: uuidv4()},
    {firstName: "Lucifer", lastName: "Morningstar", living: false, bountyAmount: 5000, type: "Jedi", _id: uuidv4()}
]


bountyRouter.route("/")
    .get((req, res) => {
        res.send(bounties)
    })
    .post((req, res) => {
        const newBounty = req.body
        newBounty._id = uuidv4()
        bounties.push(newBounty)
        res.send(`Successfully added ${newBounty.firstName} ${newBounty.lastName} to the database!`)
    })





module.exports = bountyRouter