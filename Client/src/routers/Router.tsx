// src/routers/Router.js
import React from 'react';
import {  Navigate } from 'react-router-dom';
import { createBrowserRouter } from "react-router-dom";
import Cart from '../pages/UserSide/Cart.tsx';
import Home from '../pages/UserSide/Home.tsx';
import About from '../pages/UserSide/About.tsx';
import Contact from '../pages/UserSide/Contact.tsx';
import OurStore from '../pages/UserSide/OurStore.tsx';
import Blog from '../pages/UserSide/Blog.tsx'
import Checkout from '../pages/UserSide/Checkout.tsx';
import Signup from '../pages/UserSide/Signup.tsx';
import Signin from '../pages/UserSide/Signin.tsx';
import ForgotPass from '../pages/UserSide/ForgotPass.tsx';
import ResetPassword from '../pages/UserSide/ResetPassword.tsx';
import WishList from '../pages/UserSide/WishList.tsx';
import SingleBlog from '../pages/UserSide/SingleBlog.tsx';
import SingleProduct from '../pages/UserSide/SingleProduct.tsx';
import Layout from '../components/Layouts/LayoutWebsite/Layout.tsx';
import LayoutAdmin from '../components/Layouts/LayoutAdmin/LayoutAdmin.tsx';
import Dashboard from '../pages/Admin/Dashboard.tsx';
import Enquiries from '../pages/Admin/Enquiries.tsx';
import Bloglist from '../pages/Admin/Bloglist.tsx';
import AddBlog from '../pages/Admin/Addblog.tsx';
import OrderList from '../pages/Admin/Orders.tsx';
import Customers from '../pages/Admin/Customers.tsx';
import Blogcatlist from '../pages/Admin/Blogcatlist.tsx';
import Brandlist from '../pages/Admin/Brandlist.tsx';
import Productlist from '../pages/Admin/Productlist.tsx';
import ProductCompare from '../pages/UserSide/ProductCompare.tsx';
import ProtectedRoute from './ProtectedRoute.tsx';
import ShippingPolicy from '../pages/UserSide/ShippingPolicy.tsx';
import TermAndContions from '../pages/UserSide/TermAndContions.tsx';
import RefundPolicy from '../pages/UserSide/RefundPolicy.tsx';
import PrivacyPolicy from '../pages/UserSide/PrivacyPolicy.tsx';
import Addblogcat from '../pages/Admin/Addblogcat.tsx';
import Editblog from '../pages/Admin/Editblog.tsx';
import Addcategory from '../pages/Admin/Addcategory.tsx';
import Addbrand from '../pages/Admin/Addbrand.tsx';
import Addproduct from '../pages/Admin/Addproduct.tsx';
import Editproduct from '../pages/Admin/Editproduct.tsx';
import Pcategorieslist from '../pages/Admin/Pcategorieslist.tsx';
import  { PrivateRoutes } from '../routing/PrivateRoutes.tsx';
import Profile from '../pages/UserSide/Profile.tsx';
import { OpenRoutes } from '../routing/OpenRoutes.tsx';
import Orders from '../pages/UserSide/Orders.tsx';
import ViewOrder from '../pages/Admin/OrderView.tsx';
import Couponlist from '../pages/Admin/Couponlist.tsx';
import AddCoupon from '../pages/Admin/AddCoupon.tsx';
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Navigate to='/home' /> },
      { path: '/home', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/contact', element: <Contact /> },
      { path: '/product', element: <OurStore /> },
      { path: '/blogs', element: <Blog /> },
      { path: '/compare-product', element: <ProductCompare /> },
      { path: '/product/:id', element: <SingleProduct /> },
      { 
        path: '/wishlist', 
        element: <WishList />
      },
      { path: '/blog/:id', element: <SingleBlog /> },
      { path: '/shipping-policy', element: <ShippingPolicy /> },
      { path: '/term-contions', element: <TermAndContions /> },
      { path: '/privacy-policy', element: <PrivacyPolicy /> },
      { path: '/refund-policy', element: <RefundPolicy /> },
      {
        path: '/cart',
        element: <Cart/>,
      },
      { path: '/my-orders', element: <Orders/>},
      { path: '/checkout', element: <Checkout/>},
      { path: '/my-profile', element: <Profile/>},
      { 
        path: 'Login', 
        element: <OpenRoutes><Signin /></OpenRoutes> 
      },
      { 
        path: '/Signup', 
        element: <OpenRoutes><Signup /></OpenRoutes> },
      { path: '/forgot-password', element: <ForgotPass /> },
      { path: '/reset-password/:token', element: <ResetPassword /> },
      
    ]
  },
  {
    path: 'admin',
    element: <LayoutAdmin />,
    children: [
      { index: true, element: <Navigate to='dashboard' /> },
      { path: 'dashboard', element: <Dashboard/> },
      { path: 'products', element: <Productlist/> },
      { path: 'product-add', element: <Addproduct/> },
      { path: 'product-edit/:id', element: <Editproduct/> },
      { path: 'enquiries', element: <Enquiries/> },
      { path: 'brand-add', element: <Addbrand/> },
      { path: 'blog-list', element: <Bloglist/> },
      { path: 'blog-add', element: <AddBlog/> },
      { path: 'blog-edit/:id', element: <Editblog/> },
      { path: 'blog-category', element: <Addblogcat/> },
      { path: 'blog-category-list', element: <Blogcatlist/> },
      { path: 'coupon-list', element: <Couponlist/> },
      { path: 'coupon-add', element: <AddCoupon/> },
      { path: 'category-add', element: <Addcategory/> },
      { path: 'orders', element: <OrderList/> },
      { path: 'order/:id', element: <ViewOrder/> },
      { path: 'customers', element: <Customers/> },
      { path: 'categories', element: <Pcategorieslist/> },
      { path: 'brands', element: <Brandlist/> },
      // { path: 'product', element: <AdminProduct /> },
      // { path: 'user', element: <AdminUser /> },
      // { path: 'product/add', element: <AdminProductAdd /> },
      // { path: 'product/:idProduct/edit', element: <AdminProductEdit /> },
    ],
  },
]);

// export const Router = createBrowserRouter(routes);