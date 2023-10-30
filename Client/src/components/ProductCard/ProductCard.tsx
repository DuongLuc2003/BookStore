import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../ProductCard/productCard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactStars from "react-rating-stars-component";
const ProductCard = (props: any) => {
  const { grid } = props;
  let location = useLocation();
  return (
    <div
      className={` ${
        location.pathname == "/product" ? `gr-${grid}` : "col-3"
      } `}
    >
      <Link
        to={`${
          location.pathname == "/"
            ? "/product/:id"
            : location.pathname == "/product/:id"
            ? "/product/1"
            : ":id"
        }`}
        className="product-card position-relative"
      >
        <div className="wishlist-icon position-absolute">
          <button className="border-0 bg-transparent">
            <img src="images/wish.svg" alt="wishlist" />
          </button>
        </div>
        <div className="product-image">
          <img
            src="images/book1.webp"
            alt="product image"
            className="img-fluid"
          />
        </div>
        <div className="product-details">
          <h6 className="brand h6">Havels</h6>
          <h5 className="product-title h5">
            Kids headphone bulk 10 pack multi colored for students
          </h5>
          <ReactStars
            value={3}
            count={5}
            size={24}
            activeColor="#ffd700"
            edit={false}
          />
          <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="price">$100.00</p>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-15">
            <button className="border-0 bg-transparent">
              <img src="images/add-cart.svg" alt="addcart" />
            </button>
            <button className="border-0 bg-transparent">
              <img src="images/view.svg" alt="view" />
            </button>
            <button className="border-0 bg-transparent">
              <img src="images/prodcompare.svg" alt="compare" />
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
