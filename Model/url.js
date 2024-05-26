const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    shortId: {
        type: String,
        unique: true,
        required: true,
    },
    redirectURL: {
        type: String,
        required: true,
    },
    viewHistory: [{ timestamp: Number, }],
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"users",
    },
},
    {
        timestamps: true,
    });

const url = mongoose.model('url', urlSchema);

module.exports = url;