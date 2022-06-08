const { model } = require('mongoose')
const { user, rma } = require('./schemas')

module.exports = {
    User: model('User', user),
    RMA: model('RMA', rma)
}