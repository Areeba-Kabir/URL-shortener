const express = require('express');
const URL = require('../Model/url.js');

const router = express.Router();

router.get('/urlpage', async (req, res) => {
    const allurls =await URL.find({});

    return  res.render('home',{urls:allurls,});
})

router.get('/signup', async (req, res) => {
    return res.render('signup');
})

module.exports = router;