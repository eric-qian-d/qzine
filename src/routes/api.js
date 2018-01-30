// dependencies
const express = require('express');
const connect = require('connect-ensure-login');

// models
const User = require('../models/user');
const RecipeSearch = require('../models/search');


const router = express.Router();

// api endpoints
router.get('/whoami', function(req, res) {
  if (req.isAuthenticated()){
    res.send(req.user);
  }
  else{
    res.send({});
  }
});

router.get('/searchrecipe', function(req, res) {




});




router.get('/addrecipe', function(req, res) {


});



router.post('/addrecipe', connect.ensureLoggedIn(), function(req, res) {
    User.findOne({ _id: req.user._id },function(err,user) {
      console.log('works');
      const newRecipeSearch = new RecipeSearch({
        'query': req.body.content,
        'user_id': user._id,
      });
      res.send({});
    });
  }
);




module.exports = router;
