const express = require('express');
const router = express.Router();
const SignUp = require('../controllers/user/registerUser.controller');
const SignIn = require('../controllers/user/loginUser.controller');
const GetUser = require('../controllers/user/getUser.controller');
const DeleteUser = require('../controllers/user/deleteUser.controller');
const GetAllUsers = require('../controllers/user/getAllUsers.controller');
const ChangePassword = require('../controllers/user/changePassword.controller');
const ChaneUserName = require('../controllers/user/changeUserName.controller');

router.get('/run', (req, res) => {
  res.send("From API router")
});

router.post('/sign-up', SignUp);
router.post('/sign-in', SignIn);
router.get('/getUserByEmail', GetUser)
router.delete('/deleteUser', DeleteUser);
router.get('/all', GetAllUsers);
router.post('/change-password', ChangePassword);
router.put('/:id', ChaneUserName)



module.exports = router;