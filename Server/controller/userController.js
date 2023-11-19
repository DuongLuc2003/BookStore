const { generateToken } = require('../config/jwtToken');
const User = require('../models/userModel')
const Product = require('../models/productModel')
const Cart = require('../models/cartModel')
const Coupon = require('../models/couponModel')
const Order = require('../models/orderModel')
const uniqid = require('uniqid')
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require('../utils/validateMongodbId');
const { generateRefreshToken } = require('../config/refreshToken');
const jwt = require('jsonwebtoken');
const sendEmail = require('../controller/emailController');
const crypto = require('crypto')
const createUser = asyncHandler(async (req,res) => {
    const email = req.body.email;
    const findAdmin = await User.findOne({email:email});
    if(!findAdmin) {
        // create a new User 
        const newUser = await User.create(req.body)
        res.json(newUser)
    } else {
        throw new Error ('User Already Exists')
    }
});

const loginUserController = asyncHandler(async(req,res) => {
  const { email, password} = req.body;
// check if user exists or not 
  const findAdmin = await User.findOne({email});
  if(findAdmin && await findAdmin.isPasswordMatched(password)) {
    const refreshToken = await generateRefreshToken(findAdmin?._id)
    const updatedUser = await User.findByIdAndUpdate(findAdmin.id, {
        refreshToken:refreshToken,
    }, {
        new:true
    });
     res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        maxAge: 72 * 60 * 60 * 1000,
     })
     res.json({
        _id:findAdmin?._id,
        firstname: findAdmin?.firstname,
        lastname: findAdmin?.lastname,
        email: findAdmin?.email,
        mobile: findAdmin?.mobile,
        password: findAdmin?.password,
        token:generateToken(findAdmin?._id)
     })
  } else {
    throw new Error("Invalid Credentials")
  }
});

// Admin login
const loginAdminController = asyncHandler(async(req,res) => {
    const { email, password} = req.body;
  // check if user exists or not 
    const findAdmin = await User.findOne({email});
    if(findAdmin.role !== 'admin') throw new Error("Not Authorised");
    if(findAdmin && await findAdmin.isPasswordMatched(password)) {
      const refreshToken = await generateRefreshToken(findAdmin?._id)
      const updatedUser = await User.findByIdAndUpdate(findAdmin.id, {
          refreshToken:refreshToken,
      }, {
          new:true
      });
       res.cookie('refreshToken', refreshToken, {
          httpOnly: true,
          maxAge: 72 * 60 * 60 * 1000,
       })
       res.json({
          _id:findAdmin?._id,
          firstname: findAdmin?.firstname,
          lastname: findAdmin?.lastname,
          email: findAdmin?.email,
          mobile: findAdmin?.mobile,
          password: findAdmin?.password,
          token:generateToken(findAdmin?._id)
       })
    } else {
      throw new Error("Invalid Credentials")
    }
  });

// Handle refresh token 
const handleRefreshToken = asyncHandler(async (req,res) => {
   const cookie = req.cookies
   console.log(cookie);
   if(!cookie?.refreshToken) throw new Error('No refresh Token in Cookies');
   const refreshToken = cookie.refreshToken
   console.log(refreshToken);
   const user = await User.findOne({ refreshToken });
   if(!user) throw new Error('No refresh token present in db or not matched')
   jwt.verify(refreshToken,process.env.JWT_SECRET,(err, decoded) => {
        if( err || user.id !== decoded.id){
            throw new Error('There is something wrong with refresh token')
        } 
        const accessToken = generateToken(user?._id)
        res.json({accessToken})
})
})
// Logout functionality
const logout = asyncHandler(async (req,res) => {
    const cookie = req.cookies
    if(!cookie?.refreshToken) throw new Error("No Refresh Token in Cookies");
    const refreshToken = cookie.refreshToken
    const user = await User.findOne({ refreshToken });
    if(!user) {
        res.clearCookie("refreshToken", {
           httpOnly: true,
           secure: true
        });
        return res.sendStatus(204) // forbidden
    }
    await User.findOneAndUpdate(refreshToken, {
        refreshToken: "",
    });
    res.clearCookie("refreshToken", {
        httpOnly: true,
        secure: true,
    });
    res.sendStatus(204); // forbidden
})
// save user Address
   
 

// GetAll users
const getallUser = asyncHandler(async (req,res) => {
 try {
    const getUsers = await User.find();
    res.json(getUsers)
 } catch (error) {
    throw new Error(error)
 }
})
// Get User
const getUser = asyncHandler(async (req,res) => {
 const { id } = req.params;
 validateMongoDbId(id)
 try {
    const getUser = await User.findById(id);
    res.json({
        getUser
    })
 } catch (error) {
    throw new Error(error)
 }

})
// delete User
const deleteUser = asyncHandler(async (req,res) => {
    const { id } = req.params;
    validateMongoDbId(id)
    try {
       const deleteUser = await User.findByIdAndDelete(id);
       res.json({
           deleteUser
       })
    } catch (error) {
       throw new Error(error)
    }
   })
