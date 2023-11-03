import React , {useState}from 'react'
import {BsArrowDownRight,BsArrowUpRight} from 'react-icons/bs'
import { Column } from '@ant-design/plots';
import { Table } from 'antd'
import type { ColumnsType } from 'antd/es/table';
interface DataType {
  key: React.Key;
  name: string;
  product: number;
  status: string;
}

const Dashboard = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [loading, setLoading] = useState(false);
  const data1: DataType[] = [];
  const start = () => {
    setLoading(true);
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };
  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  
for (let i = 0; i < 46; i++) {
  data1.push({
    key: i,
    name: `Edward King ${i}`,
    product: 32,
    status: `London, Park Lane no. ${i}`,
  });
}

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;
  const columns: ColumnsType<DataType> = [
    {
      title: 'Sno',
      dataIndex: 'key',
    },
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Product',
      dataIndex: 'product',
    },
    {
      title: 'Status',
      dataIndex: 'status',
    },
  ];
  
  const data = [
    {
      type: 'Jan',
      sales: 100,
    },
    {
      type: 'Feb',
      sales: 200,
    },
    {
      type: 'Mar',
      sales: 139,
    },
    {
      type: 'Apr',
      sales: 50,
    },
    {
      type: 'May',
      sales: 80,
    },
    {
      type: 'Jun',
      sales: 30,
    },
    {
      type: 'July',
      sales: 50,
    },
    {
      type: 'Aug',
      sales: 70,
    },
    {
      type: 'Sep',
      sales: 150,
    },
    {
      type: 'Oct',
      sales: 100,
    },
    {
      type: 'Nov',
      sales: 110,
    },
    {
      type: 'Dec',
      sales: 90,
    },
  ];
  
  const paletteSemanticRed = '#F4664A';
  const brandColor = '#14cca4';
  const config = {
    data,
    xField: 'type',
    yField: 'sales',
    seriesField: '',
    color: ({ sales }:any) => {
      if (sales < 10) {
        return paletteSemanticRed;
      }
      return brandColor;
    },
    label: {
      position: 'middle',
      style: {
        fill: '#FFFFFF',
        opacity: 1,
      },
    },
    legend: false,
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias:'Months',
      },
      sales: {
        alias:'Income',
      }
    }
  };
  return (
    <div>
      <h3 className='mb-4 title'>Dashboard</h3>
      <div className="d-flex justify-content-between align-items-center gap-3">
        <div className="d-flex justify-content-between align-items-end bg-white rounded-3 flex-grow-1 p-3">
             <div className="">
               <p className='desc'>Total</p>
               <h4 className='mb-0 sub-title'>$1100</h4> 
              </div>
              <div className="d-flex flex-column align-items-end">
                <h6 className='red'><BsArrowDownRight/> 32%</h6>
                <p className='mb-0 desc'>Compared To Nov 2023</p>
              </div>         
        </div>
        <div className="d-flex justify-content-between align-items-end bg-white rounded-3 flex-grow-1 p-3">
             <div className="">
                             <p className='desc'>Total</p>
                             <h4 className='mb-0 sub-title'>$1100</h4> 
             </div>
             <div className="d-flex flex-column align-items-end">
                <h6 className='red'><BsArrowDownRight/> 32%</h6>
                <p className='mb-0 desc'>Compared To Nov 2023</p>
              </div>  
        </div>
        <div className="d-flex justify-content-between align-items-end bg-white rounded-3 flex-grow-1 p-3">
             <div className="">
               <p className='desc'>Total</p>
               <h4 className='mb-0 sub-title'>$1100</h4> 
             </div>
             <div className="d-flex flex-column align-items-end">
                <h6 className='green'><BsArrowUpRight/> 32%</h6>
                <p className='mb-0 desc'>Compared To Nov 2023</p>
              </div>  
        </div>
      </div>
      <div className="mt-4">
        <h3 className="mb-5 h3">Income Statics</h3>
        <div className="">
        <Column {...config} />
        </div>
      </div>
      <div className="mt-4">
        <h3 className="mb-5">
          Recent Orders
        </h3>
        <div className="">
        <Table rowSelection={rowSelection} columns={columns} dataSource={data1} /> 
        </div>
      </div>
      {/* <div className="my-4">
        <h3 className="mb-4">Recent Reviews</h3>
        <div className="">
          <div className=""></div>
          <div className=""></div>
        </div>
      </div> */}
    </div>
  )
}

export default Dashboard