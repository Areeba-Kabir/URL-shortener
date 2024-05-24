const express = require('express');

const router = express.Router();

const handleUserSignup = require('../Controller/usercontroller.js');

router.
    route('/').post(handleUserSignup);

module.exports = router;