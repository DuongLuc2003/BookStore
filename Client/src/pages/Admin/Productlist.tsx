import React , {useEffect, useState}from 'react'
import { Table } from 'antd'
import type { ColumnsType } from 'antd/es/table';
import {BiEdit} from 'react-icons/bi'
import {RiDeleteBin6Line} from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../features/product/productSlice';
import { Link } from 'react-router-dom';
type DataType = {
    key: number;
    title: string;
    price: string;
    quantity: number;
    brand:string;
    author:string;
    category:string;
    action: any;
  };
  
const Productlist = () => {
    const [loading, setLoading] = useState(false);
    const data1: DataType[] = [];
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getProducts())
    },[])
    const productState = useSelector((state:any) => state.product.products);
    const columns: ColumnsType<DataType> = [
      {
        title: 'Stt',
        dataIndex: 'key',
      },
      {
        title: 'Title',
        dataIndex: 'title',
        defaultSortOrder: 'descend',
        sorter: (a:any, b:any) => a.title.length - b.title.length,
      },
      {
        title: 'Price',
        dataIndex: 'price',
        defaultSortOrder: 'descend',
        sorter: (a:any, b:any) => a.price.length - b.price.length,
      },
      {
        title: 'Brand',
        dataIndex: 'brand',
        defaultSortOrder: 'descend',
        sorter: (a:any, b:any) => a.brand.length - b.brand.length,
      },
      {
        title: 'Quantity',
        dataIndex: 'quantity',
        defaultSortOrder: 'descend',
        sorter: (a:any, b:any) => a.quantity.length - b.quantity.length,
      },
      {
        title: 'Author',
        dataIndex: 'author',
        defaultSortOrder: 'descend',
        sorter: (a:any, b:any) => a.author.length - b.author.length,
      },
      {
        title: 'Category',
        dataIndex: 'category',
        defaultSortOrder: 'descend',
        sorter: (a:any, b:any) => a.category.length - b.category.length,
      },
      {
        title: 'Action',
        dataIndex: 'action',
      },
    ];
    
  for (let i = 0; i < productState.length; i++) {
    data1.push({
      key: i,
      title: productState[i].title,
      price: `${productState[i].price}`,
      quantity: productState[i].quantity,
      brand: productState[i].brand.title,
      author: productState[i].author.name,
      category: productState[i].category.title,
      action: 
      (<>
      <Link to='' className='fs-5 green'><BiEdit/></Link>
      <Link to='' className='ms-3 fs-5 red'><RiDeleteBin6Line/></Link>
      </>)
    });
  }
  return (
    <div>
    <h3 className='mb-4 title'>Product List</h3>
    <div className="">
    <Table columns={columns} dataSource={data1} /> 
    </div>
  </div>
  )
}

export default Productlist