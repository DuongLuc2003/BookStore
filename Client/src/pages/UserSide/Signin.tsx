import React, { useEffect } from "react";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import Meta from "../../components/Meta/Meta";
import "../../styles/auth.css";
import { Link, useNavigate } from "react-router-dom";
import Container from "../../components/Container/Container";
import CustomInput from "../../components/CustomInput/CustomInput";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch,useSelector} from "react-redux";
import { login } from "../../features/auth/authSlice";
const Signin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let userSchema = Yup.object().shape({
    email: Yup.string()
      .email("Vui lòng nhập đúng định dạng email")
      .required("Vui Lòng nhập email"),
    password: Yup.string().required("Vui Lòng nhập mật khẩu"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: userSchema,
    onSubmit: (values) => {
      dispatch(login(values))
      alert(JSON.stringify(values, null, 2));
    },
  });
  const {user,isLoading,isError,isSuccess,message} = useSelector((state) => state.auth)
  useEffect(() => {
     if(!user == null || isSuccess) {
          navigate('/home')
     }
     else {
        alert("Not Found")
     }
  },[user,isLoading,isError,isSuccess,message])
  return (
    <>
      <Meta title={"Login"} />
      <BreadCrumb title="Login" />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3 h3">Login</h3>
              <form
                className="d-flex flex-column gap-10"
                onSubmit={formik.handleSubmit}
              >
                <CustomInput
                  type="text"
                  name="email"
                  label="Email Address"
                  onCh={formik.handleChange("email")}
                  onBl={formik.handleChange("email")}
                  val={formik.values.email}
                  id="email"
                />
                <div className="error">
                {formik.touched.email && formik.errors.email ? (
                  <div className="danger">{formik.errors.email}</div>
                ) : null}
                </div>
                <CustomInput
                  type="password"
                  label="Password"
                  name="password"
                  id="pass"
                  val={formik.values.password}
                  onCh={formik.handleChange("password")}
                  onBl={formik.handleChange("password")}
                />
                <div className="error">
                {formik.touched.password && formik.errors.password ? (
                  <div className="">{formik.errors.password}</div>
                ) : null}
                </div>
                <div className="">
                  <Link to="/forgot-password">Forgot Password?</Link>
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button className="button border-0" type="submit">
                      Login
                    </button>
                    <Link to="/signup" className="button signup">
                      SignUp
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Signin;
