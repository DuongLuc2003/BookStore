import React from 'react'
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import Meta from "../../components/Meta/Meta";
import "../../styles/auth.css";
import { Link, Navigate, useNavigate } from "react-router-dom"
import Container from '../../components/Container/Container';
import CustomInput from '../../components/CustomInput/CustomInput';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch , useSelector } from 'react-redux';
import { forgotPassword } from '../../features/auth/authSlice';
const forgotPassSchema = yup.object({
  email: yup.string().email('Vui lòng nhập đúng định dạng email').required('Vui lòng nhập email'),
});
const ForgotPass = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: forgotPassSchema,
    onSubmit: (values) => {
     dispatch(forgotPassword(values))
    //  navigate('/')
    },
  });
  return (
    <>
      <Meta title={"ForgotPassword"} />
      <BreadCrumb title="Forgotpassword" />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3 h3">Enter Your Email</h3>
              <p className='text-center mt-2 mb-3'>
                We will send you an email to reset your password
              </p>
              <form className="d-flex flex-column" onSubmit={formik.handleSubmit}>
                <CustomInput
                type="email"
                name="email"
                placeholder="Email"
                label="Enter Your Email"
                onCh={formik.handleChange("email")}
                onBl={formik.handleChange("email")}
                val={formik.values.email}
                />
                <div className="error text-center mt-3">
                {formik.touched.email && formik.errors.email ? (
                  <div className="danger">{formik.errors.email}</div>
                ) : null}
                </div>
                <div className="">
                    <div className="mt-3 d-flex justify-content-center flex-column gap-15 align-items-center">
                        <button className="button border-0" type='submit'>Submit</button>
                        <Link to='/login'>Cancle</Link>
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

export default ForgotPass