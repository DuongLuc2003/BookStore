const mongoose = require("mongoose")

var cartSchema = new mongoose.Schema(
    {
        userId: {
            type:mongoose.Schema.Types.ObjectId,
            ref:'users'
        },
        productId: {
            type:mongoose.Schema.Types.ObjectId,
            ref:'products'
        },
        quantity: {
            type:Number,
            required:true
        },
        price: {
            type: Number,
            required:true
        },
        author: {
            type: String,
            required:true
        }
    },
    {
        timestamps:true,
    }
)

module.exports = mongoose.model("carts",cartSchema)