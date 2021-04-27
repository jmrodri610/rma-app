const { Schema } = require('mongoose')

module.exports = new Schema ({
    date: {
        type: Date,
        required: true
    },
    companyName: {
        type: String,
        required: true
    },
    siteName: {
        type: String,
        required: true,
    },
    rmaId: {
        type: String,
        required: true,
    },
    cif: {
        type: String,
        required: true,
    },
    product: {
        type: String,
        required: true,
    },
    issue: {
        type: String,
        required: true
    },
    technitian: {
        type: String,
        required: true
    },
    hasContract: {
        type: Boolean,
        required: true,
    },
    contractType: {
        type: String,
        enum: ['Basico', 'Basico Plus', 'Hotline']
    },
    order: {
        type: String
    },
    orderDate: {
        type: Date
    },
    issueResolution: {
        type: String
    },
    status: {
        type: String,
        enum: ['Pending', 'Solved'],
        default: 'Pending'
    }


})



