const express = require('express');

const router = express.Router();

const {handleURLShortner,gethandleURLShortner} = require('..//Controller/urlcontroller.js')

router.
    route('/').post(handleURLShortner);

router.
    route('/:shortId').get(gethandleURLShortner);

module.exports = router;