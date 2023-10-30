const mongoose = require("mongoose")

var cartSchema = new mongoose.Schema({
    products: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref:"products",
            },
            count:Number,
            color:String,
            price:Number
        },
    ],
    cartTotal: Number,
    totalAfterDiscount:Number,
    orderby: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    }
   },
  {
    timestamps:true,
  }
)

module.exports = mongoose.model("carts",cartSchema)