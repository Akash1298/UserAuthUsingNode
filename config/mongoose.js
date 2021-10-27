const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://users:users%4001@cluster0.yneev.mongodb.net/users?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
// eslint-disable-next-line no-console
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  // eslint-disable-next-line no-console
  console.log('database connection open');
});

module.exports = db;