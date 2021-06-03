const mongoose = require('mongoose');

const resultatSchema = new mongoose.Schema({


    specialité : {
        type : String,
        default : ''
    },

    file:{
        type : String,
        default : ''
    },

    classe:{
      type : String, 
      default : ''
    }
    

    
});


const Event = mongoose.model('resultat',resultatSchema);
module.exports = Event;
