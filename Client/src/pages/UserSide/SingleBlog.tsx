import React, { useEffect } from "react";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import Meta from "../../components/Meta/Meta";
import "../../styles/singleBlog.css";
import { Link, useLocation } from "react-router-dom";
import {BsArrowLeft}  from 'react-icons/bs'
import Container from "../../components/Container/Container";
import { useDispatch , useSelector } from "react-redux";
import { getBlog } from "../../features/blogs/blogSlice";

const SingleBlog = () => {
  const blogState = useSelector((state: any) => state?.blog?.singleBlog);
  const location = useLocation();
  const getBlogId = location.pathname.split('/')[2]
  const dispatch = useDispatch()
  useEffect(() => {
    getAblog();
  },[])
  const getAblog = () => {
    dispatch(getBlog(getBlogId))
  }
  return (
    <>
      <Meta title={blogState?.title} />
      <BreadCrumb title={blogState?.title} />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link to='/blogs' className="d-flex align-items-center gap-10">
                    <BsArrowLeft className='fs-4'/>
                    Go back to BLogs
                </Link>
                <h3 className="title">
                  {blogState?.title}
                </h3>
                <img
                  src={blogState?.images[0]?.url ? blogState?.images[0]?.url : 'images/blog-1.jpg'}
                  alt="blog"
                  className="img-fluid w-100 my-4"
                />
                <p className='desc'dangerouslySetInnerHTML={{ __html: blogState?.description }} >
            </p>
              </div>
            </div>
          </div>
        
      </Container>
    </>
  );
};

export default SingleBlog;
