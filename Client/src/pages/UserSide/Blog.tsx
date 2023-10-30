import BreadCrumb from '../../components/BreadCrumb/BreadCrumb'
import Meta from '../../components/Meta/Meta'
import React from 'react'
import BlogCard from '../../components/BLogCard/BlogCard'
import Container from '../../components/Container/Container'
const Blog = () => {
  return (
    <>
        <Meta title={'BookStore'}/>
        <BreadCrumb title={'Blogs'}/>
        <Container class1="blog-wrapper home-wrapper-2 py-5">
             <div className="container-xxl">
                <div className="row">
                    <div className="col-3">
                    <div className="filter-card mb-3">
                        <h3 className="filter-title">
                            Shop By Categories 
                        <div>
                            <ul className='ps-0 mt-3'>
                                <li>Featured Book</li>
                                <li>Famous Book</li>
                                <li>Special Book</li>
                                <li>Beseller Book</li>
                            </ul>
                        </div>
                        </h3>
                       </div>
                    </div>
                    <div className="col-9">
                        <div className="row">
                        <div className="col-6 mb-3">
                             <BlogCard/>
                        </div>
                        <div className="col-6 mb-3">
                             <BlogCard/>
                        </div>
                        <div className="col-6 mb-3">
                             <BlogCard/>
                        </div>
                        <div className="col-6 mb-3">
                             <BlogCard/>
                        </div>
                        </div>
                        
                    </div>
                </div>
             </div>
        </Container>
    </>
  )
}

export default Blog