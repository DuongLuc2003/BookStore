const Product = require('../models/productModel')
const User = require('../models/userModel')
const Category = require('../models/categoryModel')
const Brand = require('../models/brandModel')
const Author = require('../models/authorModel')
const Tag = require('../models/tagModel')
const asyncHandler = require("express-async-handler")
const slugify = require('slugify')
const validateMongoDbId = require("../utils/validateMongodbId");
const { cloudinaryUploadImg } = require('../utils/cloudinary')
const fs = require('fs')
const createProduct = asyncHandler(async (req, res) => {
  try {
    if (req.body.title) {
      req.body.slug = slugify(req.body.title);
    }
    // Kiểm tra xem `category`, `brand`, và `author` có tồn tại không
    const category = await Category.findOne({ title: req.body.category });
    const brand = await Brand.findOne({ title: req.body.brand });
    const author = await Author.findOne({ name: req.body.author });
    const tag = await Tag.findOne({name: req.body.tag})
    if (!brand || !author) {
      return res.status(400).json({ error: "Danh mục, nhãn hiệu, tác giả hoặc tag không hợp lệ." });
    }
    // Gán ID của `category`, `brand`, và `author` cho sản phẩm
    req.body.category = category._id;
    req.body.brand = brand._id;
    req.body.author = author._id;
    req.body.tag = tag._id;
    
    const newProduct = await Product.create(req.body);
    res.json(newProduct);
  } catch (error) {
    throw new Error(error);
  }
});



const updateProduct = asyncHandler(async (req, res) => {
    const id = req.params.id;
    validateMongoDbId(id)
    try {
      if (req.body.title) {
        req.body.slug = slugify(req.body.title);
      }
      const updateProduct = await Product.findOneAndUpdate({ _id:id }, req.body, {
        new: true,
      });
      res.json(updateProduct);
    } catch (error) {
      throw new Error(error);
    }
  });

const deleteProduct = asyncHandler(async(req,res)=> {
    const id = req.params.id
    try {
        const deleteProduct = await Product.findByIdAndDelete(id);
        res.json(deleteProduct)
    } catch (error) {
        throw new Error(error)
    }
})


const getProduct = asyncHandler(async(req,res)=> {
    const {id} = req.params
    try {
       const findProduct = await Product.findById(id);
       res.json(findProduct)
    } catch (error) {
        throw new Error(error)
    }
});

const getAllProduct = asyncHandler(async (req, res) => {
  try {
      // Filtering
      const queryObj = { ...req.query };
      const excludeFields = ["page", "sort", "limit", "fields"];
      excludeFields.forEach((el) => delete queryObj[el]);

      let queryStr = JSON.stringify(queryObj);
      queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);

      let query = Product.find(JSON.parse(queryStr));

      // Sorting
      if (req.query.sort) {
          const sortBy = req.query.sort.split(",").join(" ");
          query = query.sort(sortBy);
      } else {
          query = query.sort('-createdAt');
      }

      // Limiting the fields
      if (req.query.fields) {
          const fields = req.query.fields.split(",").join(" ");
          query = query.select(fields);
      } else {
          query = query.select('-__v');
      }

      // Pagination
      const page = req.query.page;
      const limit = req.query.limit;
      const skip = (page - 1) * limit;
      query = query.skip(skip).limit(limit);

      if (req.query.page) {
          const productCount = await Product.countDocuments();
          if (skip >= productCount) throw new Error('This page does not exist');
      }

      // Populate the fields: 'category', 'brand', 'author', and 'tag'
      query = query.populate('category brand author tag');

      const products = await query;

      res.json(products);
  } catch (error) {
      throw new Error(error);
  }
});


const addToWishlist = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    const { prodId } = req.body;
    try {
      const user = await User.findById(_id);
      const alreadyadded = user.wishlist.find((id) => id.toString() === prodId);
      if (alreadyadded) {
        let user = await User.findByIdAndUpdate(
          _id,
          {
            $pull: { wishlist: prodId },
          },
          {
            new: true,
          }
        );
        res.json(user);
      } else {
        let user = await User.findByIdAndUpdate(
          _id,
          {
            $push: { wishlist: prodId },
          },
          {
            new: true,
          }
        );
        res.json(user);
      }
    } catch (error) {
      throw new Error(error);
    }
  });

const rating = asyncHandler(async(req,res)=> {
    const { _id } = req.user;
    const {star,prodId,comment} = req.body;
    try {
        const product = await Product.findById(prodId);
        let alreadyadded = product.ratings.find(
            (userId) => userId.postedby.toString() === _id.toString()
        );
        if(alreadyadded){
            const updateRating = await Product.updateOne({
                ratings: { $elemMatch: alreadyadded }
            }, {
                $set:{"ratings.$.star":star , "ratings.$.comment":comment}
            }, {
                new: true
            });
            
        } else {
            const rateProduct = await Product.findByIdAndUpdate(
                prodId,
                {
                    $push: {
                        ratings: {
                            star:star,
                            comment:comment,
                            postedby: _id,
                        },
                    },
                }, {
                    new: true
                }
            )
           
        }
        const getallratings = await Product.findById(prodId);
        let totalRating = getallratings.ratings.length;
        let ratingsum = getallratings.ratings
        .map((item) => item.star)
        .reduce((prev, curr) => prev + curr, 0);
        let actualRating = Math.round(ratingsum / totalRating);
        let finalproduct = await Product.findByIdAndUpdate(
          prodId,
          {
           totalrating: actualRating,
           },
          { new: true }
         );
         res.json(finalproduct);
    } catch (error) {
        throw new Error(error)
    }
})

const uploadImages = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const uploader = (path) => cloudinaryUploadImg(path, "images");
    const urls = [];
    const files = req.files;
    for (const file of files) {
      const { path } = file;
      const newpath = await uploader(path);
      console.log(newpath);
      urls.push(newpath);
      fs.unlinkSync(path);
    }
    const findProduct = await Product.findByIdAndUpdate(
      id,
      {
        images: urls.map((file) => {
          return file;
        }),
      },
      {
        new: true,
      }
    );
    res.json(findProduct);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
                   createProduct,
                   getProduct, 
                   getAllProduct, 
                   updateProduct, 
                   deleteProduct,
                   addToWishlist,
                   rating,
                   uploadImages
                }
