const mongoose = require('mongoose');
require('dotenv').config();
mongoose.set("strictQuery", true);

const connection = async () => {
    return await mongoose.connect(process.env.URL);
}

module.exports = connection;