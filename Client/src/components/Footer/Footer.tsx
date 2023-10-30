import React from 'react'
import { Link } from 'react-router-dom'
import '../Footer/footer.css'
import {BsYoutube,BsFacebook,BsTiktok,BsInstagram} from 'react-icons/bs'
const Footer = () => {
  return (
    <>
    <footer className='py-4'>
      <div className="container-xxl">
        <div className="row align-items-center">
          <div className="col-5">
            <div className="footer-top-data d-flex gap-30 align-items-center">
              <img src="images/newsletter.png" alt="newsletter" />
              <h2 className='mb-0 text-white h2'>Sign Up for Newsletter</h2>
            </div>
          </div>
          <div className="col-7">
          <div className="input-group">
              <input
              type='text'
              className='form-control py-1'
              placeholder="Your Email Address"
              aria-label="Your Email Address"
              aria-describedby='basic-addon2' 
              />
              <span className='input-group-text p-2' id="basic-addon2">
                Subscrice
                </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <footer className='py-4'>
      <div className="container-xxl">
      <div className="row">
        <div className="col-4">
          <h4 className='text-white mb-4 h4'>Contact Us</h4>
          <div className='footer-links d-flex flex-column'>
            <address className='text-white fs-6'>
               Hno: 277 Xuan Do Long Bien, <br/> HaNoi, VietNam <br/>
               PinCode: 70000
            </address>
            <a href='tel:+84 77771467'
               className='mt-3 d-block mb-2 text-white'
               >
              +84 77771467
              </a>
            <a href='mailto:lucck131103@gmail.com'
               className='mt-2 d-block mb-0 text-white'
               >
              lucck131103@gmail.com
              </a>
            <div className="social_icons text-white d-flex align-items-center gap-30 mt-4">
              <a href='' className='fs-4'>
                <BsFacebook/>
              </a>
              <a href='' className='fs-4'>
                <BsInstagram/>
              </a>
              <a href='' className='fs-4'>
                <BsTiktok/>
              </a>
              <a href='' className='fs-4'>
                <BsYoutube/>
              </a>
            </div>
          </div>
        </div>
        <div className="col-3">
          <h4 className='text-white mb-4 h4'>Infomation</h4>
          <div className='footer-links d-flex flex-column'>
            <Link className='text-white py-2 mb-1' to='/privacy-policy'>Privacy Policy</Link>
            <Link className='text-white py-2 mb-1' to='/refund-policy'>Refund Policy</Link>
            <Link className='text-white py-2 mb-1' to='/shipping-policy'>Shipping Policy</Link>
            <Link className='text-white py-2 mb-1' to='/term-contions'>Terms Of Service</Link>
            <Link className='text-white py-2 mb-1' to='/blogs'>Blogs</Link>
          </div>
        </div>
        <div className="col-3">
          <h4 className='text-white mb-4 h4'>Account</h4>
          <div className='footer-links d-flex flex-column'>
            <Link className='text-white py-2 mb-1' to=''>Search</Link>
            <Link className='text-white py-2 mb-1' to=''>About Us</Link>
            <Link className='text-white py-2 mb-1' to=''>Faq</Link>
            <Link className='text-white py-2 mb-1' to=''>Contact</Link>
            <Link className='text-white py-2 mb-1' to=''>Size Chart</Link>
          </div>
        </div>
        <div className="col-2">
          <h4 className='text-white mb-4 h4'>Quick Links</h4>
          <div className='footer-links d-flex flex-column'>
            <Link className='text-white py-2 mb-1' to=''>Laptops</Link>
            <Link className='text-white py-2 mb-1' to=''>Headphone</Link>
            <Link className='text-white py-2 mb-1' to=''>Tablets</Link>
            <Link className='text-white py-2 mb-1' to=''>Watch</Link>
          </div>
        </div>
      </div>
      </div>
    </footer>
    <footer className='py-4'>
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <p className='text-center mb-0 text-white'>
              &copy; {new Date().getFullYear()}; Powered by Developer's Corner
            </p>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer