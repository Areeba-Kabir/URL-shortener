const user = require('../Model/user.js');

const handleUserSignup = async (req, res) => {
    const { name, email, password } = req.body;
    await user.create({
        name, email, password,
    });
    return res.render('home');
}

module.exports = handleUserSignup;