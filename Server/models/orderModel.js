const mongoose = require("mongoose");

var orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
      required: true,
    },
    shippingInfo: {
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
      other: {
        type: String,
        required: true,
      },
      pincode: {
        type: Number,
        required: true,
      }
    },
    paymentInfo: {
        razorpayOrderId:{
            type:String,
            required:true
        },
        razorpayPaymentId:{
            type:String,
            required:true
        }
    },
    orderItems: [
       {
        product:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'products',
            required:true
        },
        quantity:{  
            type:Number,
            required:true
        },
        price:{
            type:Number,
            required:true
        },
        author:{
            type:String
        },
       }
    ],
      paidAt: {
        type:Date,
        default:Date.now()
      },
      totalPrice: {
        type:Number,
        default:Date.now()
      },
      totalPriceAfterDiscount: {
        type:Number,
        required:true
      },
      orderStatus: {
        type:String,
        default:"Ordered"
      },
    },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("orders", orderSchema);
