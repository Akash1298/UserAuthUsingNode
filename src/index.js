





const express = require('express');
const userRouter = require('./routes/index');

const app = express();
const port = 9000;
require('../config/mongoose');

app.use(express.urlencoded());
app.use(express.json());

// use express router
app.use('/api/v1/user', userRouter);

app.listen(port, (err) => {
	if (err) {
		// eslint-disable-next-line no-console
		console.log(`error to fire up the server: ${err}`);
		return;
	}
	// eslint-disable-next-line no-console
	console.log(`server is running on port : ${port}`);
});

module.exports = app;
