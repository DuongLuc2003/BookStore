const Tag = require('../models/tagModel')
const asyncHandler = require('express-async-handler')
const validateMongoDbId = require("../utils/validateMongodbId")

const createTag = asyncHandler(async(req,res)=> {
    try {
        const newTag = await Tag.create(req.body)
        res.json(newTag)
    } catch (error) {
        throw new Error(error)
    }
})

const updateTag = asyncHandler(async(req,res)=> {
    const {id}= req.params
    try {
        const updatedTag = await Tag.findByIdAndUpdate(id,req.body,{
            new:true
        })
        res.json(updatedTag)
    } catch (error) {
        throw new Error(error)
    }
})

const deleteTag = asyncHandler(async(req,res)=> {
    const {id}= req.params
    try {
        const deleteTag = await Tag.findByIdAndDelete(id)
        res.json(deleteTag)
    } catch (error) {
        throw new Error(error)
    }
})

const getTag = asyncHandler(async(req,res)=> {
    const {id}= req.params;
    validateMongoDbId(id)
    try {
        const getTag = await Tag.findById(id)
        res.json(getTag)
    } catch (error) {
        throw new Error(error)
    }
})

const getAllTag = asyncHandler(async(req,res)=> {
    try {
        const getAllTag = await Tag.find()
        res.json(getAllTag)
    } catch (error) {
        throw new Error(error)
    }
})

module.exports = { createTag , updateTag, deleteTag,getTag,getAllTag}