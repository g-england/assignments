const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Movie Blueprint
const bountySchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    bountyAmount: Number,
    allegiance: String
})

module.exports = mongoose.model("Bounty", bountySchema )