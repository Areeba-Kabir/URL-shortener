const user = require('../Model/user.js');

const handleUserSignup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!req.body) {
                return res.render('signup',{ error: 'please fill the form first' });
        }
        await user.create({
            name, email, password,
        });
        return res.redirect('/urlpage');
    //return res.render('home');
    } catch (error) {
        return res.render('signup',{ error: 'Internal Server Error!' });
    }
};

const handleUserLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const User = await user.findOne({ email, password });
        if (!User) {
            return res.render('login',{ error: 'user not found!' });
        }
        return res.redirect('/urlpage');
        //return res.render('home');
    } catch (error) {
        return res.render('login',{ error: 'Internal Server Error!' });
    }
};

module.exports = { handleUserSignup, handleUserLogin };