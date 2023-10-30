import React from "react";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import Meta from "../../components/Meta/Meta";
import "../../styles/singleBlog.css";
import { Link } from "react-router-dom";
import {BsArrowLeft}  from 'react-icons/bs'
import Container from "../../components/Container/Container";
const SingleBlog = () => {
  return (
    <>
      <Meta title={"Dynamic Blog Name"} />
      <BreadCrumb title="Dynamic Blog Name" />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link to='/blogs' className="d-flex align-items-center gap-10">
                    <BsArrowLeft className='fs-4'/>
                    Go back to BLogs
                </Link>
                <h3 className="title">
                  A Beautiful Sunday Morning Resaissance
                </h3>
                <img
                  src="images/blog-1.jpg"
                  alt="blog"
                  className="img-fluid w-100 my-4"
                />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus hendrerit magna nec sodales pharetra. Nam vel nibh mi.
                  Morbi mollis finibus felis a imperdiet. Mauris posuere tempus
                  iaculis. Donec pretium nisl augue, et mattis nisi lobortis ac.
                  Orci varius natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Donec egestas varius nulla scelerisque
                  convallis. Mauris eros metus, interdum sed arcu vitae, ornare
                  porta lorem. Nulla neque mauris, volutpat vel scelerisque non,
                  finibus eu diam. Pellentesque consectetur ornare tortor.
                  Mauris eu blandit nulla. Pellentesque nunc ipsum, placerat ac
                  ex id, convallis cursus est. Donec quis iaculis augue. Ut
                  mattis arcu ac aliquet imperdiet. Curabitur accumsan est ac
                  suscipit rhoncus.
                </p>
              </div>
            </div>
          </div>
        
      </Container>
    </>
  );
};

export default SingleBlog;
