const blogCategory = require('../models/blogCatModel')
const asyncHandler = require('express-async-handler')
const validateMongoDbId = require("../utils/validateMongodbId")

const createCategory = asyncHandler(async(req,res)=> {
    try {
        const newCategory = await blogCategory.create(req.body)
        res.json(newCategory)
    } catch (error) {
        throw new Error(error)
    }
})

const updateCategory = asyncHandler(async(req,res)=> {
    const {id}= req.params
    try {
        const updatedCategory = await blogCategory.findByIdAndUpdate(id,req.body,{
            new:true
        })
        res.json(updatedCategory)
    } catch (error) {
        throw new Error(error)
    }
})

const deleteCategory = asyncHandler(async(req,res)=> {
    const {id}= req.params
    try {
        const deleteCategory = await blogCategory.findByIdAndDelete(id)
        res.json(deleteCategory)
    } catch (error) {
        throw new Error(error)
    }
})

const getCategory = asyncHandler(async(req,res)=> {
    const {id}= req.params;
    validateMongoDbId(id)
    try {
        const getCategory = await blogCategory.findById(id)
        res.json(getCategory)
    } catch (error) {
        throw new Error(error)
    }
})

const getAllCategory = asyncHandler(async(req,res)=> {
    try {
        const getAllCategory = await blogCategory.find()
        res.json(getAllCategory)
    } catch (error) {
        throw new Error(error)
    }
})

module.exports = { createCategory , updateCategory, deleteCategory,getCategory,getAllCategory}