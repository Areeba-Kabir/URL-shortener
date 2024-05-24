const user = require('../Model/user.js');

const handleUserSignup = async (req, res) => {
    const { name, email, password } = req.body;
    await user.create({
        name, email, password,
    });
    return res.render('home');
};

const handleUserLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const User = await user.findOne({ email, password });
        if (!User) return res.status(400).json({ error: 'user not found!' });
        
        return res.render('home');
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error!' });
    }
};

module.exports = { handleUserSignup, handleUserLogin };