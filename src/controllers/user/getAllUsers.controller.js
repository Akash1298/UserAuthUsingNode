const User = require('../../../models/user');

const GetAllUser = (req, res) => {
	const data = User.find({});
	return res.status(200).json({
		message: 'All users.',
		data
	});

};

module.exports = GetAllUser;
