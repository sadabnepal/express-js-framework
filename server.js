const express = require('express');
const app = express();

app.get('/', (req, res)=> {
    res.status(200).send("Welcome to local API host!!")
})

const userRouter = require('./routes/users')
const downloadRouter = require('./routes/downloads')

app.use('/users', userRouter)
app.use('/downloads', downloadRouter)

app.listen(3030)