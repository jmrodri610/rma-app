const { Schema } = require('mongoose')

module.exports = new Schema ({
    technitian: {
        type: String,
        required: true
    },
    issueDate: {
        type: Date,
        required: true
    },
    hotel: {
        type: String,
        required: true
    },
    customer: {
        type: String,
        required: true,
    },
    adress: {
        type: String,
        required: true,
    },
    postalCode: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    rmaId: {
        type: String,
        required: true,
    },
    isUnderWarranty: {
        type: Boolean,
        required: true,
    },
    purchaseDate: {
        type: Date,
        required: true,
    },
    email: {
        type: String
    },
    phoneNumber: {
        type: String
    },
    invoiceNumber: {
        type: String
    },
    status: {
        type: String,
        enum: ['Pending', 'Solved'],
        default: 'Pending'
    },
    created: {
        type: Date,
        required: true
    }
})



