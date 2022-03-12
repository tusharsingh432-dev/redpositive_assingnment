const mongoose = require('mongoose');

const personSchema = mongoose.Schema({
    name: { type: 'string', require },
    phone: { type: 'number', require },
    email: { type: 'string', require },
    hobbies: { type: 'string', require },
    uid: { type: 'string', require }
}, {
    timestamps: true
})

module.exports = mongoose.model('person', personSchema); 