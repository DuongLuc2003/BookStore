import React from "react";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import Meta from "../../components/Meta/Meta";
import "../../styles/compare.css";
import Container from "../../components/Container/Container";
const ProductCompare = () => {
  return (
    <div>
      <Meta title={"Book Store"} />
      <BreadCrumb title="Compare Product" />
      <Container class1="compare-product-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img src="images/cross.svg" alt="cross" className="postion-absolute cross float-end" />
                <div className="product-card-image d-flex justify-content-center  ">
                  <img src="images/harypotter.webp" alt="book1" />
                </div>
                 <div className="compare-prouduct-details">
                  <h5 className="title h5 d-flex justify-content-center mt-2">
                    HarryPotter Chapper 6
                  </h5>
                  <h6 className="price mb-3 mt-3">200$</h6>
                  <div className="">
                    <div className="product-detail">
                      <h5>Brand:</h5>
                      <h6>Havels</h6>
                    </div>
                    <div className="product-detail">
                      <h5>Type:</h5>
                      <h6>Watch</h6>
                    </div>
                    <div className="product-detail">
                      <h5>Availabtity:</h5>
                      <h6>In Stock</h6>
                    </div>
                    <div className="product-detail">
                      <h5>Author:</h5>
                      <h6>Havels</h6>
                    </div>
                    <div className="product-detail">
                      <h5>Brand:</h5>
                      <h6>Havels</h6>
                    </div>
                  </div>
                 </div>

              </div>
            </div>
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img src="images/cross.svg" alt="cross" className="postion-absolute cross float-end" />
                <div className="product-card-image d-flex justify-content-center  ">
                  <img src="images/harypotter.webp" alt="book1" />
                </div>
                 <div className="compare-prouduct-details">
                  <h5 className="title h5 d-flex justify-content-center mt-2">
                    HarryPotter Chapper 6
                  </h5>
                  <h6 className="price mb-3 mt-3">200$</h6>
                  <div className="">
                    <div className="product-detail">
                      <h5>Brand:</h5>
                      <h6>Havels</h6>
                    </div>
                    <div className="product-detail">
                      <h5>Type:</h5>
                      <h6>Watch</h6>
                    </div>
                    <div className="product-detail">
                      <h5>Availabtity:</h5>
                      <h6>In Stock</h6>
                    </div>
                    <div className="product-detail">
                      <h5>Author:</h5>
                      <h6>Havels</h6>
                    </div>
                    <div className="product-detail">
                      <h5>Category:</h5>
                      <h6>Havels</h6>
                    </div>
                  </div>
                 </div>

              </div>
            </div>
          </div>
       
      </Container>
    </div>
  );
};

export default ProductCompare;
