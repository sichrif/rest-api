const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    title : {
        type : String,
        require : true
    },
    
    description : {
        type : String,
        default : ''
    },

    classe : {
        type : String,
        default : ''
    }
    

    
});


const Event = mongoose.model('course',courseSchema);
module.exports = Event;
