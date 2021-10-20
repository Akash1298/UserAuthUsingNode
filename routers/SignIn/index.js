const User = require('../../models/user');
const bcrypt = require("bcrypt");

const SignIn = (req, res) => {
    const { email, password } = req.body;
    if (email && password) {
        User.findOne({ email: email }, function (err, result) {
            if (result) {
                bcrypt.compare(password, result.password, function (err, response) {
                    if (response) {
                        res.json({
                            message: 'User found',
                            status: 200,
                        })
                    } else {
                        res.json({
                            message: 'Invalid password',
                            status: 404,
                        })
                    }
                });
            } else if (!result) {
                res.json({
                    message: 'User not found, Register yourself first',
                    status: 404,
                })
            }
        })
    } else {
        res.json({
            message: 'Please enter email and password.',
            status: 404,
        })
    }
}
module.exports = SignIn;