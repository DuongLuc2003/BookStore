import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import customerReducer from "../features/customers/customerSlice";
import productReducer from "../features/product/productSlice";
import brandReducer from "../features/brand/brandSlice";
import pCategoriesReducer from "../features/pcategory/pcategorySlice";
import blogReducer from "../features/blogs/blogSlice";
import blogCateReducer from "../features/bcategory/bcategorySlice";
import contactReducer from "../features/contact/contactSlice";
import couponReducer from "../features/coupon/couponSlice";
import authorReducer from "../features/author/authorSlice";
import enquiryReducer from "../features/enquiry/enquirySlice";
import uploadReducer from "../features/upload/uploadSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    customer: customerReducer,
    product: productReducer,
    brand: brandReducer,
    author: authorReducer,
    pcategories: pCategoriesReducer,
    bCategories: blogCateReducer,
    blog: blogReducer,
    contact: contactReducer,
    coupon: couponReducer,
    upload: uploadReducer,
    enquiry: enquiryReducer
  },
});
