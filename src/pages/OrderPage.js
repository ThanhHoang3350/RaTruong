import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './OderPage.css';
import { Table, Space, Button } from 'antd';

function OrderPage ()
{
  let [ filteredInfo, setFilteredInfo ] = useState(null);
  let [ sortedInfo, setsortedInfo ] = useState(null);

  const handleChange = (pagination, filters, sorter) => {
    setFilteredInfo(filters)
    console.log(sorter)
    setsortedInfo(sorter)
  };

  const clearFilters = () => {
    setFilteredInfo(null)
  };

  const clearAll = () => {
    setFilteredInfo(null)
    setsortedInfo(null)
  };

  const setAgeSort = () => {
    setsortedInfo({
      order: 'descend',
      columnKey: 'age',
    })
    };

    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
  const columns = [
    {
      title: 'Full Name',
      width: 100,
      dataIndex: 'name',
      key: 'name',
      fixed: 'left',
    },
    {
      title: 'Age',
      width: 100,
      dataIndex: 'age',
      key: 'age',
      fixed: 'left',
    },
    { title: 'Column 1', dataIndex: 'address', key: '1' },
    { title: 'Column 2', dataIndex: 'address', key: '2' },
    { title: 'Column 3', dataIndex: 'address', key: '3' },
    { title: 'Column 4', dataIndex: 'address', key: '4' },
    { title: 'Column 5', dataIndex: 'address', key: '5' },
    { title: 'Column 6', dataIndex: 'address', key: '6' },
    { title: 'Column 7', dataIndex: 'address', key: '7' },
    { title: 'Column 8', dataIndex: 'address', key: '8' },
    {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      width: 100,
      render: () => <a>Duyet Don Hang</a>,
    },
  ];

  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 40,
      address: 'London Park',
    },
  ];
  return (
    <div>
    <Space style={{ marginBottom: 16 }}>
      <Button onClick={setAgeSort}>Sort age</Button>
      <Button onClick={clearFilters}>Clear filters</Button>
      <Button onClick={clearAll}>Clear filters and sorters</Button>
    </Space>
    <Table columns={columns} dataSource={data} onChange={handleChange} />
  </div>
        );
 }
 export default OrderPage;
