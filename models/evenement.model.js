const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    title: {
        type : String,
        require : true
    },
    description: {
        type : String,
        default : ''
    },
    file: {
        type : String,
        required: true
    }
});


const Event = mongoose.model('event',eventSchema);
module.exports = Event;
