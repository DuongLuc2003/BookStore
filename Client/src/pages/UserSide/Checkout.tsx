import React, { useEffect, useState } from "react";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import Meta from "../../components/Meta/Meta";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import "../../styles/checkout.css";
import Container from "../../components/Container/Container";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";
const shippingSchema = yup.object({
  firstName: yup.string().required("Vui lòng nhập Họ"),
  lastName: yup.string().required("Vui lòng nhập Tên"),
  address: yup.string().required("Vui lòng nhập Địa chỉ"),
  other: yup.string().required("Vui lòng nhập Other"),
  state: yup.string().required("Vui lòng nhập Trạng thái"),
  city: yup.string().required("Vui lòng nhập Thành phố"),
  country: yup.string().required("Vui lòng nhập Quê quán"),
  pincode: yup.number().required("Vui lòng nhập Pincode"),
});
const Checkout = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.auth.cart);
  const [totalAmount, setTotalAmount] = useState(null);
  const [shippingInfo,setShippingInfo] = useState(null)
  console.log(cartState);
  useEffect(() => {
    let sum = 0;
    for (let index = 0; index < cartState?.length; index++) {
      sum = sum + Number(cartState[index].quantity) * cartState[index].price;
      setTotalAmount(sum);
    }
  }, [cartState]);
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      address: "",
      state: "",
      city: "",
      country: "",
      pincode: "",
      other:""
    },
    validationSchema: shippingSchema,
    onSubmit: (values) => {
      setShippingInfo(values)
    },
  });
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
                    <Link to="/cart" className="text-dark total-price">
                      Cart
                    </Link>
                  </li>
                  &nbsp;
                  <li
                    className="breadcrumb-item active total-price"
                    aria-current="page"
                  >
                    Information
                  </li>
                  <li className="breadcrumb-item active total-price">
                    <a href="#" className="breadcrumb-item active">
                      Shipping
                    </a>
                  </li>
                  &nbsp;
                  <li
                    className="breadcrumb-item active total-price"
                    aria-current="page"
                  >
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
                onSubmit={formik?.handleSubmit}
                action=""
                className="d-flex gap-15 justify-content-between flex-wrap"
              >
                <div className="w-100">
                  <select
                    name="country"
                    id=""
                    className="form-control"
                    value={formik.values.country}
                    onChange={formik.handleChange("country")}
                    onBlur={formik.handleBlur("country")}
                  >
                    <option value="" selected disabled>
                      Select Country
                    </option>
                    <option value="USA">USA</option>
                    <option value="VietNam">VietNam</option>
                  </select>
                  <div className="error ms-2 my-1">
                    {formik.touched.country && formik.errors.country}
                  </div>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="FirstName"
                    name='firstName'
                    value={formik.values.firstName}
                    onChange={formik.handleChange("firstName")}
                    onBlur={formik.handleBlur("firstName")}
                  />
                  <div className="error ms-2 my-1">
                    {formik.touched.firstName && formik.errors.firstName}
                  </div>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="LastName"
                    name='lastName'
                    value={formik.values.lastName}
                    onChange={formik.handleChange("lastName")}
                    onBlur={formik.handleBlur("lastName")}
                  />
                  <div className="error ms-2 my-1">
                    {formik.touched.firstName && formik.errors.firstName}
                  </div>
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Address"
                    name='address'
                    value={formik.values.address}
                    onChange={formik.handleChange("address")}
                    onBlur={formik.handleBlur("address")}
                  />
                  <div className="error ms-2 my-1">
                    {formik.touched.address && formik.errors.address}
                  </div>
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    className="form-control"
                    name='other'
                    placeholder="Apartment,Suit,etc"
                    value={formik.values.other}
                    onChange={formik.handleChange("other")}
                    onBlur={formik.handleBlur("other")}
                  />
                   <div className="error ms-2 my-1">
                    {formik.touched.other && formik.errors.other}
                  </div>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="City"
                    value={formik.values.city}
                    onChange={formik.handleChange("city")}
                    onBlur={formik.handleBlur("city")}
                  />
                   <div className="error ms-2 my-1">
                    {formik.touched.city && formik.errors.city}
                  </div>
                </div>
                <div className="flex-grow-1">
                  <select 
                  name="" 
                  id="" 
                  className="form-control form-select"
                  value={formik.values.state}
                    onChange={formik.handleChange("state")}
                    onBlur={formik.handleBlur("state")}>
                    <option value="" disabled selected>
                      Select State
                    </option>
                    <option value="Haryana">
                      Haryana
                    </option>
                  </select>
                  <div className="error ms-2 my-1">
                    {formik.touched.state && formik.errors.state}
                  </div>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Zipcode"
                    value={formik.values.pincode}
                    onChange={formik.handleChange("pincode")}
                    onBlur={formik.handleBlur("pincode")}
                  />
                   <div className="error ms-2 my-1">
                    {formik.touched.pincode && formik.errors.pincode}
                  </div>
                </div>
                <div className="w-100">
                  <div className="d-flex justify-content-between align-items-center">
                    <Link to="/cart" className="text-dark">
                      <BiArrowBack className="me-2" />
                      Return to Cart
                    </Link>
                    <Link to="/ourstore" className="button">
                      Continue to Shipping
                    </Link>
                    <button className="button" type="submit">
                      Place Order
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-5">
            <div className="border-bottom py-4">
              {cartState &&
                cartState?.map((item: any, index: any) => {
                  return (
                    <div
                      className="d-flex gap-10 align-items-center mb-2"
                      key={index}
                    >
                      <div className="w-75 d-flex gap-10">
                        <div className="img-product-checkout w-25 position-relative">
                          <span
                            className="badge bg-secondary text-white rounded-circle p-1 position-absolute"
                            style={{ top: "-10px", right: "-5px" }}
                          >
                            {item?.quantity}
                          </span>
                          <img
                            src={item?.productId?.images[0].url}
                            alt=""
                            width={100}
                            height={100}
                          />
                        </div>
                        <div>
                          <h5 className="title total-price">
                            {item?.productId?.title}
                          </h5>
                          <p className="total-price">
                            Author: {item?.productId?.author?.name}
                          </p>
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <h5 className="total">
                          {" "}
                          ${item?.price * item?.quantity}
                        </h5>
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="border-bottom py-4">
              <div className="d-flex justify-content-between align-items-center">
                <p className="total">Subtotal</p>
                <p className="total-price">
                  ${totalAmount ? totalAmount : "0"}
                </p>
              </div>
            </div>
            <div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="mb-0 total">Shipping</p>
                <p className="mb-0 total-price">$5</p>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center border-bottom py-4">
              <h4 className="fw-bolder">Total</h4>
              <h5 className="fw-bolder total-price">
                ${totalAmount ? totalAmount + 5 : "0"}
              </h5>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Checkout;
