import React , {useEffect, useState}from 'react'
import { Table } from 'antd'
import type { ColumnsType } from 'antd/es/table';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import {BiEdit} from 'react-icons/bi'
import {RiDeleteBin6Line} from 'react-icons/ri'
import { getProductCategories } from '../../features/pcategory/pcategorySlice';
type DataType = {
    key: number;
    title: string;
    action: any;
  };
  
const Pcategorieslist = () => {
    const [loading, setLoading] = useState(false);
    const data1: DataType[] = [];
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getProductCategories())
    },[])
    const pCategoriesState = useSelector((state:any) => state.pcategories.pCategories)
    const columns: ColumnsType<DataType> = [
      {
        title: 'Sno',
        dataIndex: 'key',
      },
      {
        title: 'Title',
        dataIndex: 'title',
        defaultSortOrder: 'descend',
        sorter: (a:any, b:any) => a.title.length - b.title.length,
      },
      {
        title: 'Action',
        dataIndex: 'action',
      },
    ];
    
  for (let i = 0; i < pCategoriesState.length; i++) {
    data1.push({
      key: i + 1,
      title: pCategoriesState[i].title,
      action: 
      (<>
      <Link to='' className='fs-5 green'><BiEdit/></Link>
      <Link to='' className='ms-3 fs-5 red'><RiDeleteBin6Line/></Link>
      </>)
    });
  }
  
  return (
    <div>
    <h3 className='mb-4 title'>Product Categories List</h3>
    <div className="">
    <Table columns={columns} dataSource={data1} /> 
    </div>
  </div>
  )
}

export default Pcategorieslist