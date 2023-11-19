import React, { useEffect } from "react";
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb.tsx'
import Meta from '../../components/Meta/Meta.tsx'
import Container from "../../components/Container/Container.tsx";
import '../../styles/order.css'
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../features/auth/authSlice.tsx";
const Orders = () => {
    const dispatch = useDispatch()
    const orderState = useSelector(state => state.auth.getorderedProduct?.orders)
    console.log(orderState)
    useEffect(() => {
       dispatch(getOrders())

    },[])
    return (
        <>
        <Meta title={'BookStore'}/>
        <BreadCrumb title="My Orders"/>
         <Container class1='cart-wrapper home-wrapper-2 py-5'>
         <div className="row">
            <div className="col-12">
                <div className="row">
                    <div className="col-3">
                        <h5 className="h5 fw-bolder text-center">Order Id</h5>
                    </div>
                    <div className="col-3">
                        <h5 className="h5 fw-bolder text-center">Total Amount</h5>
                    </div>
                    <div className="col-3">
                        <h5 className="h5 fw-bolder text-center">Total Amount After Discount</h5>
                    </div>
                    <div className="col-3">
                        <h5 className="h5 fw-bolder text-center">Status</h5>
                    </div>
                </div>
                
            </div>
            <div className="col-12 mt-3">
                 {
                    orderState && orderState?.map((item,index) => {
                        return (
                            <div className="row my-3 mt-3 pt-3" key={index} style={{backgroundColor:"#02f0c0"}}>
                            <div className="col-3">
                                <p className="text-center">{item?._id}</p>
                            </div>
                            <div className="col-3">
                                <p className="text-center">{item?.totalPrice}</p>
                            </div>
                            <div className="col-3">
                                <p className="text-center">{item?.totalPriceAfterDiscount}</p>
                            </div>
                            <div className="col-3">
                                <p className="text-center">{item?.orderStatus}</p>
                            </div>
                            <div className="col-12">
                                <div className="row py-3" style={{backgroundColor:"#84e8d4"}}>
                                <div className="col-3">
                                <h6 className="h6 text-center">Product Name</h6>
                            </div>
                            <div className="col-3">
                                <h6 className="h6 text-center">Quantity</h6>
                            </div>
                            <div className="col-3">
                                <h6 className="h6 text-center">Price</h6>
                            </div>
                            <div className="col-3">
                                <h6 className="h6 text-center">Author</h6>
                            </div>
                            {
                                item?.orderItems?.map((i:any,index:any) => {
                                    return (
                                        <div className="col-12">
                                        <div className="row py-3" style={{backgroundColor:"#a2e8da"}}>
                                        <div className="col-3">
                                        <p className="text-center">{i?.product?.title}</p>
                                    </div>
                                    <div className="col-3">
                                        <p className="text-center">{i?.product?.quantity}</p>
                                    </div>
                                    <div className="col-3">
                                        <p className="text-center">{i?.product?.price}</p>
                                    </div>
                                    <div className="col-3">
                                        <p className="text-center">{i?.author}</p>
                                    </div> 
                                    </div>
                            </div>
                                    )
                                })
                            }
                                </div>
                            </div>
                        </div>
                        )
                    })
                 }
            </div>
         </div>
        </Container>
        </>
       
    )
}
export default Orders