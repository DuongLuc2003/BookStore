import React from "react";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import Meta from "../../components/Meta/Meta";
import "../../styles/wishlist.css";
import Container from "../../components/Container/Container";
const WishList = () => {
  return (
    <div>
      <Meta title={"Book Store"} />
      <BreadCrumb title="WishList" />
      <Container class1="wishlist-wrapper home-wrapper-2 py-5">
          <div className="row">
            <div className="col-3">
              <div className="wishlist-card position-relative">
                  <img
                    src="images/cross.svg"
                    alt="cross"
                    className="postion-absolute cross float-end img-fluid"
                  />
                  <div className="wishlist-card-image d-flex justify-content-center  ">
                    <img src="images/harypotter.webp" alt="harypotter" />
                  </div>
              </div>
              <div className="py-3 px-3">
                  <h5 className="title h5 mt-2">
                    HarryPotter Chapper 6
                  </h5>
                  <h6 className="price mb-3 mt-3">200$</h6>
                  </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative">
                  <img
                    src="images/cross.svg"
                    alt="cross"
                    className="postion-absolute cross float-end img-fluid"
                  />
                  <div className="wishlist-card-image d-flex justify-content-center  ">
                    <img src="images/harypotter.webp" alt="harypotter" />
                  </div>
              </div>
              <div className="py-3 px-3">
                  <h5 className="title h5 mt-2">
                    HarryPotter Chapper 6
                  </h5>
                  <h6 className="price mb-3 mt-3">200$</h6>
                  </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative">
                  <img
                    src="images/cross.svg"
                    alt="cross"
                    className="postion-absolute cross float-end img-fluid"
                  />
                  <div className="wishlist-card-image d-flex justify-content-center  ">
                    <img src="images/harypotter.webp" alt="harypotter" />
                  </div>
              </div>
              <div className="py-3 px-3">
                  <h5 className="title h5 mt-2">
                    HarryPotter Chapper 6
                  </h5>
                  <h6 className="price mb-3 mt-3">200$</h6>
                  </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative">
                  <img
                    src="images/cross.svg"
                    alt="cross"
                    className="postion-absolute cross float-end img-fluid"
                  />
                  <div className="wishlist-card-image d-flex justify-content-center  ">
                    <img src="images/harypotter.webp" alt="harypotter" />
                  </div>
              </div>
              <div className="py-3 px-3">
                  <h5 className="title h5 mt-2">
                    HarryPotter Chapper 6
                  </h5>
                  <h6 className="price mb-3 mt-3">200$</h6>
                  </div>
            </div>
          </div>
      </Container>
    </div>
  );
};

export default WishList;
