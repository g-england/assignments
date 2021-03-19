const express = require("express")
const app = express()




//Middleware (for every request)
app.use(express.json()) //looks for a request body, and turns it into "req.body"

app.use("/users", require("./routes/userRouter.js"))
app.use("/places", require("./routes/placeRouter.js"))


app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})