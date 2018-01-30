// import node modules
const mongoose = require('mongoose');

// define a schema
const UserModelSchema = new mongoose.Schema ({
  name        	: String,
  fbid        	: String,
  last_search  	: String,
});

// compile model from schema
module.exports = mongoose.model('UserModel', UserModelSchema);
