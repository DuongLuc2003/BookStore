import React from "react";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import Meta from "../../components/Meta/Meta";
import { Link } from "react-router-dom";
import {BiArrowBack} from 'react-icons/bi'
import '../../styles/checkout.css'
import Container from "../../components/Container/Container";
const Checkout = () => {
  return (
    <div>
      <Meta title={"BookStore"} />
      <BreadCrumb title="Checkout" />
      <Container class1="checkout-wrapper">
          <div className="row mb-5">
            <div className="col-7">
              <div className="checkout-left-data">
                <h3 className="webite-name fw-bolder">BookStore Ecomerce</h3>
                <nav
                  style={{ "--bs-breadcrumb-divider": '">' }}
                  aria-label="breadcrumb"
                >
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item ">
                      <Link to='/cart' className="text-dark total-price">Cart</Link>
                    </li>
                    &nbsp;
                    <li className="breadcrumb-item active total-price" aria-current="page">
                      Information
                    </li>
                    <li className="breadcrumb-item active total-price">
                      <a href="#" className="breadcrumb-item active">Shipping</a>
                    </li>
                    &nbsp;
                    <li className="breadcrumb-item active total-price" aria-current="page">
                      Payment
                    </li>
                  </ol>
                </nav>
                <h4 className="title total">Contact Information</h4>
                <p className="user-details total">
                  Duong Luc (lucck131103@gmail.com)
                </p>
                <h4 className="mb-3">Shipping Address</h4>
                <form
                  action=""
                  className="d-flex gap-15 justify-content-between flex-wrap"
                >
                  <div className="w-100">
                    <select 
                    name="" 
                    id="" 
                    className="form-control">
                    <option value="" selected disabled>
                        Select Country
                    </option>
                    </select>
                  </div>
                  <div className="flex-grow-1">
                    <input type="text" className="form-control" placeholder="FirstName"/>
                  </div>
                  <div className="flex-grow-1">
                    <input type="text" className="form-control" placeholder="LastName"/>
                  </div>
                  <div className="w-100">
                    <input type="text" className="form-control" placeholder="Address"/>
                  </div>
                  <div className="w-100">
                    <input type="text" className="form-control" placeholder="Apartment,Suit,etc"/>
                  </div>
                  <div className="flex-grow-1">
                    <input type="text" className="form-control" placeholder="City"/>
                  </div>
                  <div className="flex-grow-1">
                  <select 
                    name="" 
                    id="" 
                    className="form-control form-select"
                    >
                        <option value="" disabled selected>
                    Select State
                        </option>
                    </select>
                  </div>
                  <div className="flex-grow-1">
                  <input type="text" className="form-control" placeholder="Zipcode"/>
                  </div>
                  <div className="w-100">
                    <div className="d-flex justify-content-between align-items-center">
                        <Link to='/cart' className="text-dark">
                            <BiArrowBack className='me-2'/>
                            Return to Cart
                        </Link>
                        <Link to='/ourstore' className="button">
                            Continue to Shipping
                        </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-5">
                <div className="border-bottom py-4">
                   <div className="d-flex gap-10 align-items-center mb-2">
                   <div className="w-75 d-flex gap-10">
                   <div className="img-product-checkout w-25 position-relative">
                        <span className="badge bg-secondary text-white rounded-circle p-1 position-absolute"
                        style={{top:"-10px",
                                right:"-5px"}}>
                            1
                        </span>
                        <img className="img-fluid" src="images/harypotter.webp" alt="" />
                    </div>
                    <div>
                        <h5 className="title total-price">dsadsadsa</h5>
                        <p className="total-price">s/ dsadsđsđsa</p>
                    </div>
                   </div>
                    <div className="flex-grow-1">
                        <h5 className="total">$200</h5>
                    </div>
                   </div>
                </div>
                <div className="border-bottom py-4">
                <div className="d-flex justify-content-between align-items-center">
                  <p className="total">Subtotal</p>
                  <p className="total-price">$10000</p>
                </div>
                </div>
                <div>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="mb-0 total">Shipping</p>
                  <p className="mb-0 total-price">$10000</p>
                </div>
                </div>
                <div className="d-flex justify-content-between align-items-center border-bottom py-4">
                  <h4 className="fw-bolder">Total</h4>
                  <h5 className="fw-bolder total-price">$10000</h5>
                </div>
            </div>
          </div>
        
      </Container>
    </div>
  );
};

export default Checkout;
