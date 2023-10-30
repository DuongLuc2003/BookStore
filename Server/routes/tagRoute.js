const express = require('express');
const { createTag,updateTag,deleteTag,getTag,getAllTag} = require('../controller/tagController');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/',authMiddleware,isAdmin,createTag)
router.put('/:id',authMiddleware,isAdmin,updateTag)
router.delete('/:id',authMiddleware,isAdmin,deleteTag)
router.get('/:id',getTag)
router.get('/',getAllTag)
module.exports = router