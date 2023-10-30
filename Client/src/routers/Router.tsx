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
import Shop from '../pages/Shop.tsx';
import Signup from '../pages/UserSide/Signup.tsx';
import Signin from '../pages/UserSide/Signin.tsx';
import ForgotPass from '../pages/UserSide/ForgotPass.tsx';
import ResetPassword from '../pages/UserSide/ResetPassword.tsx';
import WishList from '../pages/UserSide/WishList.tsx';
import Productdetail from '../pages/Productdetail.tsx';
import SingleBlog from '../pages/UserSide/SingleBlog.tsx';
import SingleProduct from '../pages/UserSide/SingleProduct.tsx';
import LayoutAdmin from '../components/Layouts/LayoutAdmin/LayoutAdmin.tsx';
import Dashboard from '../pages/admin/dashbroad/index.tsx';
import AdminProduct from '../features/product/index.tsx';
import AdminUser from '../features/auth/index.tsx';
import AdminProductAdd from '../features/product/pages/Add/index.tsx';
import AdminProductEdit from '../features/product/pages/Edit/index.tsx';
import Layout from '../components/Layouts/LayoutWebsite/Layout.tsx';
import ProductCompare from '../pages/UserSide/ProductCompare.tsx';
import ProtectedRoute from './ProtectedRoute.tsx';
import ShippingPolicy from '../pages/UserSide/ShippingPolicy.tsx';
import TermAndContions from '../pages/UserSide/TermAndContions.tsx';
import RefundPolicy from '../pages/UserSide/RefundPolicy.tsx';
import PrivacyPolicy from '../pages/UserSide/PrivacyPolicy.tsx';
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
      { path: '/wishlist', element: <WishList /> },
      { path: '/blog:id', element: <SingleBlog /> },
      { path: '/shipping-policy', element: <ShippingPolicy /> },
      { path: '/term-contions', element: <TermAndContions /> },
      { path: '/privacy-policy', element: <PrivacyPolicy /> },
      { path: '/refund-policy', element: <RefundPolicy /> },
      { path: 'Shop', element: <Shop /> },
      { path: 'Shop/:id', element: <Productdetail /> },
      { path: 'Cart', element: <Cart /> },
      { path: '/checkout', element: <Checkout/>},
      { path: 'Login', element: <Signin /> },
      { path: '/Signup', element: <Signup /> },
      { path: '/forgot-password', element: <ForgotPass /> },
      { path: '/reset-password', element: <ResetPassword /> },
      
    ]
  },
  {
    path: 'admin',
    element: <LayoutAdmin />,
    children: [
      { index: true, element: <Navigate to='dashboard' /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'product', element: <AdminProduct /> },
      { path: 'user', element: <AdminUser /> },
      { path: 'product/add', element: <AdminProductAdd /> },
      { path: 'product/:idProduct/edit', element: <AdminProductEdit /> },
    ],
  },
]);

// export const Router = createBrowserRouter(routes);