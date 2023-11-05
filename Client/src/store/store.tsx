import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import customerReducer from "../features/customers/customerSlice";
import productReducer from "../features/product/productSlice";
import brandReducer from "../features/brand/brandSlice";
import pCategoriesReducer from "../features/pcategory/pcategorySlice";
import blogReducer from "../features/blogs/blogSlice";
import blogCateReducer from "../features/bcategory/bcategorySlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    customer: customerReducer,
    product: productReducer,
    brand: brandReducer,
    pcategories: pCategoriesReducer,
    bCategories: blogCateReducer,
    blog: blogReducer,
    
  },
});
