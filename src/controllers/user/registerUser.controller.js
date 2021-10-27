const User = require('../../../models/user');
const bcrypt = require("bcrypt");
//const jwt = require('jsonwebtoken');

const SignUp = async (req, res) => {
	try {
		const { userName, email, password } = req.body;
		if (!(userName && email && password)) {
			res.status(400).json({ message: "All input is required", status: false });
		}

		const oldUser = await User.findOne({ email });
		if (oldUser) {
			return res.status(400).json({ message: "User Already Exist. Please Login", status: false });
		}

		let encryptedPassword = await bcrypt.hash(password, 10);
		const newUser = await User.create({
			userName: userName,
			email: email,
			password: encryptedPassword,
		});

		//const token = jwt.sign({ newUser }, 'shhhhh');

		return res.status(200).json({
			status: true,
			email: newUser.email,
			message: "User Successfully added"
		});
	} catch (err) {
		return res.status(400).send({ message: `Something went wrong.,${err}`, status: false });
	}
}
module.exports = SignUp;


