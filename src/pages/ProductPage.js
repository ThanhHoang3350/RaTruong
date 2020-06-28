import React, { useEffect, useState, useContext } from 'react';
import './ProductPage.css';
import { Table, Space } from 'antd';
import { Link } from 'react-router-dom';
import { ProductCtx } from './ProductContext';


function ProductPage() {
  let [ filteredInfo, setFilteredInfo ] = useState(null);
  let [ sortedInfo, setsortedInfo ] = useState(null);
  const [ products, setProducts ] = useState([]);

  const handleChange = (pagination, filters, sorter) => {
    setFilteredInfo(filters)
    setsortedInfo(sorter)
  };

  const { productSave, setProductSave } = useContext(ProductCtx);

  const openPageUpdate = (record) => {
    setProductSave(record);
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

  sortedInfo = sortedInfo || {};
  filteredInfo = filteredInfo || {};

  const data = products.map((p) => {
    return ({
      id: p.id,
      productName: p.productName,
      price: p.price,
      info: p.info,
      mass: p.mass,
      image: p.image,
      origin: p.origin,
      status: p.status,
      typeid: p.typeId,
      marketid: p.marketId,
    })
  });

  const columns = [
    {
      title: 'Mã',
      dataIndex: 'id',
      key: 'id',
      filteredValue: filteredInfo.id || null,
      onFilter: (value, record) => record.id.includes(value),
      sorter: (a, b) => a.id.length - b.id.length,
      sortOrder: sortedInfo.columnKey === 'id' && sortedInfo.order,
      ellipsis: true,
    },
    {
      title: 'Tên sản phẩm',
      dataIndex:'productName',
      key: 'productName',
      filteredValue: filteredInfo.productName || null,
      onFilter: (value, record) => record.productName.includes(value),
      sorter: (a, b) => a.productName.length - b.productName.length,
      sortOrder: sortedInfo.columnKey === 'productName' && sortedInfo.order,
      ellipsis: true,
    },
    {
      title: 'Thông tin',
      dataIndex:'info',
      key: 'info',
      filteredValue: filteredInfo.info|| null,
      onFilter: (value, record) => record.info.includes(value),
      sorter: (a, b) => a.info.length - b.info.length,
      sortOrder: sortedInfo.columnKey === 'info' && sortedInfo.order,
      ellipsis: true,
    },
    {

      title: 'Tác giả',
      dataIndex:'mass',
      key: 'mass',
      filteredValue: filteredInfo.mass|| null,
      onFilter: (value, record) => record.mass.includes(value),
      sorter: (a, b) => a.mass.length - b.mass.length,
      sortOrder: sortedInfo.columnKey === 'mass' && sortedInfo.order,
      ellipsis: true,
    },
    {
      title: 'Xuất xứ',
      dataIndex:'origin',
      key: 'origin',
      filteredValue: filteredInfo.origin|| null,
      onFilter: (value, record) => record.origin.includes(value),
      sorter: (a, b) => a.origin.length - b.origin.length,
      sortOrder: sortedInfo.columnKey === 'origin' && sortedInfo.order,
      ellipsis: true,
    },
    {
      title: 'Trạng thái',
      dataIndex:'status',
      key: 'status',
      filteredValue: filteredInfo.status|| null,
      onFilter: (value, record) => record.status.includes(value),
      sorter: (a, b) => a.status.length - b.status.length,
      sortOrder: sortedInfo.columnKey === 'status' && sortedInfo.order,
      ellipsis: true,
    },
    {
      title: 'Giá bán',
      dataIndex: 'price',
      key: 'price',
      sorter: (a, b) => a.price - b.price,
      sortOrder: sortedInfo.columnKey === 'price' && sortedInfo.order,
      ellipsis: true,
    },
    {
      title: '',
      dataIndex: 'action',
      render: (text, record) => <Link to={`/updateproduct`} onClick={() => openPageUpdate(record)}>Edit</Link>,
    },
  ]

  return (
    <div>
      <Space style={{ marginBottom: 16 }}>
      </Space>
      <div className="Title-page-product">Page Products</div>
      <Table columns={columns} dataSource={data} onChange={handleChange} />
    </div>
  );

}
export default ProductPage;
