import React from 'react'
import '../BLogCard/blogCard.css'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const BlogCard = (props:any) => {
  const {id , title , description , date , image} = props;
  return (
    
       <div className="blog-card">
           <div className="card-image">
               <img src={image ? image : "images/blog-1.jpg"} 
                    alt="Blog" 
                    className='img-fuild w-100'/>
           </div>
           <div className="blog-content">
            <p className='date'>{date}</p>
            <h5 className='title h5' >
                {title}
            </h5>
            <p className='desc'dangerouslySetInnerHTML={{ __html: description?.substr(0,70) + '...' }} >
            </p>
            <Link to={'/blog/'+id} className='button'>Read More</Link>
           </div>
       </div>
  )
}

export default BlogCard