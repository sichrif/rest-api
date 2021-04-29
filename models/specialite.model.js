const mongoose = require('mongoose');

const specialiteSchema = new mongoose.Schema({
    title : {
        type : String,
        require : true
    },
    description : {
        type : String,
        
    }
    

    
});


const Event = mongoose.model('Event',specialiteSchema);
module.exports = Event;
