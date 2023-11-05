import React , {useEffect, useState}from 'react'
import { Table } from 'antd'
import type { ColumnsType } from 'antd/es/table';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../features/customers/customerSlice';
type DataType = {
  key: number;
  name: string;
  email: string;
  mobile: string;
};

const Customers = () => {
    const [loading, setLoading] = useState(false);
    const data1: DataType[] = [];
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getUsers())
    },[]) 
    const customerstate = useSelector((state:any) => state.customer.customers);
    console.log(customerstate)
    const {data} = customerstate;
    console.log(data)
    const columns: ColumnsType<DataType> = [
      {
        title: 'Sno',
        dataIndex: 'key',
      },
      {
        title: 'Name',
        dataIndex: 'name',
        defaultSortOrder: 'descend',
        sorter: (a:any, b:any) => a.name.length - b.name.length,
      },
      {
        title: 'Email',
        dataIndex: 'email',
      },
      {
        title: 'Mobile',
        dataIndex: 'mobile',
      },
    ];
  for (let i = 0; i < customerstate.length; i++) {
    data1.push({
      key: i + 1,
      name: customerstate[i].firstname + " " + customerstate[i].lastname,
      email: customerstate[i].email,
      mobile: customerstate[i].mobile,
    });
  }
 
  return (
    <div>
    <h3 className='mb-4 title'>Customers List</h3>
    <div className="">
    <Table columns={columns} dataSource={data1} /> 
    </div>
  </div>
  )
}

export default Customers