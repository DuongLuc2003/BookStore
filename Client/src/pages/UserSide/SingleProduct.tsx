import React, { useState } from "react";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import Meta from "../../components/Meta/Meta";
import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import ReactImageZoom from "react-image-zoom";
import {GoGitCompare} from 'react-icons/go'
import {AiOutlineHeart} from 'react-icons/ai'
import ReactStars from "react-rating-stars-component";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/simpleProduct.css";
import Container from "../../components/Container/Container";
const SingleProduct = () => {
  const props = {
    width: 400,
    height: 500,
    zoomWidth: 500,
    img: "https://thuviensach.vn/img/news/2022/09/larger/1064-harry-potter-va-bao-boi-tu-than-1.jpg?v=5708",
  };
  const [orderedProduct, setorderedProduct] = useState(true);
  return (
    <>
      <Meta title={"BookStore"} />
      <BreadCrumb title="Single-Product" />
      <Container class1="main-product-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                <div>
                  <img
                    src="https://thegioidienanh.vn/stores/news_dataimages/anhvu/042021/02/10/5713_1._Bia_sach_Harry_Potter_va_BYo_bYi_tY_thYn.jpg?rt=20210402105911"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="other-product-images d-flex flex-wrap gap-15">
                <div>
                  <img
                    src="https://thegioidienanh.vn/stores/news_dataimages/anhvu/042021/02/10/5713_1._Bia_sach_Harry_Potter_va_BYo_bYi_tY_thYn.jpg?rt=20210402105911"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div>
                  <img
                    src="https://thegioidienanh.vn/stores/news_dataimages/anhvu/042021/02/10/5713_1._Bia_sach_Harry_Potter_va_BYo_bYi_tY_thYn.jpg?rt=20210402105911"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div>
                  <img
                    src="https://thegioidienanh.vn/stores/news_dataimages/anhvu/042021/02/10/5713_1._Bia_sach_Harry_Potter_va_BYo_bYi_tY_thYn.jpg?rt=20210402105911"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div>
                  <img
                    src="https://thegioidienanh.vn/stores/news_dataimages/anhvu/042021/02/10/5713_1._Bia_sach_Harry_Potter_va_BYo_bYi_tY_thYn.jpg?rt=20210402105911"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="main-product-details">
                <div className="title-product ">
                  <h3 className="title">Harypotter ipsum dolor sit amet</h3>
                </div>
                <div className="title-product py-3">
                  <p className="price">$ 100</p>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      value={3}
                      count={5}
                      size={24}
                      activeColor="#ffd700"
                      edit={false}
                    />
                    <p className="mb-0 t-review">(2 Reviews)</p>
                  </div>
                  <a href="#review" className="review-btn">
                    Write a Review
                  </a>
                </div>
                <div className="title-product py-3">
                  <div className="d-flex gap-10 align-items-center my-3">
                    <h3 className="product-heading h3">Type: </h3>
                    <p className="product-data"></p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-3">
                    <h3 className="product-heading h3">Brand: </h3>
                    <p className="product-data">GFd</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-3">
                    <h3 className="product-heading h3">Tags: </h3>
                    <p className="product-data">GFd</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-3">
                    <h3 className="product-heading h3">Availablity: </h3>
                    <p className="product-data">GFd</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-3">
                    <h3 className="product-heading h3">Auhtor: </h3>
                    <p className="product-data">GFd</p>
                  </div>
                  <div className="d-flex gap-15 mt-2 mb-3 flex-row align-items-center">
                    <h3 className="product-heading h3">Quantity: </h3>
                    <div className="">
                      <input 
                      type="number" 
                      className="from-control" 
                      min={1}
                      max={10}
                      style={{width:"50px"}} 
                      id="" />
                    </div>
                    <div className="d-flex align-items-center gap-30 ms-5">
                    <button className="button border-0" type="submit">Add to Cart</button>
                        <button className="button signup">Buy It Now</button>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15 mt-3 mb-3">
                  <div className="">
                    <a href="" className="text-dark">
                      <GoGitCompare className='fs-5 me-2'/>
                       Add to Compare</a>
                  </div>
                  <div className="">
                    <a href="" className="text-dark">
                    <AiOutlineHeart className='fs-5 me-2'/>
                      Add to Wishlist</a>
                  </div>
                </div>
                <div className=" gap-10 align-items-center my-2 shipping-title">
                    <h3 className="product-heading mb-2">Shipping & Return: </h3>
                    <p className="product-data">
                      Free shipping and returns available on all orders! <br /> {" "}
                      We shipping all Us domestic orders within {" "}
                      <b>5-10 business days!</b>
                    </p>
                  </div>
                
              </div>
            </div>
          
        </div>
      </Container>
      <Container class1="description-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <h4 className="h4 fw-bolder">Description</h4>
              <div className="bg-white p-3">
                <p className="">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
      </Container>
      <Container class1="reviews-wrapper pb-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <h3>Reviews</h3>
              <div className="review-inner-wrapper bg-white p-3">
                <div className="review-head d-flex justify-content-between align-items-end ">
                  <div className="">
                    <h4 className="mb-2 fw-bolder " id="review">
                      Customer Reviews
                    </h4>
                    <div className="d-flex gap-10 justify-content-between align-items-center">
                      <ReactStars
                        value={3}
                        count={5}
                        size={24}
                        activeColor="#ffd700"
                        edit={false}
                      />
                      <p className="mb-0">Based on 2 Reviews</p>
                    </div>
                  </div>
                  {orderedProduct && (
                    <div className="write">
                      <a
                        href=""
                        className="text-dark text-decoration-underline "
                      >
                        Write a Review
                      </a>
                    </div>
                  )}
                </div>

                <div className="review-form py-4" id="review">
                  <h4 className="mb-2 fw-bolder">Write a Review</h4>
                  <form action="" className="d-flex flex-column gap-15">
                    <div className="">
                      <ReactStars
                        value={3}
                        count={5}
                        size={14}
                        activeColor="#ffd700"
                        edit={true}
                      />
                    </div>
                    <div className="">
                      <textarea
                        name=""
                        id=""
                        cols={30}
                        rows={4}
                        className="w-100 form-control"
                        placeholder="Comments"
                      ></textarea>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button className="button bolder-0">Submit Review</button>
                    </div>
                  </form>
                </div>

                <div className="reviews mt-4">
                  <div className="review">
                    <div className="d-flex gap-10 align-items-center">
                      <h6 className="h6 mb-0 ">DuongLuc</h6>
                      <ReactStars
                        value={3}
                        count={5}
                        size={14}
                        activeColor="#ffd700"
                        edit={true}
                      />
                    </div>
                    <p className="mt-3">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </Container>
      <Container class1="popular-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading fw-bolder">
                Our Popular Products
              </h3>
            </div>
          </div>
          <div className="row">
            <ProductCard />
          </div>
      </Container>
    </>
  );
};

export default SingleProduct;
