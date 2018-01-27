const mongoose = require('mongoose');

// setup mongoDB connection
const mongoURL = "mongodb://ericqian:qwerty123@ds053305.mlab.com:53305/catbookdb";
const options = {
    useMongoClient: true
};
mongoose.connect(mongoURL, options);
mongoose.Promise = global.Promise;
const db = mongoose.connection;

// db error handling
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on('connected', function() { console.log('database connected'); });
module.exports = db;
