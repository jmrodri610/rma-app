require('dotenv').config()
const express = require('express');
const {name, version } = require('./package.json');
const cors = require('cors');
const bodyParser = require('body-parser');
const { database } = require('../data');
const { createRMA, retrieveRMA } = require('./logic')

const {argv: [, , port], env: {PORT = port || 8080, DB_URL}} = process;

const { user, rma } = require('./routes');
const api = express();
api.use(bodyParser.json());
api.use(cors())
api.use('/rma', rma)
api.use('/user', user)

database.connect(DB_URL)
api.listen(PORT, () => console.log(`${name} ${version} up and running on port ${PORT}`))