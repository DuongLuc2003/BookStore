const express = require('express')
const router = express.Router()
const { createBlog, 
        updateBlog,
        getBlog,
        getAllBlog,
        deleteBlog,
        liketheBlog,
        disliketheBlog,
        uploadImages} = require('../controller/blogController')
const { authMiddleware,isAdmin } = require('../middlewares/authMiddleware')
const { uploadPhoto, blogImgResize } = require('../middlewares/uploadImages')
router.put("/likes",authMiddleware,liketheBlog )
router.put("/dislikes",authMiddleware,disliketheBlog)
router.post("/",authMiddleware,isAdmin,createBlog)
router.put('/upload/:id',
           authMiddleware,
           isAdmin,
           uploadPhoto.array('images',2),
           blogImgResize,
           uploadImages)
router.get("/:id",getBlog)
router.get("/",getAllBlog)
router.put("/:id",authMiddleware,isAdmin,updateBlog)
router.delete("/:id",authMiddleware,isAdmin,deleteBlog)

module.exports = router