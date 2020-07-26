const mongoose = require('mongoose');

const UnfilteredAppSchema = mongoose.Schema({
    fullName: String,
    phone: String,
    email: String,
    school: String,
    studies: String,
    tools: String,
    company: String,
    awards: String,
    cover: String,
    linkedin: String,
    github: String,
    portfolio: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('UnfilteredApp', UnfilteredAppSchema);