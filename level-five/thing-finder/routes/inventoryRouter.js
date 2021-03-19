const express = require('express')
const inventoryRouter = express.Router()

const inventoryItems = [
    {
        name: "banana",
        type: "food",
        price: 200,
    },{
        name: "pants",
        type: "clothing",
        price: 2500,
    },{
        name: "basket ball",
        type: "toy",
        price: 1000,
    },{
        name: "rockem sockem robots",
        type: "toy",
        price: 1500,
    },{
        name: "shirt",
        type: "clothing",
        price: 800,
    },{
        name: "soup",
        type: "food",
        price: 300,
    },{
        name: "flour",
        type: "food",
        price: 100,
    }
]

inventoryRouter.route("/")
    .get((req, res) => {
        res.send(inventoryItems)
    })

inventoryRouter.route("/type")
    .get((req, res) => {
        const type = req.query.type
        const filteredInventory = inventoryItems.filter(item => item.type === type)
        res.send(filteredInventory)
    })

inventoryRouter.route("/price/max")
    .get((req, res) => {
        const maxPrice = req.query.max
        const filteredInventory = inventoryItems.filter(item => item.price <= maxPrice)
        res.send(filteredInventory)
    })

inventoryRouter.route("/price/min")
    .get((req, res) => {
        const minPrice = req.query.min
        const filteredInventory = inventoryItems.filter(item => item.price >= minPrice)
        res.send(filteredInventory)
    })

module.exports = inventoryRouter