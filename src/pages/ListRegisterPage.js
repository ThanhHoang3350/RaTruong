import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
//import './ProductPage.css';
import {Redirect, Link} from 'react-router-dom';
import { Table, Button, Space, Modal, Form, Input } from 'antd';

function ShipperPage() {
  let [ filteredInfo, setFilteredInfo ] = useState(null);
  let [ sortedInfo, setsortedInfo ] = useState(null);
  const [ shipper, setShipper ] = useState([]);
  const [ open, setOpen ] = useState(false);

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  const handleOk = e => {
    console.log(e);
    setOpen(false);
  };

  const openModal = () => {
    setOpen(true)
  }

  const testNoti = () => {
    alert('Duyệt thành công');
    setOpen(false);
  }

  const handleCancel = e => {
    console.log(e);
    setOpen(false);
  };

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
    fetch('http://localhost:4000/shipper/',{ signal: abortController.signal})
        .then(response => response.json())
        .then(response => setShipper(response.data))
        .catch(err=>console.error(err))
    return () => {
        abortController.abort();
    };
  }
  ,[])

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
  {
    title: 'Action',
    dataIndex: '',
    key: 'x',
    render: (text) => <Button type="primary" onClick={openModal}>Open Modal</Button>
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
      <Modal
        title="Basic Modal"
        visible={open}
        onOk={handleOk}
        onCancel={handleCancel}
      >
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
      <Form.Item
        label="First Name"
        name="firstname"
        rules={[{ required: true, message: 'Please input your firstname!' }]}
      >
        <Input defaultValue='Thanh'/>
      </Form.Item>

      <Form.Item
        label="Last Name"
        name="lastname"
        rules={[{ required: true, message: 'Please input your lastname!' }]}
      >
        <Input defaultValue='Hoang'/>
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input defaultValue='test@gmail.com'/>
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input defaultValue='test@gmail.com'/>
      </Form.Item>

      <Form.Item
        label="Password"
        name="password1"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="Confirm Password"
        name="password2"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="Phone Number"
        name="phonenumber"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input defaultValue='0863518304'/>
      </Form.Item>

      <Form.Item
        label="Birthday"
        name="birthday"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input defaultValue='15/10/1998'/>
      </Form.Item>

      <Form.Item
        label="Card Number"
        name="birthday"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input defaultValue='312363576'/>
      </Form.Item>

      <Form.Item
        label="Address"
        name="address"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input defaultValue='Chung Cu 9 View'/>
      </Form.Item>

      <Form.Item
        label="Wallet"
        name="wallet"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button onClick={testNoti} type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
      </Modal>
    </div>
  );
}

export default ShipperPage;
