import React, { useEffect, useState } from "react";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import Meta from "../../components/Meta/Meta";
import "../../styles/cart.css";
import{ RiDeleteBin6Line }from 'react-icons/ri'
import { Link } from "react-router-dom";
import Container from "../../components/Container/Container";
import { useDispatch, useSelector } from "react-redux";
import { deleteProductCart, getUserCart, updateProductCart } from "../../features/auth/authSlice";
const Cart = () => {
  const dispatch = useDispatch()
  const [productUpdateDetail,setProductUpdateDetail] = useState(null)
  const [totalAmount,setTotalAmount] = useState(null) 
  console.log(totalAmount)
  const userCartState = useSelector((state) => state?.auth?.cart) || [];
  useEffect(() => {
    dispatch(getUserCart())
  },[])
  useEffect(() => {
    dispatch(updateProductCart({cartItemId:productUpdateDetail?.cartItemId,quantity:productUpdateDetail?.quantity}))
    setTimeout(() => {
      dispatch(getUserCart())
    },500)
  },[productUpdateDetail])
  const deleteAProductCart = (id) => {
    dispatch(deleteProductCart(id))
    setTimeout(() => {
      dispatch(getUserCart())
    },500)
  }
  useEffect(() => {
    let sum = 0;
    for(let index = 0; index < userCartState?.length ; index++) {
      sum = sum + (Number(userCartState[index].quantity) * userCartState[index].price)
      setTotalAmount(sum)
    }
  },[userCartState])
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
              {
                userCartState && userCartState?.map((item:any,index:any) => {
                  return(
                    <div className="cart-data py-3 d-flex justify-content-between align-items-center" key={index}>
                <div className="cart-col-1 d-flex align-items-center gap-15">
                  <div className="w-25 img-product-cart">
                    <img 
                        src={item?.productId?.images[0].url}
                        alt=""
                        className="img-fuild" />
                  </div>
                  <div className="w-75">
                    <p className="title my-3">{item?.productId?.title}</p>
                    <p className="author">{item?.productId?.author.name}</p>
                  </div>
                </div>
                <div className="cart-col-2">
                    <h5 className="price">${item?.price}</h5>
                </div>
                <div className="cart-col-3 d-flex align-items-center gap-15">
                    <div>
                        <input 
                        min={1}
                        max={10}
                        type="number" 
                        name="" 
                        id=''
                        className="form-control"
                        value={productUpdateDetail?.quantity ? productUpdateDetail?.quantity : item?.quantity}
                        onChange={(e) => {
                         setProductUpdateDetail({cartItemId:item?._id,quantity:e.target.value})
                        }}
                        
                        />
                        
                        
                    </div>
                    <div className="delete-product">
                    <RiDeleteBin6Line className="delete-product-icon" onClick={() => {deleteAProductCart(item?._id)}}/>
                    </div>
                </div>
                <div className="cart-col-4">
                <h5 className="price">${item?.price * item?.quantity}</h5>
                </div>
              </div>
                  )
                })
              }
              
            </div>
            
            <div className="col-12 py-2 mt-4">
                <div className="d-flex justify-content-between align-items-baseline">
                <Link to='/product' className="button">
                    Continue To Shopping
                </Link>
                {
                  (totalAmount !== null || totalAmount !==0) && 
                  <div className="d-flex justify-content-between flex-column align-items-end">
                    <h4 className="h4 fw-bolder">SubTotal: ${totalAmount}</h4>
                    <p>Taxes and shipping caculated at checkout</p>
                    <Link to='/checkout' className="button">Checkout</Link>
                </div>
                }
                </div>
            </div>

          </div>
        
      </Container>
    </div>
  );
};

export default Cart;
