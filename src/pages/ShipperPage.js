import React, { useEffect, useState } from 'react';
//import './ProductPage.css';
import { Table, Button, Space } from 'antd';

function ShipperPage() {
  let [ filteredInfo, setFilteredInfo ] = useState(null);
  let [ sortedInfo, setsortedInfo ] = useState(null);
  const [ shipper, setShipper ] = useState([]);

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
  };

  useEffect(() => {
    const abortController = new AbortController();
    fetch('http://localhost:4000/shipper/',{ signal: abortController.signal})
        .then(response => response.json())
        .then(response => setShipper(response.data))
        .catch(err=>console.error(err))
    return () => {
        abortController.abort();
    };
  }
  ,[])

  console.log(shipper);

  sortedInfo = sortedInfo || {};
  filteredInfo = filteredInfo || {};

  const data = shipper.map(s => {
    return ({
      id: s.id,
      firstName: s.firstName,
      lastName: s.lastName,
      email: s.email,
      phoneNumber: s.phoneNumber,
      birthday: s.birthday,
      cardNumber: s.cardNumber,
      address: s.address,
    })
  });

  // const data = [];
  // for (let i = 0; i < 46; i++) {
  //   data.push({
  //     key: i,
  //     name: `Edward King ${i}`,
  //     price: `32${i}`,
  //     info: `London, Park Lane no. ${i}`,
  //   });
  // }
  // <div>
  //   {data.filter(name => name).map(filtedPerson =>(
  //     <li>
  //       {filteredPerson.name}
  //     </li>
  //   ))}
  // </div>

  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
      filteredValue: filteredInfo.id || null,
      onFilter: (value, record) => record.id.includes(value),
      sorter: (a, b) => a.id.length - b.id.length,
      sortOrder: sortedInfo.columnKey === 'id' && sortedInfo.order,
      ellipsis: true,
    },
    {
      title: 'firstName',
      dataIndex: 'firstName',
      key: 'firstName',
      filteredValue: filteredInfo.firstName || null,
      onFilter: (value, record) => record.firstName.includes(value),
      sorter: (a, b) => a.firstName.length - b.firstName.length,
      sortOrder: sortedInfo.columnKey === 'firstName' && sortedInfo.order,
      ellipsis: true,
    },
    {
      title: 'lastName',
      dataIndex: 'lastName',
      key: 'lastName',
      sorter: (a, b) => a.price - b.price,
      sortOrder: sortedInfo.columnKey === 'lastName' && sortedInfo.order,
      ellipsis: true,
    },
    {
      title: 'email',
      dataIndex: 'email',
      key: 'email',
      sorter: (a, b) => a.email - b.email,
      sortOrder: sortedInfo.columnKey === 'email' && sortedInfo.order,
      ellipsis: true,
    },
    {
      title: 'phoneNumber',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
      sorter: (a, b) => a.phoneNumber - b.phoneNumber,
      sortOrder: sortedInfo.columnKey === 'phoneNumber' && sortedInfo.order,
      ellipsis: true,
    },
    {
      title: 'birthday',
      dataIndex: 'birthday',
      key: 'birthday',
      sorter: (a, b) => a.birthday - b.birthday,
      sortOrder: sortedInfo.columnKey === 'birthday' && sortedInfo.order,
      ellipsis: true,
    },
    {
      title: 'cardNumber',
      dataIndex: 'cardNumber',
      key: 'cardNumber',
      sorter: (a, b) => a.cardNumber - b.cardNumber,
      sortOrder: sortedInfo.columnKey === 'cardNumber' && sortedInfo.order,
      ellipsis: true,
    },
    {
      title: 'address',
      dataIndex: 'address',
      key: 'address',
      sorter: (a, b) => a.address - b.address,
      sortOrder: sortedInfo.columnKey === 'lastName' && sortedInfo.order,
      ellipsis: true,
    },
  ]
  return (
    <div>
      <Space style={{ marginBottom: 16 }}>
        <Button onClick={setAgeSort}>Sap xep gia ban giam dan</Button>
        <Button onClick={clearFilters}>Clear filters</Button>
        <Button onClick={clearAll}>Clear filters and sorters</Button>
        <Button onClick={setFilter}>Tim theo ten </Button>
      </Space>
      <Table columns={columns} dataSource={data} onChange={handleChange} />
    </div>
  );
}

export default ShipperPage;
