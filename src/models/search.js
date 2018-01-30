// import node module
const mongoose = require('mongoose');

// define a schema
const SearchModelSchema = new mongoose.Schema({
    q: String,
    app_id: String,
    app_key: String
});

// compile model from schema
module.exports = mongoose.model('SearchModel', SearchModelSchema);
