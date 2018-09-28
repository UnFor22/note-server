var express = require('express');
var router = express.Router();
const user = require('../controller/user')

/* GET home page. */
router.use(user)

module.exports = router;
