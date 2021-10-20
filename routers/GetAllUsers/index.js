const User = require('../../models/user');

const GetAllUser = async (req, res) => {
    const data = await User.find({});
    return res.status(200).json({
        message: 'All users.',
        data
    });

};

module.exports = GetAllUser;
