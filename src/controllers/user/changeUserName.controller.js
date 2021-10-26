const User = require('../../../models/user');

const ChaneUserName = async (req, res) => {
	const { id } = req.params;
	const { userName } = req.body;
	if (id && userName) {
		const result = await User.findOne({ _id: id })
		if (result) {
			await User.updateOne(
				{ _id: id },
				{ $set: { userName: userName } }
			);
			return res.status(200).send({
				message: 'Username changed successfully.',
				status: true,
			})
		} else if (!result) {
			return res.status(400).send({
				message: 'User Not Found',
				status: false,
			})
		}
	} else {
		return res.status(400).send({
			message: 'Provide username and id.',
			status: false,
		})
	}
}

module.exports = ChaneUserName;