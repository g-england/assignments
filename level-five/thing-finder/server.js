const express = require('express')
const app = express()

app.use(express.json())


app.use("/inventory", require("./routes/inventoryRouter.js"))






app.listen(9000, () => {
    console.log("Server running on port 9000")
})