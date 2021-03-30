const express = require('express')
// const {bounties} = require('../bountyData.js')
const bountyRouter = express.Router()
const Bounty = require('../models/bounty.js')




//Get All
bountyRouter.route("/")
    .get((req, res, next) => {
        Bounty.find((err, bounties) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(bounties)
        })
    })

// Post One
bountyRouter.route("/")
    .post((req, res, next) => {
        const newBounty = new Bounty(req.body)
        newBounty.save((err, savedBounty) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(savedBounty)
        })
    })

//Get One
bountyRouter.route("/:bountyId")
    .get((req,res, next) => {
        Bounty.findOne({ _id: req.params.bountyId }, (err, bounty) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(bounty)
        })
    })

//Get by Type
bountyRouter.route("/search/allegiance")
    .get((req, res, next) => {
        Bounty.find({ allegiance: req.query.allegiance }, (err, bounties) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(bounties)
        })
    })

//Delete One
bountyRouter.route("/:bountyId")
    .delete((req, res, next) => {
        Bounty.findOneAndDelete({_id: req.params.bountyId}, (err, deletedItem) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successfully deleted item ${deletedItem.firstName} ${deletedItem.lastName} from the database.`)
        })
    })


//Update One
bountyRouter.route("/:bountyId")
    .put((req, res, next) => {
        Bounty.findOneAndUpdate(
            { _id: req.params.bountyId }, // find this one to update
            req.body, //update the object with this data
            { new: true }, // send back the updated version
            (err, updatedBounty) => {
                if(err){
                    res.status(500)
                    return next(err)
                }
                return res.status(201).send(updatedBounty)
            }
        )
    })


module.exports = bountyRouter