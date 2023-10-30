const mongoose = require("mongoose")

var productSchema = new mongoose.Schema({
    title: {
        type:String,
        required: true,
        trim: true
    },
    slug: {
        type:String,
        required:true,
        unique:true,
        lowercase: true,
    },
    description: {
        type:String,
        required:true,
    },
    price: {
        type:Number,
        required:true,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "categries",
        required:true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "authors",
        required:true
    },
    brand: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "brands",
        required:true
    },
    quantity: {
        type:Number,
        required:true,
    },
    sold: {
        type:Number,
        default:0,
    },
    images: [
        {
          public_id: String,
          url: String,
        },
      ],
    tag: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: "tags",
        }
    ],
    ratings: [{
        star:Number,
        comment:String,
        postedby: {type: mongoose.Schema.Types.ObjectId, ref:"users"}
    },
],
    totalrating: {
        type:String,
        default:0,
    }
},
{timestamps:true}
)

module.exports = mongoose.model("products",productSchema)