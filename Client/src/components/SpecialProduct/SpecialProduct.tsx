import React from 'react'
import '../SpecialProduct/specialProduct.css'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';
const SpecialProduct = (props:any) => {
  const {title ,brand , totalrating , price , sold , quantity , images, id} = props
  
  return (
    <div className='col-6 mb-3'>
    <div className="special-product-card">
        <div className="d-flex justify-content-between gap-15">
            <div className="">
                <img src={images} alt="watch" className='img-fluid' />
            </div>
        <div className="special-product-content">
             <h5 className='brand h5'>{brand}</h5>
             <h6 className='title h6'>
             {title}
             </h6>
             <ReactStars
    value={parseInt(totalrating, 10)}
    count={5} 
    size={24} 
    activeColor='#ffd700'
    edit={false}
/>

            <p className="price">
                <span className="red-p">${price}</span> &nbsp;
                {/* <strike >$200</strike> */}
            </p>
            <div className="discount-till d-flex align-items-center gap-10">
                <p className='mb-0'>
                    <b>5</b>&nbsp;Days
                </p>
                <div className="d-flex gap-10 align-items-center">
                 <span className='badge rounded-circle p-3 bg-danger'>1</span>:
                 <span className='badge rounded-circle p-3 bg-danger'>1</span>:
                 <span className='badge rounded-circle p-3 bg-danger'>1</span>
                </div>
            </div>
            <div className="prod-count mt-3">
                    <p>Products: {quantity} </p>
                    <div className="progress">
                    <div 
                         className="progress-bar" 
                         role="progressbar" 
                         style={{width:"25%"}}
                         aria-valuenow={quantity / quantity + sold * 100} 
                         aria-valuemin={quantity} 
                         aria-valuemax={sold + quantity}
                         ></div>
                </div>
                </div>
             <Link className='button mt-3' to={'/product/'+ id}>View</Link>
        </div>
        </div>  
    </div>
    </div>
  )
}

export default SpecialProduct