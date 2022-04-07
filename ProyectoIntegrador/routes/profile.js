const express = require('express');
const router = express.Router();

/* GET profile listing. */
router.get('/profile', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
