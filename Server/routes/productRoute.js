const express = require('express')
const router = express.Router()
const { createProduct, 
        getProduct, 
        getAllProduct, 
        updateProduct,
        deleteProduct,
        addToWishlist,
        rating,
        uploadImages
        } = require('../controller/productController')
const { isAdmin , authMiddleware} = require('../middlewares/authMiddleware')
const { uploadPhoto, productImgResize } = require('../middlewares/uploadImages')
router.put(
        "/upload/:id",
        authMiddleware,
        isAdmin,
        uploadPhoto.array('images',10),
        uploadImages,
        productImgResize,
        )
router.post("/",createProduct)
router.get("/:id",getProduct)
router.put("/wishlist",authMiddleware,addToWishlist)
router.put("/rating",authMiddleware,rating)
router.put("/:id",updateProduct)
router.get("/",getAllProduct)
router.delete("/:id",deleteProduct)
module.exports = router