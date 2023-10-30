import { useGetProductByIdQuery, useUpdateProductMutation } from "../../../../api/product";
import { IProduct } from "@interfaces/product";
import { Button, Form, Input, Select, Skeleton } from "antd";
import { useEffect } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import React from "react";
type FieldType = {
  title: string;
  price: number;
  category: string;
  description: string;
  brand: string;
  author: string;
  tag: string;
  quantity: number;
};

const AdminProductEdit = () => {
  const categoriesOptions = ["sofa", "chair", "Watch", "wireless", "mobile"];
  const { idProduct } = useParams<{ idProduct: string }>();
  const { data: productData, isLoading } = useGetProductByIdQuery(idProduct || "");
  const [updateProduct] = useUpdateProductMutation();
  const navigate = useNavigate();
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({
      title: productData?.title,
      price: productData?.price,
      category: productData?.category,
      description: productData?.description,
      brand: productData?.brand,
      author: productData?.author,
      tag: productData?.tag,
      quantity: productData?.quantity,
    });
  }, [productData]);

  const onFinish = (values: IProduct) => {
    updateProduct({ ...values, _id: idProduct })
      .unwrap()
      .then(() => navigate("/admin/product"));
  };

  const validatePrice = (rule: any, value: number | string, callback: any) => {
    // Thêm logic kiểm tra giá sản phẩm nếu cần
    callback();
  };

  return (
    <div>
      <header className="mb-4">
        <h2 className="font-bold text-2xl">Sửa sản phẩm : {productData?.title}</h2>
      </header>
      {isLoading ? (
        <Skeleton />
      ) : (
        <Form
          form={form}
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
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
              { validator: validatePrice },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="quantity"
            name="quantity"
            rules={[
              { required: true, message: "Vui lòng nhập số lượng sản phẩm!" }
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="brand"
            name="brand"
            rules={[
              { required: true, message: "Vui lòng nhập thương hiệu sản phẩm!" }
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="author"
            name="author"
            rules={[
              { required: true, message: "Vui lòng nhập tác giả sản phẩm!" },
              { min: 3, message: "Tác giả ít nhất 3 ký tự" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Tag"
            name="tag"
            rules={[
              { required: true, message: "Vui lòng nhập tag sản phẩm!" },
              { min: 3, message: "Tag ít nhất 3 ký tự" },
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

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" danger htmlType="submit" className="me-2">
              {isLoading ? (
                <AiOutlineLoading3Quarters className="animate-spin" />
              ) : (
                "Sửa"
              )}
            </Button>
            <Button
              type="primary"
              danger
              className="ml-2"
              onClick={() => navigate("/admin/product")}
            >
              Quay lại
            </Button>
          </Form.Item>
        </Form>
      )}
    </div>
  );
};

export default AdminProductEdit;
