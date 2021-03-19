const express = require('express')


const addProperty = (req, res) => {
    const oldObject = req.body
    const withNewProperty = {
        age: 30
    }
    const finalObject = Object.assign(oldObject, withNewProperty)
    res.send(finalObject)
}


module.exports = addProperty