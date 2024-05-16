const mongoose = require("mongoose");
const schema = mongoose.Schema;

const infoSchema = new schema ({
    name : {
        type : String,
        required : true
    },

    email : {
        type : String,
        required : true
    },

    password : {
        type : String,
        required : true
    },


    role : {
        type : String,
        required : true
    }
})

const info = mongoose.model('studentInfo', infoSchema);

module.exports = info;