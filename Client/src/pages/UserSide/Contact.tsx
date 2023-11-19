import React from "react";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import Meta from "../../components/Meta/Meta";
import "../../styles/contact.css";
import { AiTwotoneHome, AiTwotonePhone, AiTwotoneMail } from "react-icons/ai";
import { FaInfoCircle } from "react-icons/fa";
import Container from "../../components/Container/Container";
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { createContact } from "../../features/contact/contactSlice";

const Contact = () => {
  const dispatch = useDispatch();
  const contactSchema = yup.object({
    name: yup.string().required("Vui lòng nhập tên"),
    mobile: yup.string().default("").nullable().required("Vui lòng nhập STĐ"),
    comment: yup
      .string()
      .default("")
      .nullable()
      .required("Vui lòng nhập comment"),
    email: yup
      .string()
      .email("Vui lòng nhập đúng định dạng Email")
      .required("Vui lòng nhập Email"),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      comment: "",
    },
    validationSchema: contactSchema,
    onSubmit: (values) => {
      dispatch(
        createContact({
          name: values.name,
          email: values.email,
          mobile: values.mobile,
          comment: values.comment,
        })
      );
    },
  });
  return (
    <>
      <Meta title={"BookStore"} />
      <BreadCrumb title={"Contact Us"} />
      <Container class1="contact-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.554225318091!2d105.90964429999998!3d21.01049890000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135a9304b252f71%3A0x9abf9d774c91cdae!2zUC4gWHXDom4gxJDhu5csIEPhu7EgS2jhu5FpLCBMb25nIEJpw6puLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1698052751116!5m2!1svi!2s"
              width="600"
              height="450"
              className="bolder-0 w-100"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="col-12 mt-5">
            <div className="contact-inner-wrapper d-flex justify-content-between">
              <div className="">
                <h3 className="contact-title h3 fw-bolder mb-4">Contact Us</h3>
                <form
                  action=""
                  className="d-flex flex-column gap-15"
                  onSubmit={formik.handleSubmit}
                >
                  <div className="">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name..."
                      name="name"
                      onChange={formik.handleChange("name")}
                      onBlur={formik.handleBlur("name")}
                      value={formik.values.name}
                    />
                    <div className="error ml-2">
                      {formik.touched.name && formik.errors.name}
                    </div>
                  </div>
                  <div className="">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Emal..."
                      name="name"
                      onChange={formik.handleChange("email")}
                      onBlur={formik.handleBlur("email")}
                      value={formik.values.email}
                    />
                    <div className="error ml-2">
                      {formik.touched.email && formik.errors.email}
                    </div>
                  </div>
                  <div className="">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Mobile Number..."
                      onChange={formik.handleChange("mobile")}
                      onBlur={formik.handleBlur("mobile")}
                      value={formik.values.mobile}
                    />
                    <div className="error ml-2">
                      {formik.touched.mobile && formik.errors.mobile}
                    </div>
                  </div>
                  <div className="">
                    <textarea
                      name=""
                      id=""
                      cols={30}
                      rows={4}
                      className="w-100 form-control"
                      placeholder="Comments"
                      onChange={formik.handleChange("comment")}
                      onBlur={formik.handleBlur("comment")}
                      value={formik.values.comment}
                    >
                      <div className="error ml-2">
                        {formik.touched.comment && formik.errors.comment}
                      </div>
                    </textarea>
                  </div>
                  <div className="">
                    <button className="button bolder-0">Send</button>
                  </div>
                </form>
              </div>
              <div className="">
                <h3 className="contact-title h3 fw-bolder mb-4">
                  Get in touch with us
                </h3>
                <div className="Info-me">
                  <ul className="ps-0">
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <AiTwotoneHome className="fs-5" />
                      <address className="mb-0">
                        To12,CuKhoi,LongBien,HaNoi
                      </address>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <AiTwotonePhone className="fs-5" />
                      <a href="tel:+84 77771467" className="">
                        tel:+84 77771467
                      </a>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <AiTwotoneMail className="fs-5" />
                      <a href="mailto:lucck131103@gmail.com" className="">
                        mailto:lucck131103@gmail.com
                      </a>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <FaInfoCircle className="fs-5" />
                      <p className="mb-0">SunDay-Friday 10AM - 8PM</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contact;
