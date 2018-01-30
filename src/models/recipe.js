// import node module
const mongoose = require('mongoose');

// define a schema
const RecipeModelSchema = new mongoose.Schema({
    query: String,
    user_id: String
});

// compile model from schema
module.exports = mongoose.model('RecipeModel', RecipeModelSchema);
