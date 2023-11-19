import React from 'react'
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import Meta from "../../components/Meta/Meta";
import "../../styles/auth.css";
import { Link, useLocation, useNavigate } from "react-router-dom"
import Container from '../../components/Container/Container';
import CustomInput from '../../components/CustomInput/CustomInput';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch , useSelector } from 'react-redux';
import { resetPassword } from '../../features/auth/authSlice';

const resetpasswordSchema = yup.object({
  password: yup.string().required('Vui lòng nhập password'),
});

const ResetPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      password: ''
    },
    validationSchema: resetpasswordSchema,
    onSubmit: (values) => {
     dispatch(resetPassword({token:getToken,password:values.password}))
     navigate('/login')
    },
  });
  const location = useLocation()
  const getToken = location.pathname.split("/")[2]
  console.log(getToken)
  return (
    <>
      <Meta title={"ResetPassword"} />
      <BreadCrumb title="ResetPassword" />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3 h3">Reset Password</h3>
              <form className="d-flex flex-column gap-10" onSubmit={formik.handleSubmit}>
                <CustomInput
                 type="password"
                 name="password"
                 placeholder="Password"
                 label="Enter Your Password"
                 onCh={formik.handleChange("password")}
                 onBl={formik.handleChange("password")}
                 val={formik.values.password}
                />
                <div className="error text-center">
                {formik.touched.password && formik.errors.password ? (
                  <div className="danger">{formik.errors.password}</div>
                ) : null}
                </div>
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