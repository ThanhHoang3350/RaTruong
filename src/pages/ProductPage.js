import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './ProductPage.css';
import {Redirect, Link} from 'react-router-dom';
import { Table, Button, Space } from 'antd';


function ProductPage() {
  let [ filteredInfo, setFilteredInfo ] = useState(null); 
  let [ sortedInfo, setsortedInfo ] = useState(null);
  const [ products, setProducts ] = useState([]);
  
  const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop)

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
  const setFilter = () =>{
    setFilter()
    {
      
    }
  };

  useEffect(() => {
    const abortController = new AbortController();
    fetch('http://localhost:4000/products/',{ signal: abortController.signal})
        .then(response => response.json())
        .then(response => setProducts(response.data))
        .catch(err=>console.error(err))
    return () => {
        abortController.abort();
    };
  }
  ,[])

  console.log(products);

  sortedInfo = sortedInfo || {};
  filteredInfo = filteredInfo || {};

  const data = products.map((p) => {
    return ({
      id: p.id,
      productName: p.productName,
      price: p.price,
      info: p.info,
      mass: p.mass,
      origin: p.origin,
      status: p.status,
      typeid: p.typeid, 
      marketid: p.marketid,
    })
  }); 
  
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      filteredValue: filteredInfo.id || null,
      onFilter: (value, record) => record.id.includes(value),
      sorter: (a, b) => a.id.length - b.id.length,
      sortOrder: sortedInfo.columnKey === 'id' && sortedInfo.order,
      ellipsis: true,
    },
    {
      title: 'productName',
      dataIndex:'productName',
      key: 'productName',
      filteredValue: filteredInfo.productName || null,
      onFilter: (value, record) => record.productName.includes(value),
      sorter: (a, b) => a.productName.length - b.productName.length,
      sortOrder: sortedInfo.columnKey === 'productName' && sortedInfo.order,
      ellipsis: true,
    },
    {
      title: 'Price',
      dataIndex:'price',
      key: 'price',
      filteredValue: filteredInfo.price || null,
      onFilter: (value, record) => record.price.includes(value),
      sorter: (a, b) => a.price.length - b.price.length,
      sortOrder: sortedInfo.columnKey === 'price' && sortedInfo.order,
      ellipsis: true,
    },
    {
      title: 'Info',
      dataIndex:'info',
      key: 'info',
      filteredValue: filteredInfo.info|| null,
      onFilter: (value, record) => record.info.includes(value),
      sorter: (a, b) => a.info.length - b.info.length,
      sortOrder: sortedInfo.columnKey === 'info' && sortedInfo.order,
      ellipsis: true,
    },
    {
      title: 'mass',
      dataIndex:'mass',
      key: 'mass',
      filteredValue: filteredInfo.mass|| null,
      onFilter: (value, record) => record.mass.includes(value),
      sorter: (a, b) => a.mass.length - b.mass.length,
      sortOrder: sortedInfo.columnKey === 'mass' && sortedInfo.order,
      ellipsis: true,
    },
    {
      title: 'origin',
      dataIndex:'origin',
      key: 'origin',
      filteredValue: filteredInfo.origin|| null,
      onFilter: (value, record) => record.origin.includes(value),
      sorter: (a, b) => a.origin.length - b.origin.length,
      sortOrder: sortedInfo.columnKey === 'origin' && sortedInfo.order,
      ellipsis: true,
    },
    {
      title: 'status',
      dataIndex:'status',
      key: 'status',
      filteredValue: filteredInfo.status|| null,
      onFilter: (value, record) => record.status.includes(value),
      sorter: (a, b) => a.status.length - b.status.length,
      sortOrder: sortedInfo.columnKey === 'status' && sortedInfo.order,
      ellipsis: true,
    },
    {
      title: 'typeid',
      dataIndex:'typeid',
      key: 'typeid',
      filteredValue: filteredInfo.typeid|| null,
      onFilter: (value, record) => record.typeid.includes(value),
      sorter: (a, b) => a.typeid.length - b.typeid.length,
      sortOrder: sortedInfo.columnKey === 'typeid' && sortedInfo.order,
      ellipsis: true,
    },
    {
      title: 'marketid',
      dataIndex:'marketid',
      key: 'marketid',
      filteredValue: filteredInfo.marketid|| null,
      onFilter: (value, record) => record.marketid.includes(value),
      sorter: (a, b) => a.marketid.length - b.marketid.length,
      sortOrder: sortedInfo.columnKey === 'marketid' && sortedInfo.order,
      ellipsis: true, 
    },
    
  ]
  return (
    <div>
      <Space style={{ marginBottom: 16 }}>
        {/* <Button onClick={setAgeSort}>Sort Age</Button>
        <Button onClick={clearFilters}>Clear filters</Button>
        <Button onClick={clearAll}>Clear filters and sorters</Button>
        <Button onClick={setFilter}>Tim theo ten </Button> */}
      </Space>
      <Table columns={columns} dataSource={data} onChange={handleChange} />
    </div>
  );
}

export default ProductPage;
