
const { getUser } = require('../Services/auth.js');

async function restrictToLoggedinUserOnly(req, res, next) {
    //console.log(req);
    const userId = req.cookies?.uid;
    if (!userId) {
        return res.redirect('/login');
    }
 
    const user = getUser(userId);
    if (!user) {
        return res.redirect('/login');
    }
    req.user = user;
    next();
}

async function checkAuth(req, res, next) {
    const userUid = req.cookies?.uid;
    
    const user = getUser(userUid);
    req.user = user;
    next();
}

module.exports = {
    restrictToLoggedinUserOnly,
    checkAuth,
 };