const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
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
    description : {
        type : String,
        default : ''
    }
    

    
});


const Event = mongoose.model('Event',eventSchema);
module.exports = Event;
