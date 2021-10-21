const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb://localhost/UsersData';
var bodyParser = require('body-parser');
const userRouter = require('./routes/index');

const app = express();

mongoose.connect(url, { useNewUrlParser: true });

const con = mongoose.connection
app.use(bodyParser.json());

con.on('open', () => {
	console.log('Connected...');
})

app.use('/api/v1/user', userRouter);

app.listen(9000, () => {
	console.log("server Started");
})
module.exports = app;
