const { Schema } = require('mongoose')
const { validators: {isEmail} } = require('utils')
module.exports = new Schema ({

    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        validate: isEmail
    }

})



