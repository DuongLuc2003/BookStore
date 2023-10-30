type Props = {};
import { useGetProductsQuery, useRemoveProductMutation } from "../../api/product";
import { IProduct } from "../../interfaces/product";
import { Table, Button, Skeleton, Popconfirm, Alert , Input} from "antd";
import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import "../../styles/button.css"
import '../../index.css'
import React from "react";
const AdminProduct = (props: Props) => {
    const { data: productData, error, isLoading } = useGetProductsQuery();
    console.log(productData)
    const [removeProduct, { isLoading: isRemoveLoading, isSuccess: isRemoveSuccess }] =
        useRemoveProductMutation();

    const confirm = (id: number) => {
        removeProduct(id);
    };
    const dataSource = productData?.map(({ _id, images, title, category, price, tag, brand, quantity, author, description }: any) => {
        // Trích xuất name từ ObjectId nếu dữ liệu đã được populated
        const categoryName = category?.title;
        const brandName = brand?.title;
        const authorName = author?.name;
        const tagNames = tag?.map((tag: any) => tag.name).join(', ');
      
        return {
          key: _id,
          imageUrl: images?.[0]?.url,
          title,
          price,
          category: categoryName,
          tag: tagNames,
          brand: brandName,
          quantity,
          author: authorName,
          description,
        };
      });
    const columns = [
        {
            title: "Hình ảnh",
            dataIndex: "imageUrl",
            key: "imageUrl",
            render: (imageUrl: string) => (
              <img
                src={imageUrl}
                alt="Product Image"
                style={{ maxWidth: "100px" }}
              />
            ),
          },
        {   
            title: "Tên sản phẩm",
            dataIndex: "title",
            key: "title",
        },
        {   
            title: "Thể loại",
            dataIndex: "category",
            key: "category",
        },
        {   
            title: "Thương hiệu",
            dataIndex: "brand",
            key: "brand",
        },
        {
            title: "Giá",
            dataIndex: "price",
            key: "price",
        },
        {
            title: "Số lượng",
            dataIndex: "quantity",
            key: "quantity",
        },
        {
            title: "Tác giả",
            dataIndex: "author",
            key: "author",
        },
        {
            title: "Tag",
            dataIndex: "tag",
            key: "tag",
        },
        {
            title: "Mô tả",
            dataIndex: "description",
            key: "description",
        },
        {
            title: "Action",
            render: ({ key: _id }: any) => {
                return (
                    <>
                        <div className="d-flex">
                            <Popconfirm
                                title="Are you fucking sure?"
                                onConfirm={() => confirm(_id)}
                                okText="Yes"
                                cancelText="No"
                            >
                                <Button type="primary" danger className="me-2">
                                    Xóa
                                </Button>
                            </Popconfirm>

                            <Button type="primary" danger className="ml-2 custom-button">
                             <Link to={`/admin/product/${_id}/edit`} className="text-white custom-link">
                               Sửa
                            </Link>
                            </Button>
                        </div>
                    </>
                );
            },
        },
    ];

    return (
        <div >
            <header className="mb-4 d-flex justify-content-between align-items-center">
                <h2 className="font-weight-bold text-2xl">Product Manager</h2>
                <Button type="primary" danger className="">
                    <Link to="/admin/product/add" className="d-flex align-items-center custom-link">
                        <AiOutlinePlus className="icon"/>
                        <span className="button-text">Thêm sản phẩm</span> 
                    </Link>
                </Button>
            </header>
            {isRemoveSuccess && <Alert message="Success Text" type="success" />}
            {isLoading ? <Skeleton /> : <Table dataSource={dataSource} columns={columns} />}
        </div>
    );
};

export default AdminProduct;