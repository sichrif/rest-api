const mongoose = require('mongoose');

const mastertrtSchema = new mongoose.Schema({
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
    
    moyennematierereseaux  : {
        type : String,
        
    },
    

    moyennematieresecurite  : {
        type : String,
        
    },





    mentionpfe : {
        type : String,
        
    },

    diplome  : {
        type : String,
        
    },




    

    
});

    mastertrtSchema.methods.generateAuthToken = function () {
    console.log(SECRET_key);
    return jwt.sign({ moyenne1anneelicense: this.moyenne1anneelicense, mention1anneelicense: this.mention1anneelicense, 
    redoublant1anneelicense: this.redoublant1anneelicense,
    moyenne2anneelicense:this.moyenne2anneelicense,
    mention2anneelicense:this.mention2anneelicense,
    redoublant2anneelicense:this.redoublant2anneelicense,
    moyenne3anneelicense:this.moyenne3anneelicense,
    mention3anneelicense:this.mention3anneelicense,
    redoublant3anneelicense:this.redoublant3anneelicense,
    
    

    moyennebaccalaureat:this.moyennebaccalaureat,
    mentionbaccalaureat:this.mentionbaccalaureat,


    moyennematieremathematiques:this.moyennematieremathematiques,
    moyennematierephysiques:this.moyennematierephysiques,
    moyennematiereanglais:this.moyennematiereanglais,
    moyennematierereseaux:this.moyennematierereseaux,
    moyennematieresecurite:this.moyennematieresecurite,
    mentionpfe:this.mentionpfe,
    diplome:this.diplome


    }, SECRET_key);
}





const TRT = mongoose.model('TRT',mastertrtSchema);
module.exports = TRT;