// Update User 
const updateUser = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    validateMongoDbId(_id);
  
    try {
      const updatedUser = await User.findByIdAndUpdate(
        _id,
        {
          firstname: req?.body?.firstname,
          lastname: req?.body?.lastname,
          email: req?.body?.email,
          mobile: req?.body?.mobile,
        },
        {
          new: true,
        }
      );
      res.json(updatedUser);
    } catch (error) {
      throw new Error(error);
    }
  });
const saveAddress = asyncHandler(async(req,res,next) => {
    const { _id } = req.user;
    validateMongoDbId(_id);
    const newAddress = req?.body?.address;
    if (!newAddress) {
    return res.status(400).json({ message: "Address is required." });
     }
    try {
        const updatedUser = await User.findByIdAndUpdate(_id, {
            address: newAddress,
        }, {
            new: true
        });
        console.log(updatedUser);
        res.json(updatedUser)
    } catch (error) {
        throw new Error(error)
    }
 })

const blockUser = asyncHandler(async (req,res) => {
    const {id} = req.params;
    validateMongoDbId(id)
    try {
        const block = User.findByIdAndUpdate(
            id,
            {
                isBlocked:true,
            },
            {
                new:true
            }
        );
    res.json({
        message: "User Blocked",
    })
    } catch (error) {
        throw new Error(error)
    } 
})
const unblockUser = asyncHandler(async (req,res) => {
    const {id} = req.params;
    validateMongoDbId(id)
    try {
        const unblock = User.findByIdAndUpdate(
            id,
            {
                isBlocked: false,
            },
            {
                new:true
            }
        );
        res.json({
            message: "User UnBlocked",
        })
    } catch (error) {
        throw new Error(error)
    } 
})
const updatePassword = asyncHandler(async(req,res)=> {
    const { _id } = req.user;
    const{ password }= req.body;
    validateMongoDbId(_id);
    const user = await User.findById(_id);
    if(password){
        user.password = password
        const updatePassword = await user.save()
        res.json(updatePassword)
    } else {
        res.json(user)
    }
})

const forgotPasswordToken = asyncHandler(async (req, res) => {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) throw new Error("User not found with this email");
    try {
      const token = await user.createPasswordResetToken();
      await user.save();
      const resetURL = `Hi, Please follow this link to reset Your Password. This link is valid till 10 minutes from now. <a href=' http://localhost:3000/reset-password/${token}'>Click Here</>`;
      const data = {
        to: email,
        text: "Hey User",
        subject: "Forgot Password Link",
        htm: resetURL,
      };
      sendEmail(data);
      res.json(token);
    } catch (error) {
      throw new Error(error);
    }
  });

const resetPassword = asyncHandler(async (req,res) => {
    const {password} = req.body;
    const {token} = req.params;
    const hashedToken = crypto.createHash('sha256').update(token).digest("hex")
    const user = await User.findOne({
        passwordResetToken: hashedToken,
        passwordResetExpires: {$gt: Date.now()}
    });
    if(!user) throw new Error("Token Expired, Please try again later");
    user.password = password;
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save();
    res.json(user)
})

const getWishlist = asyncHandler(async(req,res)=> {
    const { _id } = req.user
    try {
        const findUser = await User.findById(_id)
        .populate("wishlist");
        res.json(findUser)
    } catch (error) {
        throw new Error(error)
    }
})

const userCart = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    const { productId, quantity, author, price } = req.body;
    validateMongoDbId(_id);
    try {
      let newCart = await new Cart({
        userId: _id,
        productId,
        quantity,
        author,
        price,
      }).save();
      res.json(newCart);
    } catch (error) {
      throw new Error(error);
    }
  });
  
  const getUserCart = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    validateMongoDbId(_id);
    try {
      const cart = await Cart.find({ userId: _id })
        .populate({
          path: 'productId',
          populate: [
            { path: 'brand' },
            { path: 'category' },
            { path: 'author' }
          ]
        });
      res.json(cart);
    } catch (error) {
      throw new Error(error);
    }
});

  const removeProductfromCart = asyncHandler(async (req,res) => {
    const { _id } = req.user;
    const {cartItemId} = req.params
    validateMongoDbId(_id);
    try {
      const deleteProductFromCart = await Cart.deleteOne({userId:_id,_id:cartItemId})
      res.json(deleteProductFromCart);
    } catch (error) {
      throw new Error(error);
    }
  })
  const updateProductCart = asyncHandler(async(req,res) => {
    const { _id } = req.user;
    const {cartItemId} = req.params
    validateMongoDbId(_id);
    try {
      const updateProductFromCart = await Cart.findOne({userId:_id,_id:cartItemId})

      res.json(updateProductFromCart);
    } catch (error) {
      throw new Error(error);
    }
  })
const emptyCart = asyncHandler(async(req,res)=> {
    const { _id } = req.user
    validateMongoDbId( _id );
    try {
        const user = await User.findOne({ _id });
        const cart = await Cart.findOneAndRemove({orderby:user._id});
        res.json(cart)
    } catch (error) {
        throw new Error(error)
    }
})

