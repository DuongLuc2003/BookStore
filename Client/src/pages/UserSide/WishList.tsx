import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import Meta from "../../components/Meta/Meta";
import "../../styles/wishlist.css";
import Container from "../../components/Container/Container";
import { getUserProductWishlist } from "../../features/auth/authSlice";
import { addToWishlist } from "../../features/product/productSlice";
const WishList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getWishlistProducts();
  }, []);
  const getWishlistProducts = () => {
    dispatch(getUserProductWishlist());
  };
  const wishlistState = useSelector(
    (state: any) => state?.auth?.wishlist?.wishlist
  );
  const removeFromWishlist = (id) => {
    dispatch(addToWishlist(id))
    setTimeout(() => {
      dispatch(getUserProductWishlist());
    },500)
  }
  return (
    <div>
      <Meta title={"Book Store"} />
      <BreadCrumb title="WishList" />
      <Container class1="wishlist-wrapper home-wrapper-2 py-5">
        <div className="row">
          {
            wishlistState?.length === 0 && <div className="text-center fs-3">
                   Không có sản phẩm nào !
            </div>
          }
          {wishlistState?.map((item, index) => {
            return (
              <div className="col-3">
                <div className="wishlist-card position-relative">
                  <img
                    onClick={() => {
                     removeFromWishlist(item?._id)
                    }}
                    src="images/cross.svg"
                    alt="cross"
                    className="postion-absolute cross float-end img-fluid"
                  />
                  <div className="wishlist-card-image d-flex justify-content-center  ">
                    <img
                      src={
                        item?.images[0].url
                          ? item?.images[0].url
                          : "images/harypotter.webp"
                      }
                      alt="harypotter"
                      className="img-fluid d-block mx-auto"
                      width={160}
                    />
                  </div>
                </div>
                <div className="py-3 px-3">
                  <h5 className="title h5 mt-2">{item?.title}</h5>
                  <h6 className="price mb-3 mt-3">{item?.price}</h6>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default WishList;
