const express = require('express');
const downloadRouter = express.Router()

const path = require('path')

downloadRouter.get('/' , (req, res) => {
    res.status(200).download(path.join(process.cwd(), 'server.js'));
})

module.exports = downloadRouter