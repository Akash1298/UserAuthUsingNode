const User = require('../../../models/user');

const GetAllUser = async (req, res) => {
	const data = await User.find({});
	if (data) {
		return res.status(200).json({
			message: 'All users.',
			data
		});
	} else {
		return res.status(400).json({
			message: 'Unable to fetch.',
			status: false
		});
	}

};

module.exports = GetAllUser;
