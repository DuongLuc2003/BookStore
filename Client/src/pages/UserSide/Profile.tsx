import React from "react";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb.tsx";
import Meta from "../../components/Meta/Meta.tsx";
import Container from "../../components/Container/Container.tsx";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../features/auth/authSlice.tsx";
const profileSchema = yup.object({
  firstname: yup.string().required("Vui lòng nhập Họ"),
  lastname: yup.string().required("Vui lòng nhập Tên"),
  mobile: yup.string().required("Vui lòng nhập số điện thoại"),
  email: yup
    .string()
    .email("Vui lòng nhập đúng định dạng email")
    .required("Vui lòng nhập email"),
});
const Profile = () => {
  const dispatch = useDispatch();
  const userState = useSelector(state => state?.auth.user);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      firstname: userState?.firstname,
      lastname: userState?.lastname,
      mobile: userState?.mobile,
      email: userState?.email,
    },
    validationSchema: profileSchema,
    onSubmit: (values) => {
      dispatch(updateUser(values))
    },
  });
  return (
    <>
      <Meta title={"BookStore"} />
      <BreadCrumb title="Profile" />
      <Container class1="cart-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="row-12 fw-bolder fs-4 text-center mb-4">
            Update Profile
          </div>
          <div className="col-12">
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-3">
                <label htmlFor="firstname" className="form-label">
                  FirstName
                </label>
                <input
                  type="firstname"
                  className="form-control"
                  id="firstname"
                  name="firstname"
                  value={formik.values.firstname}
                  onChange={formik.handleChange('firstname')}
                  onBlur={formik.handleChange('firstname')}
                />
                <div className="error">
                {formik.touched.firstname && formik.errors.firstname ? (
                  <div className="danger">{formik.errors.firstname}</div>
                ) : null}
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="lastname" className="form-label">
                  LastName
                </label>
                <input
                  type="lastname"
                  className="form-control"
                  id="lastname"
                  name="lastname"
                  value={formik.values.lastname}
                  onChange={formik.handleChange('lastname')}
                  onBlur={formik.handleChange('lastname')}
                /><div className="error">
                {formik.touched.lastname && formik.errors.lastname ? (
                  <div className="danger">{formik.errors.lastname}</div>
                ) : null}
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange('email')}
                  onBlur={formik.handleChange('email')}
                />
                <div className="error">
                {formik.touched.email && formik.errors.email ? (
                  <div className="danger">{formik.errors.email}</div>
                ) : null}
                </div>
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="mobile" className="form-label">
                  Mobile
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="mobile"
                  name="mobile"
                  value={formik.values.mobile}
                  onChange={formik.handleChange('mobile')}
                  onBlur={formik.handleChange('mobile')}
                />
                <div className="error">
                {formik.touched.mobile && formik.errors.mobile ? (
                  <div className="danger">{formik.errors.mobile}</div>
                ) : null}
                </div>
              </div>
              <div className="text-center">
              <button type="submit" className="btn button mt-3">
                Save
              </button>
              </div>
              
            </form>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Profile;
