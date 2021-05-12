const mongoose = require('mongoose');

const mastercsiSchema = new mongoose.Schema({
    moyenne1anneelicense  : {
        type : String,
        require : true
    },
    mention1anneelicense : {
        type : String,
        
    },
    redoublant1anneelicense : {
        type : String,
        
    },



    moyenne2anneelicense  : {
        type : String,
        require : true
    },
    mention2anneelicense : {
        type : String,
        
    },

    redoublant2anneelicense : {
        type : String,
        
    },





    moyenne3anneelicense  : {
        type : String,
        require : true
    },
    mention3anneelicense : {
        type : String,
        
    },

    redoublant3anneelicense : {
        type : String,
        
    },




    moyennebaccalaureat  : {
        type : String,
        require : true
    },
    mentionbaccalaureat : {
        type : String,
        
    },
    moyennematieremathematiques  : {
        type : String,
        require : true
    },
    moyennematierephysiques  : {
        type : String,
        
    },
    moyennematiereanglais  : {
        type : String,
        
    },
    
    mentionpfe : {
        type : String,
        
    },

    diplome  : {
        type : String,
        
    },




    

    
});


const CSI = mongoose.model('CSI',mastercsiSchema);
module.exports = CSI;
