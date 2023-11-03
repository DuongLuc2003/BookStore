import React, { useState } from "react";
import CustomInput from "../../components/CustomInput/CustomInput";
import { InboxOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import { message, Upload } from "antd";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const { Dragger } = Upload;
const Addproduct = () => {
  const [desc, setDesc] = useState<string>(""); // Đặt kiểu dữ liệu cho desc
  const handleDesc = (value: string) => {
    setDesc(value);
    console.log(value);
  };
  const props: UploadProps = {
    name: "file",
    multiple: true,
    action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };
  return (
    <div>
      <h3 className="mb-4 title">Add Product</h3>
      <div className="">
        <form action="">
          <CustomInput type="text" label="Enter Product Title" />
          <select name="" id="" className="my-3 p-3 form-control">
            <option value="">Select Product Category</option>
          </select>
          <select name="" id="" className="my-3 p-3 form-control">
            <option value="">Select Product Brand</option>
          </select>
          <CustomInput type="number" label="Enter Product Price" />
          <CustomInput type="number" label="Enter Product Quanity" />
          <CustomInput type="te" label="Enter Product Description" />
          <div className="mb-3">
          <ReactQuill
            theme="snow"
            value={desc}
            onChange={(evt) => {
              handleDesc(evt);
            }}
            className="mb-4"
          />
          </div>
          <Dragger {...props} className="">
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload. Strictly prohibited from
              uploading company data or other banned files.
            </p>
          </Dragger>
          <div className="d-flex justify-content-end">
            <button type="submit" className="btn border-0 button px-4 my-4">
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addproduct;
