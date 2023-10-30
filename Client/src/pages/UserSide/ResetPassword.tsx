import React from 'react'
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import Meta from "../../components/Meta/Meta";
import "../../styles/auth.css";
import { Link } from "react-router-dom"
import Container from '../../components/Container/Container';
import CustomInput from '../../components/CustomInput/CustomInput';
const ResetPassword = () => {
  return (
    <>
      <Meta title={"ResetPassword"} />
      <BreadCrumb title="ResetPassword" />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3 h3">Reset Password</h3>
              <form className="d-flex flex-column gap-30">
                <CustomInput
                 type="password"
                 name="password"
                 placeholder="Password"
                />
                <CustomInput
                    type="password"
                    name="Confirmpassword"
                    placeholder="Confirm Password"
                />
                <div className="">
                    <div className="mt-3 d-flex justify-content-center flex-column gap-15 align-items-center">
                        <button className="button border-0" type='submit'>Ok</button>
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

export default ResetPassword