const User = require('../../../models/user');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

const SignUp = async (req, res) => {
	try {
		const { userName, email, password } = req.body;
		if (!(userName && email && password)) {
			res.status(400).send("All input is required");
		}

		const oldUser = await User.findOne({ email });
		if (oldUser) {
			return res.status(400).send("User Already Exist. Please Login");
		}

		let encryptedPassword = await bcrypt.hash(password, 10);
		const newUser = await User.create({
			userName: userName,
			email: email,
			password: encryptedPassword,
		});

		const token = jwt.sign({ newUser }, 'shhhhh');

		return res.status(200).json({
			status: 'success',
			token
		});
	} catch (err) {
		return res.status(400).send("Something went wrong.");
	}
}
module.exports = SignUp;


