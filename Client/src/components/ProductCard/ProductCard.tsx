import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../ProductCard/productCard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactStars from "react-rating-stars-component";
import { useDispatch } from "react-redux";
import { addToWishlist } from "../../features/product/productSlice";
const ProductCard = (props: any) => {
  const { grid, data } = props;
  console.log(data);
  let location = useLocation();
  const dispatch = useDispatch();
  const addToWish = (prodId) => {
     alert(prodId)
    dispatch(addToWishlist(prodId));
  };
  return (
    <>
      {data?.map((item: any, index: any) => {
        return (
          <div
            key={index}
            className={` ${
              location.pathname == "/product" ? `gr-${grid}` : "col-3"
            } `}
          >
            <div className="product-card position-relative">
              <div className="wishlist-icon position-absolute">
                <button
                  className="border-0 bg-transparent"
                >
                  <img 
                  src="images/wish.svg" 
                  alt="wishlist" 
                  onClick={() => addToWish(item?._id)}/>
                </button>
              </div>
              <div className="product-image">
                <img
                  src={item?.images[0].url}
                  alt="product image"
                  className="img-fluid d-block mx-auto"
                  width={160}
                />
              </div>
              <div className="product-details">
                <h6 className="brand h6">{item?.brand.title}</h6>
                <div className="d-flex justify-content-between">
                  <h5 className="product-title h5 me-3">{item?.title}</h5>
                  <h5 className="product-title h5">
                    Author: {item?.author.name}
                  </h5>
                </div>

                <ReactStars
                  value={Number(item?.totalrating)}
                  count={5}
                  size={24}
                  activeColor="#ffd700"
                  edit={false}
                />

                <p
                  className={`description ${
                    grid === 12 ? "d-block" : "d-none"
                  }`}
                  dangerouslySetInnerHTML={{ __html: item?.description }}
                ></p>
                <p className="price">{item?.price}</p>
              </div>
              <div className="action-bar position-absolute">
                <div className="d-flex flex-column gap-15">
                  <button className="border-0 bg-transparent">
                    <img src="images/add-cart.svg" alt="addcart" />
                  </button>
                  <Link to={'/product/'+item?._id } className="border-0 bg-transparent">
                    <img src="images/view.svg" alt="view" />
                  </Link>
                  <button className="border-0 bg-transparent">
                    <img src="images/prodcompare.svg" alt="compare" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProductCard;
