const mongoose = require('mongoose');

const specialiteSchema = new mongoose.Schema({
    title : {
        type : String,
        require : true,
        enum:[
            '1-EEA',
            '1-ISI',
            '1-SI',
            '1-TIC',
            '1-MP-CSI',
            '1-RT-SSR',
            '1-RT-TRT',
            '1-MsCPS',
            '2-SI',
            '2-ISI-IRS',
            '2-ISI-SEIO',
            '2-EEA-AII',
            '2-EEA-EA',
            '2-EEA-EI',
            '2-EEA-SE',
            '3-SI',
            '3-ISI-SEIO',
            '3-ISI-SEIO',
            '3-EEA-AII',
            '3-EEA-EA',
            '3-EEA-EI',
            '3-EEA-SE',
            '2-MP-CSI',
            '2-RT-TRT',
            '2-RT-SSR',
            '2-MsCPS',
        ]
    },
    description : {
        type : String,
        
    }
    

    
});


const special = mongoose.model('special',specialiteSchema);
module.exports = special;
