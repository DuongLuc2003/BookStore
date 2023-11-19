import React, { useEffect, useState } from "react";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import Meta from "../../components/Meta/Meta";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import ReactImageZoom from "react-image-zoom";
import { GoGitCompare } from "react-icons/go";
import { AiOutlineHeart } from "react-icons/ai";
import ReactStars from "react-rating-stars-component";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/simpleProduct.css";
import Container from "../../components/Container/Container";
import { useDispatch, useSelector } from "react-redux";
import { addRating, getAProduct , getProducts} from "../../features/product/productSlice";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { toast } from "react-toastify";
import { addProToCart, getUserCart } from "../../features/auth/authSlice";
const SingleProduct = () => {
  const location = useLocation();
  const navigate = useNavigate()
  const getProductById = location.pathname.split("/")[2];
  const [alreadyAdded,setAlreadyAdded] = useState(false)
  const dispatch = useDispatch();
  const productState = useSelector((state) => state?.product?.singleproduct);
  const productsState = useSelector((state) => state?.product?.products);
  const [quantity,setQuantity] = useState(1)
  const cartState = useSelector((state) => state?.auth?.cart)
  console.log(quantity)
  console.log(productState);

  useEffect(() => {
    dispatch(getAProduct(getProductById));
    dispatch(getUserCart())
    dispatch(getProducts())
  }, []);
  useEffect(() => {
    for (let index = 0; index < cartState?.length; index++) {
        if(getProductById === cartState[index]?.productId?._id) {
          setAlreadyAdded(true)
        }
    }
  })
  const uploadCart = () => {
    if (quantity == 0) {
      toast.error('Vui lòng nhập số lượng sách')
      return false
    } else {
      dispatch(addProToCart({productId:productState?._id, quantity , price:productState?.price, author:productState?.author}))
      navigate('/cart')
    }
  };
  const props = {
    width: 400,
    height: 500,
    zoomWidth: 500,
    img: productState?.images[0]?.url
      ? productState?.images[0]?.url
      : "https://thegioidienanh.vn/stores/news_dataimages/anhvu/042021/02/10/5713_1._Bia_sach_Harry_Potter_va_BYo_bYi_tY_thYn.jpg?rt=20210402105911",
  };
  const [orderedProduct, setorderedProduct] = useState(true);
  const [popularProduct,setPopularProduct] = useState([])
  useEffect(() => {
    let data = []
    for (let index = 0; index < productsState.length; index++) {
        const element = productsState[index];
        if(element.tag[0].name === 'popular'){
           data.push(element)
        }
        setPopularProduct(data)
    }
  },[productState])
  console.log(popularProduct)
  const [star,setStar] = useState(null)
  const [comment,setComment] = useState(null)
  const addRatingToProduct = () => {
    if(star === null) {
      toast.error('Vui lòng đánh giá sản phẩm')
      return false
    } else if (comment === null) {
      toast.error('Vui lòng viết review về sản phẩm')
      return false
    } else {
      dispatch(addRating({star:star, comment:comment, prodId:getProductById}))
      setTimeout(() => {
        dispatch(getAProduct(getProductById));
      },100)
    }
    return false
  }
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
                  src={productState?.images[0].url}
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="other-product-images d-flex flex-wrap gap-15">
              {productState?.images.map((item: any, index: any) => {
                return (
                  <div>
                    <img src={item?.url} alt="" className="img-fluid" />
                  </div>
                );
              })}
              {/* <div>
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
              </div> */}
            </div>
          </div>
          <div className="col-6">
            <div className="main-product-details">
              <div className="title-product ">
                <h3 className="title">${productState?.title}</h3>
              </div>
              <div className="title-product py-3">
                <p className="price">{productState?.price}</p>
                <div className="d-flex align-items-center gap-10">
                  <ReactStars
                    value={
                      productState?.totalrating
                        ? parseFloat(productState.totalrating)
                        : 0
                    }
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
                  <p className="product-data">{productState?.brand?.title}</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-3">
                  <h3 className="product-heading h3">Category: </h3>
                  <p className="product-data">{productState?.category?.title}</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-3">
                  <h3 className="product-heading h3">Tags: </h3>
                  {productState?.tag && productState.tag.length > 0 ? (
                    <p className="product-data">{productState.tag[0].name}</p>
                  ) : (
                    <p className="product-data">No Tags</p>
                  )}
                </div>
                <div className="d-flex gap-10 align-items-center my-3">
                  <h3 className="product-heading h3">Availablity: </h3>
                  <p className="product-data">{productState?.sold}</p>
                </div>
                {
                  alreadyAdded === false && <>
                  <div className="d-flex gap-10 align-items-center my-3">
                  <h3 className="product-heading h3">Auhtor: </h3>
                  <p className="product-data">{productState?.author?.name}</p>
                </div>
                  </>
                }
                <div className="d-flex gap-15 mt-2 mb-3 flex-row align-items-center">
                 {
                  alreadyAdded === false && <>
                   <h3 className="product-heading h3">Quanlity</h3>
                  <div className="">
                    <input
                      type="number"
                      className="foem-control"
                      min={1}
                      max={10}
                      style={{ width: "50px" }}
                      id=""
                      onChange={(e)=>setQuantity(e.target.value)}
                      value={quantity}
                    />
                  </div>
                  </>
                 }
                  <div className={alreadyAdded ? "ms-0" : "ms-5" + 'd-flex align-items-center gap-30 ms-5' } >
                    <button
                      className="button border-0 "
                      // data-bs-toggle="modal"
                      // data-bs-target="#staticBackdrop"
                      type="button"
                      onClick={()=>{alreadyAdded ? navigate('/cart') : uploadCart(productState?._id)}}
                    >
                      { alreadyAdded ? "Go to Cart" :"Add to Cart"}
                    </button>
                    {/* <button className="button signup">Buy It Now</button> */}
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center gap-15 mt-3 mb-3">
                <div className="">
                  <a href="" className="text-dark">
                    <GoGitCompare className="fs-5 me-2" />
                    Add to Compare
                  </a>
                </div>
                <div className="">
                  <a href="" className="text-dark">
                    <AiOutlineHeart className="fs-5 me-2" />
                    Add to Wishlist
                  </a>
                </div>
              </div>
              <div className=" gap-10 align-items-center my-2 shipping-title">
                <h3 className="product-heading mb-2">Shipping & Return: </h3>
                <p className="product-data">
                  Free shipping and returns available on all orders! <br /> We
                  shipping all Us domestic orders within{" "}
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
              <p className="">{productState?.description}</p>
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
                    <a href="" className="text-dark text-decoration-underline ">
                      Write a Review
                    </a>
                  </div>
                )}
              </div>

              <div className="review-form py-4" id="review">
                <h4 className="mb-2 fw-bolder">Write a Review</h4>
                
                  <div className="">
                    <ReactStars
                      value={3}
                      count={5}
                      size={14}
                      activeColor="#ffd700"
                      edit={true}
                      onChange={(e) => {
                          setStar(e)
                      }}
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
                      onChange={(e)=>{
                          setComment(e.target.value)
                      }}
                    ></textarea>
                  </div>
                  <div className="d-flex justify-content-end mt-3">
                    <button className="button bolder-0" type="button" onClick={addRatingToProduct}>Submit Review</button>
                  </div>
                
              </div>

              <div className="reviews mt-4">
                {
                  productState && productState.ratings?.map((item:any,index:any) => {
                    return (
                      <div className="review" key={index}>
                  <div className="d-flex gap-10 align-items-center">
                    <h6 className="h6 mb-0 ">DuongLuc</h6>
                    <ReactStars
                      value={item?.star}
                      count={5}
                      size={24}
                      activeColor="#ffd700"
                      edit={false}
                    />
                  </div>
                  <p className="mt-3">
                   {item?.comment}
                  </p>
                </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading fw-bolder">Our Popular Products</h3>
          </div>
        </div>
        <div className="row">
          <ProductCard data={popularProduct}/>
        </div>
      </Container>
    </>
  );
};

export default SingleProduct;
