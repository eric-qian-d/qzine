// dependencies
const express = require('express');
const connect = require('connect-ensure-login');

// models
const User = require('../models/user');
const Recipe = require('../models/recipe');


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

router.get('/searchhistory', function(req, res) {
  Recipe.find({ user_id: req.user._id },function(err,recipes) {
      res.send(recipes);
    });
  }
);



router.post('/addrecipe', connect.ensureLoggedIn(), function(req, res) {
    User.findOne({ _id: req.user._id },function(err,user) {
      const newRecipe = new Recipe({
        'query': req.body.content,
        'user_id': user._id,
      });
      newRecipe.save();
      res.send({});
    });
  }
);


// router.get("https://api.edamam.com/search", function(req, res) {

//     console.log('searchworks');
//     res.send(req.hits);
//   }


//   );

module.exports = router;

// router.get('/search', function(req, res) {
//   get("https://api.edamam.com/search", req, function(err, recipes) {
//     console.log('searchworks');
//     res.send(recipes);
//   }


//   )
// });