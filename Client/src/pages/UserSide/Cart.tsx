import React from "react";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import Meta from "../../components/Meta/Meta";
import "../../styles/cart.css";
import{ RiDeleteBin6Line }from 'react-icons/ri'
import { Link } from "react-router-dom";
import Container from "../../components/Container/Container";
const Cart = () => {
  return (
    <div>
      <Meta title={"BookStore"} />
      <BreadCrumb title="Cart" />
      <Container class1="cart-wrapper home-wrapper-2 py-5">
        
          <div className="row">

            <div className="col-12">
              <div className="cart-header py-3 d-flex justify-content-between align-items-center">
                <h4 className="cart-col-1 fw-bolder">Product</h4>
                <h4 className="cart-col-2 fw-bolder">Price</h4>
                <h4 className="cart-col-3 fw-bolder">Quantity</h4>
                <h4 className="cart-col-4 fw-bolder">Total</h4>
              </div>
              <div className="cart-data py-3 d-flex justify-content-between align-items-center">
                <div className="cart-col-1 d-flex align-items-center gap-15">
                  <div className="w-25 img-product-cart">
                    <img 
                        src="images/harypotter.webp" 
                        alt=""
                        className="img-fuild" />
                  </div>
                  <div className="w-75">
                    <p className="title my-3">Harypotter</p>
                    <p className="author">Author:DuongLuc</p>
                  </div>
                </div>
                <div className="cart-col-2">
                    <h5 className="price">$100</h5>
                </div>
                <div className="cart-col-3 d-flex align-items-center gap-15">
                    <div>
                        <input 
                        min={1}
                        max={10}
                        type="number" 
                        name="" 
                        id=''
                        className="form-control"/>
                        
                    </div>
                    <div className="delete-product">
                    <RiDeleteBin6Line className="delete-product-icon"/>
                    </div>
                </div>
                <div className="cart-col-4">
                <h5 className="price">$100</h5>
                </div>
              </div>
              <div className="cart-data py-3 d-flex justify-content-between align-items-center">
                <div className="cart-col-1 d-flex align-items-center gap-15">
                  <div className="w-25 img-product-cart">
                    <img 
                        src="images/harypotter.webp" 
                        alt=""
                        className="img-fuild" />
                  </div>
                  <div className="w-75">
                    <p className="title my-3">Harypotter</p>
                    <p className="author">Author:DuongLuc</p>
                  </div>
                </div>
                <div className="cart-col-2">
                    <h5 className="price">$100</h5>
                </div>
                <div className="cart-col-3 d-flex align-items-center gap-15">
                    <div>
                        <input 
                        min={1}
                        max={10}
                        type="number" 
                        name="" 
                        id=''
                        className="form-control"/>
                        
                    </div>
                    <div className="delete-product">
                    <RiDeleteBin6Line className="delete-product-icon"/>
                    </div>
                </div>
                <div className="cart-col-4">
                <h5 className="price">$100</h5>
                </div>
              </div>
            </div>
            
            <div className="col-12 py-2 mt-4">
                <div className="d-flex justify-content-between align-items-baseline">
                <Link to='/ourstore' className="button">
                    Continue To Shopping
                </Link>
                <div className="d-flex justify-content-between flex-column align-items-end">
                    <h4 className="h4 fw-bolder">SubTotal: $1000</h4>
                    <p>Taxes and shipping caculated at checkout</p>
                    <Link to='/checkout' className="button">Checkout</Link>
                </div>
                </div>
            </div>

          </div>
        
      </Container>
    </div>
  );
};

export default Cart;
