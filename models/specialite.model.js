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


const special = mongoose.model('special',specialiteSchema);
module.exports = special;
