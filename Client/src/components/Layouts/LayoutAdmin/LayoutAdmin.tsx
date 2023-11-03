import { Button, Layout, Menu, theme } from "antd";
import { useState } from "react";
import {
  AiOutlineMenuFold,
  AiOutlineMenuUnfold,
  AiOutlineUser,
  AiFillAppstore,
} from "react-icons/ai";
import { BiSolidAddToQueue, BiCategory } from "react-icons/bi";
import { SiAdobepremierepro } from "react-icons/si";
import { BsCardChecklist, BsFillHouseDashFill } from "react-icons/bs";
import { AiFillInfoCircle } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaEdit, FaList, FaListAlt, FaBlogger } from "react-icons/fa";
import { TbBrandBooking } from "react-icons/tb";
import { Link, Outlet, useNavigate } from "react-router-dom";
import React from "react";
const { Header, Sider, Content } = Layout;

const LayoutAdmin = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();
  return (
    <Layout className="">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <h2 className="flex justify-center font-extrabold">
            <span className="sm-logo">AD</span>
            <span className="lg-logo">Admin Manager</span>
          </h2>
        </div>

        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          onClick={({ key }) => {
            if (key == "signout") {
            } else {
              navigate(key);
            }
          }}
          items={[
            {
              key: "",
              icon: <BsFillHouseDashFill className="" />,
              label: <Link to="/admin/dashboard">DashBoard</Link>,
            },
            {
              key: "CateLog",
              icon: <SiAdobepremierepro className="fs-4" />,
              label: "Catalog",
              children: [
                {
                  key: "products",
                  icon: <FaList className="" />,
                  label: <Link to="">List Product</Link>,
                },
                {
                  key: "product-add",
                  icon: <BiSolidAddToQueue className="" />,
                  label: "Add Product",
                },
                {
                  key: "product-edit/:id",
                  icon: <FaEdit className="" />,
                  label: "Edit Product",
                },
                {
                  key: "brands",
                  icon: <FaList className="" />,
                  label: <Link to="">Brand List</Link>,
                },
                {
                  key: "brand-add",
                  icon: <TbBrandBooking className="" />,
                  label: <Link to="">Brand Add</Link>,
                },
                {
                  key: "categories",
                  icon: <FaList className="" />,
                  label: <Link to="">Category List</Link>,
                },
                {
                  key: "category-add",
                  icon: <BiSolidAddToQueue className="" />,
                  label: <Link to="">Category</Link>,
                },
              ],
            },
            {
              key: "customers",
              icon: <AiOutlineUser className="fs-4" />,
              label: <Link to="/admin/customers">User</Link>,
            },
            {
              key: "orders",
              icon: <FaListAlt className="fs-4" />,
              label: <Link to="/admin/orders">Orders</Link>,
            },
            {
              key: "blogs",
              icon: <FaBlogger className="fs-4" />,
              label: "Blogs",
              children: [
                {
                  key: "blog-list",
                  icon: <FaList className="" />,
                  label: "Blog List",
                },
                {
                  key: "blog-add",
                  icon: <BiSolidAddToQueue className="" />,
                  label: "Blog Add",
                },
                {
                  key: "blog-edit/:id",
                  icon: <FaEdit className="" />,
                  label: "Blog Edit",
                },
                {
                  key: "blog-category-list",
                  icon: <FaList className="" />,
                  label: "Blog Category List",
                },
                {
                  key: "blog-category",
                  icon: <BiCategory className="" />,
                  label: "Blog Category Add",
                },
              ],
            },
            {
              key: "enquiries",
              icon: <AiFillInfoCircle className="fs-4" />,
              label: <Link to="/admin/enquiries">Enquiries</Link>,
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{ padding: 0, background: colorBgContainer }}
          className="d-flex justify-content-between ps-3 pe-5"
        >
          <Button
            type="text"
            icon={collapsed ? <AiOutlineMenuUnfold /> : <AiOutlineMenuFold />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          <div className="mt-2 d-flex gap-4 align-items-center">
            <div className="position-relative">
              <IoIosNotificationsOutline className="fs-4" />
              <span className="badge bg-warning rounded-circle p-1 position-absolute">
                3
              </span>
            </div>
            <div className="d-flex gap-3 align-items-center dropdown">
              <div className="admin-nav mb-2">
                <img
                  src="https://png.pngtree.com/png-vector/20191122/ourmid/pngtree-beautiful-admin-roles-glyph-vector-icon-png-image_2002847.jpg"
                  alt=""
                  className=""
                  width={32}
                  height={32}
                />
              </div>
              <div
               role="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <h5 className="mb-0">
                  Admin
                </h5>
                <p className="mb-0">admin@gmail.com</p>
              </div>
              <div className="dropdown" aria-aria-labelledby="dropdownMenuLink">
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <Link to='/'>
                    <a className="dropdown-item py-1 mb-1" style={{"height":"auto",lineHeight:'20px'}} href="#">
                      View Profile
                    </a>
                  </Link>
                  <Link to='/'>
                    <a className="dropdown-item py-1 mb-1" style={{"height":"auto",lineHeight:'20px'}} href="#">
                      SignOut
                    </a>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </Header>

        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutAdmin;
