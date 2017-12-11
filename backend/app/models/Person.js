const mongoose = require('mongoose');

const schema = mongoose.Schema(
{
    name: {
        type: String,
        required: true
    },
    mail: {
        type: String,
        required: true
    },
    friend: {
        type: String
    }
});
module.exports = mongoose.model('Person', schema);
