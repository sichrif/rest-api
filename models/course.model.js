const mongoose = require('mongoose');

const CourseSchema = mongoose.Schema({
    titre: {
            type: String,
            required: [true, 'The title is required']
           
    },
    description: {
            type: String,
           
           
    },
    classe:{
        type:String,
    }
    
    
},


{
    timestamps: true
});

module.exports = mongoose.model('Course', CourseSchema);

