const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')


app.use(express.json())
app.use(morgan('dev')) //logs requests to the console


mongoose.connect('mongodb://localhost:27017/bountiesdb',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
    () => console.log("Connected to the DB")
)


app.use("/bounties", require("./routes/bountyRouter.js"))

// Error handler
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})
app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})