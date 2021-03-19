const express = require('express')
const app = express()
const addProperty = require("./myFunction.js")

app.use(express.json())


app.get("/", (req, res, next) => {
    const myObject = {
        name: "Bob"
    }
    req.body = myObject
    next()
})

app.use(addProperty)


app.listen(9000, () => {
    console.log("The server is running on port 9000")
})