const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
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
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
