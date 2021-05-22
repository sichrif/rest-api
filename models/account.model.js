const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
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

    email :{ 

        type:String,
        default :'',
    },

    password :{ 

        type:String,
        default :'',
    } ,


    specialité : {
        type : String,
        default : ''
    },

    classe :{
      type : String, 
      default : ''

    }
    

    
});


const Event = mongoose.model('account',accountSchema);
module.exports = Event;
