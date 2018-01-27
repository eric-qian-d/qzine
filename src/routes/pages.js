// dependencies
const express = require('express');
const router = express.Router();

// public endpoints
router.get('/', function(req, res, next) {
  res.sendFile('home.html', { root: 'src/pages' });
});

router.get('/explore.html', function(req, res) {
  res.sendFile('explore.html', { root: 'src/pages' });
});

router.get('/about.html', function(req, res) {
  res.sendFile('about.html', { root: 'src/pages' });
});


module.exports = router;