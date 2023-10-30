const mongoose = require('mongoose')

var couponSchema = new mongoose.Schema({
     name:{
      type:String,
      required:true,
      unique:true,
      uppercase:true
    },
    expiry: {
        type: String,
        required:true,
        unique:true
    },
    discount:{
        type: Number,
        required:true,
    }
},
);

module.exports = mongoose.model("coupons",couponSchema)