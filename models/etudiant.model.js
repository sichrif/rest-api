const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    nom : {
        type : String,
        require : true
    },
    
    prenom : {
        type : String,
        default : ''
    },

    cin :{ 
     type : String , 
     default : '',

    },
    
    matiere : {
        type : String,
        default : ''
    },

  

    specialité : {
        type : String,
        default : ''
    },

    absence:{
      type : String, 
      default : ''

    }
    

    
});


const Event = mongoose.model('student',studentSchema);
module.exports = Event;
