const User = require('../../../models/user');

const ChaneUserName = (req, res) => {
	const { id } = req.params;
	const { userName } = req.body;
	if (id && userName) {
		User.findOne({ _id: id }, async (err, result) => {
			if (result) {
				const response = await User.updateOne(
					{ _id: id },
					{ $set: { userName: userName } }
				);
				console.log(response);

				res.json({
					message: 'Username changed successfully.',
					status: 200,
				})
			} else if (!result) {
				res.json({
					message: 'User Not Found',
					status: 404,
				})
			}
		})
	} else {
		res.json({
			message: 'Provide username and id.',
			status: 404,
		})
	}
}

module.exports = ChaneUserName;