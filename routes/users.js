const express = require('express');
const userRouter = express.Router()

const path = require('path')

userRouter.get('/', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'data', 'data.json'))
})


userRouter.route("/:id")
    .get((req, res) => {
        res.send(`Get User with ${req.params.id}`)
    })
    .put((req, res) => {
        res.send(`Update User with ${req.params.id}`)
    })
    .delete((req, res) => {
        res.send(`Delete User with ${req.params.id}`)
    })

userRouter.param("id", (req, res, next, id) => {
    console.log(id)
    next()
})

module.exports = userRouter;