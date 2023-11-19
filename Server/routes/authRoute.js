const express = require('express')
const router = express.Router()
const { createUser, 
        loginUserController,
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
        loginAdminController,
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
        getMyOrders} = require('../controller/userController')
const { authMiddleware , isAdmin} = require("../middlewares/authMiddleware")
router.post('/register',createUser);
router.post('/forgot-password',forgotPasswordToken);
router.put('/reset-password/:token',resetPassword)
router.put('/password',authMiddleware,updatePassword)
router.post('/login', loginUserController)
router.post('/admin-login', loginAdminController)
router.post('/cart', authMiddleware,userCart)
router.post('/cart/applycoupon',authMiddleware,applyCoupon)
router.post('/cart/create-order',authMiddleware,createOrder)
router.get('/all-users', getallUser)
router.get('/getmyorders', authMiddleware,getMyOrders)
router.get('/get-orders', authMiddleware,getOrders)
router.get('/getorderbyuser/:id',authMiddleware,getOrderByUserId)
router.get('/getallorders',authMiddleware,getAllOrders)
router.get('/refresh',handleRefreshToken)
router.get('/logout',logout)
router.get('/wishlist', authMiddleware,getWishlist)
router.get('/cart', authMiddleware,getUserCart)
router.put('/edit-user',authMiddleware,isAdmin,updateUser)
router.put('/update-order/:id',authMiddleware,isAdmin,updateOrderStatus)
router.get('/save-address', authMiddleware,saveAddress)
router.get('/:id', authMiddleware,isAdmin ,getUser)
router.delete('/empty-cart', authMiddleware,emptyCart)
router.delete('/delete-product-cart/:cartItemId', authMiddleware,removeProductfromCart)
router.put('/update-product-cart/:cartItemId/:newQuantity', authMiddleware,updateProductCart)
router.delete('/:id',deleteUser)
router.put('/block-user/:id',authMiddleware,isAdmin,blockUser)
router.put('/unblock-user/:id',authMiddleware,isAdmin,unblockUser)

module.exports = router;



