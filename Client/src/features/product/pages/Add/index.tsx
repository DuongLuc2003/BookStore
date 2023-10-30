import React from 'react';
import { UploadOutlined, DeleteOutlined } from '@ant-design/icons';
import { Upload, Button, Form, Input, Select, List, message } from 'antd';
import {
  useAddImagesMutation,
  useDeleteImageMutation
} from '../../../../api/upload';
import { useAddProductMutation } from '../../../../api/product';
import { useNavigate } from 'react-router-dom';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { useState } from 'react';
import { IProduct } from '@interfaces/product';
type FieldType = {
  title: string;
  price: number;
  category: string;
  description: string;
  brand:string,
  author:string,
  tag:string,
  quantity:number;
  images: File[]; // Thêm trường này để lưu danh sách hình ảnh
};

const AdminProductAdd = () => {
  const categoriesOptions = ['sofa', 'chair', 'watch', 'wireless', 'mobile', 'Watch'];
  const [addProduct, { isLoading: addProductLoading }] = useAddProductMutation();
  const [addImages] = useAddImagesMutation();
  const [deleteImage] = useDeleteImageMutation();

  const navigate = useNavigate();
  const [images, setImages] = useState<File[]>([]);
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);

  const handleUploadImages = async () => {
    try {
      const response = await addImages({ images });
      if ('data' in response) {
        // Nếu có dữ liệu hình ảnh từ response
        const uploadedImages = response.data;
        setUploadedImages((prevImages) => [...prevImages, ...uploadedImages]);
        message.success('Tải lên hình ảnh thành công');
      } else if ('error' in response) {
        // Xử lý lỗi ở đây nếu cần
        message.error('Lỗi khi tải lên hình ảnh');
      }
    } catch (error) {
      // Xử lý lỗi ở đây nếu cần
      message.error('Lỗi khi tải lên hình ảnh');
    }
  };
  

  const handleDeleteImage = async (url: string) => {
    try {
      // Gọi mutation để xóa hình ảnh
      await deleteImage({ url });
      setUploadedImages((prevImages) =>
        prevImages.filter((image) => image !== url)
      );
      message.success('Xóa hình ảnh thành công');
    } catch (error) {
      message.error('Lỗi khi xóa hình ảnh');
    }
  };

  const onFinish = (values: IProduct) => {
    // Tạo FormData để gửi hình ảnh cùng với dữ liệu sản phẩm
    const formData = new FormData();
    images.forEach((image) => {
      formData.append('image', image);
    });

    handleUploadImages()
      .then(() => {
        // After images are uploaded, add the product
        addProduct({ ...values, images: uploadedImages }) // Sử dụng danh sách URL đã tải lên
          .unwrap()
          .then(() => navigate('/admin/product'));
      })
      .catch((error) => {
        message.error('Lỗi khi tải lên hình ảnh');
      });
  };
  

  return (
    <div className="p-4">
      <header className="mb-4">
        <h2 className="font-bold text-2xl">Thêm sản phẩm</h2>
      </header>
      <Form
        name="basic"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Tên sản phẩm"
          name="title"
          rules={[
            { required: true, message: "Vui lòng nhập tên sản phẩm!" },
            { min: 3, message: "Sản phẩm ít nhất 3 ký tự" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Giá sản phẩm"
          name="price"
          rules={[
            // Yêu cầu required và validation giá sản phẩm
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="quantity"
          name="quantity"
          rules={[
            { required: true, message: "Vui lòng nhập tên sản phẩm!" }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="brand"
          name="brand"
          rules={[
            { required: true, message: "Vui lòng nhập tên sản phẩm!" }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="author"
          name="author"
          rules={[
            { required: true, message: "Vui lòng nhập tên sản phẩm!" },
            { min: 3, message: "Sản phẩm ít nhất 3 ký tự" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Tag"
          name="tag"
          rules={[
            { required: true, message: "Vui lòng nhập tên sản phẩm!" },
            { min: 3, message: "Sản phẩm ít nhất 3 ký tự" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item<string[]>
          label="Danh mục sản phẩm"
          name="category"
          rules={[
            { required: true, message: "Vui lòng chọn danh mục sản phẩm" },
          ]}
        >
          <Select mode="multiple" placeholder="Chọn danh mục">
            {categoriesOptions.map((category) => (
              <Select.Option key={category} value={category}>
                {category}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item<FieldType>
          label="Mô tả sản phẩm"
          name="description"
          rules={[
            { required: true, message: "Vui lòng nhập mô tả sản phẩm!" },
            { min: 10, message: "Mô tả ít nhất 10 ký tự" },
          ]}
        >
          <Input.TextArea rows={4} />
        </Form.Item>

        <Form.Item
  label="Hình ảnh sản phẩm"
  name="images"
  rules={[
    { required: true, message: 'Vui lòng chọn ít nhất một hình ảnh sản phẩm!' },
  ]}
>
  <Upload
    listType="picture"
    multiple={true}
    beforeUpload={(file) => {
      setImages([...images, file]);
      return false; // Prevent default behavior (auto upload)
    }}
  >
    <Button icon={<UploadOutlined />}>Tải lên hình ảnh</Button>
  </Upload>
</Form.Item>

        <Form.Item wrapperCol={{ offset: 6, span: 18 }} className="">
          <Button type="primary" danger htmlType="submit" className="me-3">
            {addProductLoading ? (
              <AiOutlineLoading3Quarters className="animate-spin" />
            ) : (
              "Thêm"
            )}
          </Button>
          <Button
            type="default"
            className="ml-2"
            onClick={() => navigate("/admin/product")}
          >
            Quay lại
          </Button>
        </Form.Item>

        
      </Form>
    </div>
  );
};

export default AdminProductAdd;