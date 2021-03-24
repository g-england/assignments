const express = require('express')
const {bounties} = require('../bountyData.js')
const bountyRouter = express.Router()
const {v4: uuidv4} = require('uuid')




//Get all / Post one
bountyRouter.route("/")
    .get((req, res) => {
        res.send(bounties)
    })
    .post((req, res) => {
        const newBounty = req.body
        newBounty._id = uuidv4()
        bounties.push(newBounty)
        res.send(newBounty)
    })

//Get one
bountyRouter.route("/:bountyId")
    .get((req,res) => {
        const boundyId = req.params.boundyId
        const foundBounty = bounties.find(bounty => bounty._id === boundyId)
        res.send(foundBounty)
    })

//Get by type
bountyRouter.route("/search/type")
    .get((req, res) => {
        const type = req.query.type
        const filteredBounties = bounties.filter(bounty => bounty.type === type)
        res.send(filteredBounties)
    })

//Delete one
bountyRouter.route("/:bountyId")
    .delete((req, res) => {
        const bountyId = req.params.bountyId
        const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
        const deletedBounty = `${bounties[bountyIndex].firstName} ${bounties[bountyIndex].lastName}`
        bounties.splice(bountyIndex, 1)
        res.send(`Successfully deleted ${deletedBounty}!`)
    })


//Update one
bountyRouter.route("/:bountyId")
    .put((req, res) => {
        const bountyId = req.params.bountyId
        const updatedObject = req.body
        const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
        const updatedBounty = Object.assign(bounties[bountyIndex], updatedObject)
        res.send(updatedBounty)
    })


module.exports = bountyRouter