const express = require('express');
const router = express.Router();
const SignUp = require('./SignUp/index');
const SignIn = require('./SignIn/index');
const GetUser = require('./GetUser/index');
const DeleteUser = require('./DeleteUser/index');
const GetAllUsers = require('./GetAllUsers/index');
const ChangePassword = require('./ChangePassword/index');
const ChaneUserName = require('./ChangeUserName/index');

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