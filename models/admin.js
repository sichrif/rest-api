const mongoose = require("mongoose");


const schema = mongoose.Schema({
    Name: {
        type: String,
        minlength: 10,
        maxlength: 200,
        required: true,
    },
    phone: {
        type: String,
        minlength: 8,
        maxlength: 20,
        required: true,
    },
    Email: {
        type: String,
        minlength: 10,
        maxlength: 100,
        required: true,
    },
    Address: {
        type: String,
        minlength: 10,
        maxlength: 255,
        required: true,
    },
    
    password: {
        type: String,
        minlength: 5,
        maxlength: 1024,
        required: true,
    }

});

const Admin = mongoose.model("Admin", schema);

module.exports.Admin = Admin;
