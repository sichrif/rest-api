const mongoose = require('mongoose');

const mastertrtSchema = new mongoose.Schema({

    premiere_année_universitaire: {
        session: {
            type: String,
            required: true,
            enum:[
                'principale',
                'controle'
            ]
        },
        moyen: {
            type: Number,
            required: true
        }
    },

    deuxieme_année_universitaire: {
        session: {
            type: String,
            required: true,
            enum:[
                'principale',
                'controle'
            ]
        },
        moyen: {
            type: Number,
            required: true
        }
    },

    troisieme_année_universitaire: {
        session: {
            type: String,
            required: true,
            enum:[
                'principale',
                'controle'
            ]
        },
        moyen: {
            type: Number,
            required: true
        }
    },

    bac: {
        session: {
            type: String,
            required: true,
            enum:[
                'principale',
                'controle'
            ]
        },
        moyen: {
            type: Number,
            required: true
        }
    },

    matieres: {
        moyen_reseaux_telecome_troisieme: {
            type: Number,
            required: true
        },
        moyen_securit_reseaux_troisieme: {
            type: Number,
            required: true
        },
        moyen_mathematique_premiere: {
            type: Number,
            required: true
        },
        moyen_physique_premiere: {
            type: Number,
            required: true
        },
        moyen_anglais_premiere: {
            type: Number,
            required: true
        }
    },
    PFE_mention: {
        type: String,
        required: true,
        enum:[
            'très bien et plus',
            'bien',
            'assez bien',
            'passable'
        ]
    },
    si_type_diplome_reseaux: {
        type: Boolean,
        required: true,
    },
    nombre_des_redoublement_années_universitaires: {
        type: Number,
        required: true,
    },
    Score: {
        type: Number,
        required: true,
    },
});


const TRT = mongoose.model('TRT',mastertrtSchema);
module.exports = TRT;
