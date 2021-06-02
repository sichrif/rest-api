const mongoose = require('mongoose');

const calendrierSchema = new mongoose.Schema({
    title : {
        type : String,
        require : true
    },
    start : {
        type: Date,
        required : true
    },
    end : {
        type: Date,
        required: true,
       
    },
    location : {
        type : String,
        default : ''
    },
    notes : {
        type : String,
    }
 
});


const Event = mongoose.model('Event',calendrierSchema);
module.exports = Event;
