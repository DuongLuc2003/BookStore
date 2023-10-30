import React from 'react'
import '../BLogCard/blogCard.css'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const BlogCard = () => {
  return (
    
       <div className="blog-card">
           <div className="card-image">
               <img src="images/blog-1.jpg" alt="Blog" className='img-fuild w-100'/>
           </div>
           <div className="blog-content">
            <p className='date'>21 Nov , 2023</p>
            <h5 className='title h5' >
                A beautiful sunday morning renaisance
            </h5>
            <p className='desc'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Link to='/blog:id' className='button'>Read More</Link>
           </div>
       </div>
  )
}

export default BlogCard