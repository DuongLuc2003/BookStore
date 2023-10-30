import React from 'react'
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import Meta from "../../components/Meta/Meta";
import "../../styles/auth.css";
import { Link } from "react-router-dom";
import Container from '../../components/Container/Container';
import CustomInput from '../../components/CustomInput/CustomInput';
const Signup = () => {
  return (
    <>
      <Meta title={"Register"} />
      <BreadCrumb title="Register" />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3 h3">Create Account</h3>
              <form className="d-flex flex-column gap-30">
              <CustomInput
                type="text"
                name="name"
                placeholder="Name" 
              />
              <CustomInput
                 type="email"
                 name="email"
                 placeholder="Email"
              />
              <CustomInput
                type="tel"
                name="mobile"
                placeholder="Mobile Number"
              />
              <CustomInput
                type="password"
                name="password"
                placeholder="Password"
              />
                <div className="">
                    <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                        <button className="button border-0" type="submit">Sign Up</button>
                    </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Signup