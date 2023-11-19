import React , {useEffect}from 'react'
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import Meta from "../../components/Meta/Meta";
import "../../styles/auth.css";
import { Link , useNavigate} from "react-router-dom";
import Container from '../../components/Container/Container';
import CustomInput from '../../components/CustomInput/CustomInput';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch , useSelector } from 'react-redux';
import { register } from '../../features/auth/authSlice';

const signUpSchema = yup.object({
  firstname: yup.string().required('Vui lòng nhập Họ'),
  lastname: yup.string().required('Vui lòng nhập Tên'),
  mobile: yup.string().required('Vui lòng nhập số điện thoại'),
  email: yup.string().email('Vui lòng nhập đúng định dạng email').required('Vui lòng nhập email'),
  password: yup.string().required('Vui lòng nhập password'),
});

const Signup = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      firstname:'',
      lastname:'',
      mobile:'',
      email: '',
      password:''
    },
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      dispatch(register(values))
      // alert(JSON.stringify(values, null, 2));
    },
  });
  const {user,isLoading,isError,isSuccess,message} = useSelector((state) => state.auth)
  useEffect(() => {
     if(!user == null || isSuccess) {
          navigate('/login')
     }
  },[user,isLoading,isError,isSuccess,message])
  return (
    <>
      <Meta title={"Register"} />
      <BreadCrumb title="Register" />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3 h3">Create Account</h3>
              <form className="d-flex flex-column gap-10" action='' onSubmit={formik.handleSubmit}>
              <CustomInput
                type="text"
                name="firstname"
                placeholder="First Name"
                label="First Name"
                onCh={formik.handleChange("firstname")}
                onBl={formik.handleChange("firstname")}
                val={formik.values.firstname}
              />
               <div className="error">
                {formik.touched.firstname && formik.errors.firstname ? (
                  <div className="danger">{formik.errors.firstname}</div>
                ) : null}
                </div>
               <CustomInput
                type="text"
                name="lastname"
                placeholder="Last Name"
                label="Last Name"
                onCh={formik.handleChange("lastname")}
                onBl={formik.handleChange("lastname")}
                val={formik.values.lastname}
              />
              <div className="error">
                {formik.touched.lastname && formik.errors.lastname ? (
                  <div className="danger">{formik.errors.lastname}</div>
                ) : null}
                </div>
              <CustomInput
                 type="email"
                 name="email"
                 placeholder="Email"
                 label="Email..."
                 onCh={formik.handleChange("email")}
                 onBl={formik.handleChange("email")}
                 val={formik.values.email}
              />
              <div className="error">
                {formik.touched.email && formik.errors.email ? (
                  <div className="danger">{formik.errors.email}</div>
                ) : null}
                </div>
              <CustomInput
                type="tel"
                name="mobile"
                placeholder="Mobile Number"
                label="Mobile..."
                onCh={formik.handleChange("mobile")}
                onBl={formik.handleChange("mobile")}
                val={formik.values.mobile}
              />
              <div className="error">
                {formik.touched.mobile && formik.errors.mobile ? (
                  <div className="danger">{formik.errors.mobile}</div>
                ) : null}
                </div>
              <CustomInput
                type="password"
                name="password"
                placeholder="Password"
                label="Password..."
                onCh={formik.handleChange("password")}
                onBl={formik.handleChange("password")}
                val={formik.values.password}
              />
              <div className="error">
                {formik.touched.password && formik.errors.password ? (
                  <div className="danger">{formik.errors.password}</div>
                ) : null}
                </div>
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