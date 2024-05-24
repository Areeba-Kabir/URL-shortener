const express = require('express');

const router = express.Router();

const { handleUserSignup, handleUserLogin } = require('../Controller/usercontroller.js');

router.
    route('/').post(handleUserSignup);

router.
    route('/login').post(handleUserLogin)

module.exports = router;