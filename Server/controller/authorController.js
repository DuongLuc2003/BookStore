const Author = require('../models/authorModel')
const asyncHandler = require('express-async-handler')
const validateMongoDbId = require("../utils/validateMongodbId")

const createAuthor = asyncHandler(async(req,res)=> {
    try {
        const newAuthor = await Author.create(req.body)
        res.json(newAuthor)
    } catch (error) {
        throw new Error(error)
    }
})

const updateAuthor = asyncHandler(async(req,res)=> {
    const {id}= req.params
    try {
        const updatedAuthor = await Author.findByIdAndUpdate(id,req.body,{
            new:true
        })
        res.json(updatedAuthor)
    } catch (error) {
        throw new Error(error)
    }
})

const deleteAuthor = asyncHandler(async(req,res)=> {
    const {id}= req.params
    try {
        const deleteAuthor = await Author.findByIdAndDelete(id)
        res.json(deleteAuthor)
    } catch (error) {
        throw new Error(error)
    }
})

const getAuthor = asyncHandler(async(req,res)=> {
    const {id}= req.params;
    validateMongoDbId(id)
    try {
        const getAuthor = await Author.findById(id)
        res.json(getAuthor)
    } catch (error) {
        throw new Error(error)
    }
})

const getAllAuthor = asyncHandler(async(req,res)=> {
    try {
        const getAllAuthor = await Author.find()
        res.json(getAllAuthor)
    } catch (error) {
        throw new Error(error)
    }
})

module.exports = { createAuthor , updateAuthor, deleteAuthor,getAuthor,getAllAuthor}