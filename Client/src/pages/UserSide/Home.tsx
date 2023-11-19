import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../../components/BLogCard/BlogCard.tsx";
import ProductCard from "../../components/ProductCard/ProductCard.tsx";
import SpecialProduct from "../../components/SpecialProduct/SpecialProduct.tsx";
import FamousProduct from "../../components/FamousProduct/FamousProduct.tsx";
import "../../styles/home.css";
import Container from "../../components/Container/Container.tsx";
import serviceData from "../../assets/data/serviceData.tsx";
import { getBlogs } from "../../features/blogs/blogSlice.tsx";
import { getProducts } from "../../features/product/productSlice.tsx";
import { useDispatch, useSelector } from "react-redux";
import ReactStars from "react-rating-stars-component";
import { addToWishlist } from "../../features/product/productSlice";
import moment from "moment";
const Home = () => {
  const [grid, setGrid] = useState(4);
  const blogState = useSelector((state: any) => state?.blog?.blogs);
  const productState = useSelector((state: any) => state?.product?.products);
  const navigate = useNavigate()
  console.log(productState);
  console.log(blogState);
  const dispatch = useDispatch();
  useEffect(() => {
    getAllBlogs();
  }, []);
  const getAllBlogs = () => {
    dispatch(getBlogs());
  };
  useEffect(() => {
    getAllProducts();
  }, []);
  const getAllProducts = () => {
    dispatch(getProducts());
  };
  const addToWish = (id: any) => {
    alert(id)
   dispatch(addToWishlist(id));
 };
  return (
    <>
      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative">
              <img
                src="images/main-banner-1.jpg"
                className="img-fluid rounded-3"
                alt="main banner"
              />
              <div className="main-banner-content position-absolute">
                <h4>SUPERCHAGED FOR PROS</h4>
                <h5>Book Smart</h5>
                <p>From $100 or $40.99/mo.</p>
                <Link to="" className="button">
                  BUY NOW
                </Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
              <div className="small-banner position-relative">
                <img
                  src="images/catbanner-01.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4 className="mb-4">SUPERCHAGED FOR PROS</h4>
                  <h5 className="mb-3">Book Smart</h5>
                  <p className="mb-3">
                    From $100 <br />
                    or $40.99/mo.
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src="images/catbanner-02.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4 className="mb-4">SUPERCHAGED FOR PROS</h4>
                  <h5 className="mb-3">Book Smart</h5>
                  <p className="mb-3">
                    From $100 <br /> or $40.99/mo.
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src="images/catbanner-03.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4 className="mb-4">SUPERCHAGED FOR PROS</h4>
                  <h5 className="mb-3">Book Smart</h5>
                  <p className="mb-3">
                    From $100 <br />
                    or $40.99/mo.
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src="images/catbanner-04.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4 className="mb-4">SUPERCHAGED FOR PROS</h4>
                  <h5 className="mb-3">Book Smart</h5>
                  <p className="mb-3">
                    From $100 <br />
                    or $40.99/mo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="gap services d-flex align-items-center justify-content-between">
              {serviceData?.map((i, j) => {
                return (
                  <div className="d-flex align-items-center gap-15" key={j}>
                    <img src={i.image} alt="services" />
                    <div>
                      <h6>{i.image}</h6>
                      <p className="mb-0">{i.tagline}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>

      <Container class1="AdsTop-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="gap services d-flex justify-content-center align-items-center gap-30">
              <div className="d-flex align-items-center">
                <img src="images/top-smartbooks1.avif" alt="" />
              </div>
              <div className="d-flex align-items-center">
                <img src="images/top-smartbooks2.avif" alt="" />
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex flex-wrap justify-content-between align-items-center">
              <div className="d-flex gap align-items-center">
                <div className="">
                  <h6>Book Smart</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div className="">
                  <h6>Book Smart</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div className="">
                  <h6>Book Smart</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div className="">
                  <h6>Book Smart</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>

              <div className="d-flex gap align-items-center">
                <div className="">
                  <h6>Book Smart</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div className="">
                  <h6>Book Smart</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div className="">
                  <h6>Book Smart</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div className="">
                  <h6>Book Smart</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
            </div>
          </div>
        </div>
      </Container> */}

      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Featured Collection</h3>
            <div className="row">
            {productState &&
                productState?.map((item: any, index: any) => {
                  if (item.tag[0].name === "featured") {
                    return (
                      <div
            key={index}
            className= {'col-3'}
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
                <p className="price">{item?.price}</p>
              </div>
              <div className="action-bar position-absolute">
                <div className="d-flex flex-column gap-15">
                  <button className="border-0 bg-transparent">
                    <img src="images/add-cart.svg" alt="addcart" />
                  </button>
                  <button className="border-0 bg-transparent">
                    <img src="images/view.svg" alt="view" onClick={() => navigate('/product/'+item?._id)}/>
                  </button>
                  <button className="border-0 bg-transparent">
                    <img src="images/prodcompare.svg" alt="compare" />
                  </button>
                </div>
              </div>
            </div>
          </div>
                    );
                  }
                })}
            </div>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>

      <Container class1="famous-wrapper py-5 home-wrapper-2 bg-white">
        <div className="col-12">
          <h3 className="section-heading">Famous Collection</h3>
        </div>
        <div className="row">
          <FamousProduct />
          <FamousProduct />
          <FamousProduct />
          <FamousProduct />
        </div>
      </Container>

      <Container class1="special-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="section-heading">Special Products</div>
            <div className="row">
              {productState &&
                productState?.map((item: any, index: any) => {
                  if (item.tag[0].name === "special") {
                    return (
                      <SpecialProduct
                        id={item?._id}
                        key={index}
                        title={item?.title}
                        brand={item?.brand.title}
                        totalrating={item?.totalrating.toString()}
                        price={item?.price}
                        sold={item?.sold}
                        quantity={item?.quantity}
                        images={item?.images[0].url}
                      />
                    );
                  }
                })}
            </div>
          </div>
        </div>
      </Container>

      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
        </div>
        <div className="row">
        {productState &&
                productState?.map((item: any, index: any) => {
                  if (item.tag[0].name === "popular") {
                    return (
                      <div
            key={index}
            className= {'col-3'}
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
                <p className="price">{item?.price}</p>
              </div>
              <div className="action-bar position-absolute">
                <div className="d-flex flex-column gap-15">
                  <button className="border-0 bg-transparent">
                    <img src="images/add-cart.svg" alt="addcart" />
                  </button>
                  <button className="border-0 bg-transparent">
                    <img src="images/view.svg" alt="view" onClick={() => navigate('/product/'+item?._id)} />
                  </button>
                  <button className="border-0 bg-transparent">
                    <img src="images/prodcompare.svg" alt="compare" />
                  </button>
                </div>
              </div>
            </div>
          </div>
                    );
                  }
                })}
        </div>
      </Container>

      <Container class1="marque-wrapper">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper bg-white p-3 card-wrapper gap-10">
              <Marquee className="d-flex">
                <div className="mx-4 w-25">
                  <img src="images/brand-01.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-01.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-02.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-03.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-04.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-05.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-06.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-07.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-08.png" alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="blog-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Latest Blogs</h3>
          </div>
        </div>
        <div className="row">
          {blogState &&
            blogState?.map((item: any, index: any) => {
              if (index < 4) {
                return (
                  <div className="col-3 mb-0" key={index}>
                    <BlogCard
                      id={item?._id}
                      title={item?.title}
                      description={item?.description}
                      image={item?.images[0]?.url}
                      date={moment(item?.createdAt).format(
                        "MMMM Do YYYY, h:mm a"
                      )}
                    />
                  </div>
                );
              }
            })}
        </div>
      </Container>
    </>
  );
};

export default Home;
