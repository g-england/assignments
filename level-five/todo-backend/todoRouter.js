const express = require('express')
const todoRouter = express.Router()
const {v4: uuidv4} = require('uuid')


const todos = [
    {
        name: "The name",
        description: "The description of the todo",
        imageUrl: "",
        completed: false,
        _id: uuidv4()
    }
]


//Get all todos/Post one todo
todoRouter.route("/")
    .get((req, res) => {
        res.send(todos)
    })
    .post((req, res) => {
        const newTodo = req.body
        newTodo._id = uuidv4()
        todos.push(newTodo)
        res.send("Successfully added todo!")
    })

//Get single todo/update a single todo
todoRouter.route("/:todoId")
    .get((req, res) => {
        const todoId = req.params.todoId
        const todo = todos.find(todo => todo._id === todoId)
        res.send(todo)
    })
    .put((req, res) => {
        const todoId = req.params.todoId
        const updatedObject = req.body
        const todoIndex = todos.findIndex(todo => todo._id === todoId)
        const updatedTodo = Object.assign(todos[todoIndex], updatedObject)
        res.send(updatedTodo)
    })

//Delete a todo
todoRouter.route("/:todoId")
    .delete((req, res) => {
        const todoId = req.params.todoId
        const todoIndex = todos.findIndex(todo => todo._id === todoId)
        todos.splice(todoIndex, 1)
        res.send("Successfully deleted todo!")
    })




module.exports = todoRouter