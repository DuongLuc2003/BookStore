const express = require('express');
const { createAuthor,updateAuthor,deleteAuthor,getAuthor,getAllAuthor} = require('../controller/authorController');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/',authMiddleware,isAdmin,createAuthor)
router.put('/:id',authMiddleware,isAdmin,updateAuthor)
router.delete('/:id',authMiddleware,isAdmin,deleteAuthor)
router.get('/:id',getAuthor)
router.get('/',getAllAuthor)
module.exports = router