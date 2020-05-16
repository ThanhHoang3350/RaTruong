import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './PageCustomer.css';
import { Redirect, Link } from 'react-router-dom';
import { Table, Button, Space } from 'antd';

function ProductPage() {
  let [ filteredInfo, setFilteredInfo ] = useState(null);
  let [ sortedInfo, setsortedInfo ] = useState(null);
  const [ products, setProducts ] = useState([]);

  const handleChange = (pagination, filters, sorter) => {
    setFilteredInfo(filters)
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

  useEffect(() => {
    const abortController = new AbortController();
    fetch('http://localhost:4000/product/',{ signal: abortController.signal})
        .then(response => response.json())
        .then(response => setProducts(response.data))
        .catch(err=>console.error(err))
    return () => {
        abortController.abort();
    };
  }
  ,[])

  sortedInfo = sortedInfo || {};
  filteredInfo = filteredInfo || {};

  // const data = products.map(p => {
  //   return ({
  //     key: p.id,
  //     name: p.productName,
  //     price: p.price,
  //     info: p.info,
  //   })
  // });

  const data = [];
  for (let i = 0; i < 46; i++) {
    data.push({
      key: i,
      name: `Edward King ${i}`,
      age: 32,
      address: `London, Park Lane no. ${i}`,
    });
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      filters: [
        { text: 'Joe', value: 'Joe' },
        { text: 'Jim', value: 'Jim' },
      ],
      filteredValue: filteredInfo.name || null,
      onFilter: (value, record) => record.name.includes(value),
      sorter: (a, b) => a.name.length - b.name.length,
      sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
      ellipsis: true,
    },
    {
      title: 'Info',
      dataIndex: 'info',
      key: 'info',
      filters: [
        { text: 'London', value: 'London' },
        { text: 'New York', value: 'New York' },
      ],
      filteredValue: filteredInfo.info || null,
      onFilter: (value, record) => record.info.includes(value),
      sorter: (a, b) => a.info.length - b.info.length,
      sortOrder: sortedInfo.columnKey === 'info' && sortedInfo.order,
      ellipsis: true,
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      sorter: (a, b) => a.price - b.price,
      sortOrder: sortedInfo.columnKey === 'price' && sortedInfo.order,
      ellipsis: true,
    },
  ]

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

export default ProductPage;
