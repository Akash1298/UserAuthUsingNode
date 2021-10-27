const User = require('../../../models/user');
const bcrypt = require("bcrypt");


const SignIn = async (req, res) => {
	try {
		const { email, password } = req.body;

		if (!(email && password)) {
			res.status(400).json({ message: "All input is required", status: false });
		}

		const oldUser = await User.findOne({ email });
		if (!oldUser) {
			return res.status(400).json({ message: "Incorrect email or password", status: false });
		}
		const user = await User.findOne({ email }).select('+password');
		if (user) {
			bcrypt.compare(password, user.password, function (err, response) {
				if (response) {
					res.status(200).json({
						message: 'User found',
						status: true,
					})
				} else {
					res.status(400).json({
						message: 'Invalid password',
						status: false,
					})
				}
			});
		}

	} catch (err) {
		return res.status(400).json({ message: "Something went wrong.", status: false });
	}
}
module.exports = SignIn;