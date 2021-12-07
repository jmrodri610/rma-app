const { Schema } = require('mongoose')

module.exports = new Schema ({
    technitian: {
        type: String,
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



