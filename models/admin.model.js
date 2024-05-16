const mongoose = require("mongoose");
const schema = mongoose.Schema;

const adminDetails = new schema ({
   name : {
      type : String,
      required : true
  },

  studentId : {
   type : String,
   required : true
},

   email : {
      type : String,
      required : true
   },

   dob : {
      type : String,
      required : true
   },


 
    maths : {
        type : Number,
        required : true
    },
     physics : {
        type : Number,
        required : true
     },
     chemistry : {
        type: Number,
        required :true
     },
     total : {
        type : Number,
     },

     cutoff : {
      type : Number,
   },

   grade : {
      type : String,
   },
   
   
})

const adminInfo = mongoose.model('admin', adminDetails)

module.exports = adminInfo;