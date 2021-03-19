const express = require('express')
const bountyRouter = express.Router()
const {v4: uuidv4} = require('uuid')

const bounties = [
    {firstName: "Johnny", lastName: "Depp", living: false, bountyAmount: 5000, type: "Sith", _id: uuidv4()},
    {firstName: "Matt", lastName: "Damon", living: false, bountyAmount: 5000, type: "Jedi", _id: uuidv4()},
    {firstName: "Justin", lastName: "Beiber", living: false, bountyAmount: 5000, type: "Jedi", _id: uuidv4()},
    {firstName: "Peter", lastName: "Griffin", living: false, bountyAmount: 5000, type: "Sith", _id: uuidv4()},
    {firstName: "Lucifer", lastName: "Morningstar", living: false, bountyAmount: 5000, type: "Sith", _id: uuidv4()}
]



//Get all / Post
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

//Get one
bountyRouter.route("/:bountyId")
    .get((req,res) => {
        const boundyId = req.params.boundyId
        const foundBounty = bounties.find(bounty => bounties._id === boundyId)
        res.send(foundBounty)
    })

//Get by type
bountyRouter.route("/search/type")
    .get((req, res) => {
        const type = req.query.type
        const filteredBounties = bounties.filter(bounty => bounty.type === type)
        res.send(filteredBounties)
    })


module.exports = bountyRouter