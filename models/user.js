const mongoose = require('mongoose');

const Schema = new mongoose.Schema({

    userName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    resetPassword: {
        type: String,
        required: false
    },
    token: { type: String },
})

module.exports = mongoose.model("Users", Schema)