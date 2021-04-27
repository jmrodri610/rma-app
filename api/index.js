require('dotenv').config()
const express = require('express');
const {name, version } = require('./package.json');
const cors = require('cors');
const bodyParser = require('body-parser');
const { database } = require('../data');
const { createRMA, retrieveRMA } = require('./logic')

const {argv: [, , port], env: {PORT = port || 8080, DB_URL}} = process;


const api = express();
api.use(bodyParser.json());
api.use(cors())

api.post('/create-rma', async (req,res) => {
    try {
        await createRMA(req.body)
        res.status(201).end()
    } catch (error) {
        res.status(409).json(error.message)
    }

})

api.get('/rma', async (req, res) => {
    try {
        const rmaList = await retrieveRMA();
        res.status(200).json(rmaList)
    } catch (error) {
        res.status(400).json(error.message)
    }
})

database.connect(DB_URL)
api.listen(PORT, () => console.log(`${name} ${version} up and running on port ${PORT}`))