const applyCoupon = asyncHandler(async (req, res) => {
    const { coupon } = req.body;
    const { _id } = req.user;
    validateMongoDbId(_id);
    const validCoupon = await Coupon.findOne({ name: coupon });
    if (validCoupon === null) {
      throw new Error("Invalid Coupon");
    }
    const user = await User.findOne({ _id });
    let { cartTotal } = await Cart.findOne({
      orderby: user._id,
    }).populate("products.product");
    let totalAfterDiscount = (
      cartTotal -
      (cartTotal * validCoupon.discount) / 100
    ).toFixed(2);
    await Cart.findOneAndUpdate(
      { orderby: user._id },
      { totalAfterDiscount },
      { new: true }
    );
    res.json(totalAfterDiscount);
  });

// const createOrder = asyncHandler(async(req,res)=> {
//     const {COD,couponApplied} = req.body;
//     const { _id } = req.user;
//     validateMongoDbId(_id)
//     try {
//         if(!COD) throw new Error('Create cash order failed');
//         const user = await User.findById(_id);
       
//         let userCart = await Cart.findOne({ orderby: user._id }).populate('orderby', 'email mobile');
//         let finalAmout = 0;
//         if(couponApplied && userCart.totalAfterDiscount){
//             finalAmout = userCart.totalAfterDiscount ;
//         } else {
//             finalAmout = userCart.cartTotal;
//         }
//         let newOrder = await new Order({
//             products: userCart.products,
//             paymentIntent: {
//                id: uniqid(),
//                method:"COD",
//                amount: finalAmout,
//                status: "Cash on Delivery",
//                created: Date.now(),
//                currency:"usd",
//             },
//             orderby: user._id,
//             orderStatus: "Cash on Delivery",
//             email: userCart.orderby.email, // Lấy email từ đối tượng userCart
//             mobile: userCart.orderby.mobile, // Lấy mobile từ đối tượng userCart
//         }).save()
//        let update = userCart.products.map((item) => {
//         return {
//             updateOne: {
//                 filter: {_id: item.product._id},
//                 update: { $inc:{ quantity: -item.count, sold: +item.count } },
//             },
//         }
//        })
//        const updated = await Product.bulkWrite(update, {});
//        res.json({message:"success"})
//     } catch (error) {
//         throw new Error(error)
//     }
// })

const getOrders = asyncHandler(async(req,res)=> {
    const { _id } = req.user;
    validateMongoDbId(_id)
    try {
        const userorders = await Order.findOne({ orderby: _id })
        .populate('products.product')
        .exec();
        res.json(userorders)
    } catch (error) {
        throw new Error(error)
    }
})

const getAllOrders = asyncHandler(async (req, res) => {
  try {
    const alluserorders = await Order.find()
      .populate("orderItems.product") 
      .populate("user") 
      .exec();

    res.json(alluserorders);
  } catch (error) {
    res.status(500).json({ error: 'Lỗi Nội Server' });
  }
});

const getOrderByUserId = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);

  try {
    
    const userorders = await Order.find({ user: id })
      .populate("orderItems.product") 
      .populate("user")
      .exec();
    res.json(userorders);
  } catch (error) {
    
    res.status(500).json({ error: 'Lỗi Nội Server' });
  }
});

const updateOrderStatus = asyncHandler(async(req,res)=> {
    const {status} = req.body;
    const {id} = req.params;
    validateMongoDbId(id)
    try {
        const updateOrder = await Order.findByIdAndUpdate(
            id,
            {
                orderStatus:status,
                paymentIntent:{
                    status:status
                }
            },
            {new:true}
            );
            res.json(updateOrder)
    } catch (error) {
        throw new Error(error)
    }
})

const createOrder = asyncHandler(async(req,res) => {
  const {shippingInfo,orderItems,totalPrice,totalPriceAfterDiscount,paymentInfo} =req.body;
  const {_id} = req.user;
  try {
    const order = await Order.create({
      shippingInfo,orderItems,totalPrice,totalPriceAfterDiscount,paymentInfo,user:_id
    })
    res.json({
      order,
      success:true
    })
  } catch (error) {
    throw new Error(error)
  }
})

const getMyOrders = asyncHandler(async (req,res) => {
  const {_id} = req.user;
  try {
    const orders = await Order.find({ user:_id }).populate('user').populate('orderItems.product')
    res.json({
      orders
    })
  } catch (error) {
    throw new Error(error)
  }
})




module.exports = { createUser,
                   loginUserController,
                   loginAdminController, 
                   getallUser, 
                   getUser, 
                   deleteUser, 
                   updateUser, 
                   blockUser, 
                   unblockUser,
                   handleRefreshToken,
                   logout,
                   updatePassword,
                   forgotPasswordToken,
                   resetPassword,
                   getWishlist,
                   saveAddress,
                   userCart,
                   getUserCart,
                   emptyCart,
                   applyCoupon,
                   createOrder,
                   getOrders,
                   updateOrderStatus,
                   getAllOrders,
                   getOrderByUserId,
                   removeProductfromCart,
                   updateProductCart,
                   getMyOrders
                   }