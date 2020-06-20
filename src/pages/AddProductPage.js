import React, { useReducer, useState, useEffect } from 'react';
import MultiSelect from "react-multi-select-component";//
import { Link } from 'react-router-dom';
import { Form, Input, Button, Select, message } from 'antd';
import axios from 'axios'

import { actChangeNotify} from './../actions/index';
import * as notify from './../constants/Notify';
import { useDispatch } from 'react-redux';
import { Dropdown, Menu, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const props = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
}
const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
const AddCreateProductPage = () => {
  const dispatch = useDispatch();
    const [product, setProduct] = useReducer(
    (state, newState) => ({...state, ...newState}),
    {
      productName: '',
      price: '',
      info: '',
      image: '',
      mass: '',
      origin: '',
      status: '',
      typeId: '',
      marketId: '',
  })
  const handleChange = evt => {
    const name = evt.target.name;
    const newValue = evt.target.value;
      setProduct({[name]: newValue});
  }
  const addProduct =()=>{
    const datapost = {
      productName: product.productName,
      price: product.price,
      info: product.info,
      image: product.image,
      mass: product.mass,
      origin: product.origin,
      status: product.status,
      typeId: product.typeId,
      marketId: product.marketId,
    }
    return axios.post(`http://localhost:4000/addproducts`, datapost)
  }

  const handleSubmit = (event) => {
    const datapost = {
      productName: event.productName,
      price: event.price,
      info: event.info,
      image: event.image,
      mass: event.mass,
      origin: event.origin,
      status: event.status,
      typeId: event.typeId,
      marketId: event.marketId,
    }
    return axios.post(`http://localhost:4000/addproducts`, datapost)
    event.preventDefault();
  }

  const [form] = Form.useForm();
  const [ markets, setMarkets ] = useState([]);
  const [ typeProducts, setTypeProducts ] = useState([]);

  const onGenderChange = value => {
    switch (value) {
      case 'male':
        form.setFieldsValue({
          note: 'Hi, man!',
        });
        return;

      case 'female':
        form.setFieldsValue({
          note: 'Hi, lady!',
        });
        return;

      case 'other':
        form.setFieldsValue({
          note: 'Hi there!',
        });
    }
  };

  const onFinish = values => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  const onFill = () => {
    form.setFieldsValue({
      note: 'Hello world!',
      gender: 'male',
    });
  };


  useEffect(() => {
    const abortController = new AbortController();
    fetch('http://localhost:4000/market/',{ signal: abortController.signal})
        .then(response => response.json())
        .then(response => setMarkets(response.data))
        .catch(err=>console.error(err))
    return () => {
        abortController.abort();
    };
  }
  ,[])

  useEffect(() => {
    const abortController = new AbortController();
    fetch('http://localhost:4000/typeproduct/',{ signal: abortController.signal})
        .then(response => response.json())
        .then(response => setTypeProducts(response.data))
        .catch(err=>console.error(err))
    return () => {
        abortController.abort();
    };
  }
  ,[])
  return (
    <Form {...layout} form={form} name="control-hooks" onFinish={handleSubmit}>
      <Form.Item
        name="marketId"
        label="Tên Cửa Hàng"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select
          placeholder="Select a option and change input text above"
          onChange={onGenderChange}
          allowClear
        >
          {
            markets.map(m => {
              return (
                <Option value={m.id}>{m.name}</Option>
              )
            })
          }
        </Select>
      </Form.Item>

      <Form.Item
        name="typeId"
        label="Loaị Sản Phẩm"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select
          placeholder="Select a option and change input text above"
          onChange={onGenderChange}
          allowClear
        >
          {
            typeProducts.map(m => {
              return (
                <Option value={m.id}>{m.name}</Option>
              )
            })
          }
        </Select>
      </Form.Item>

      <Form.Item
        name="status"
        label="Trạng Thái Sản Phẩm"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select
          placeholder="Select a option and change input text above"
          onChange={onGenderChange}
          allowClear
        >
          <Option value="bán chạy">Bán Chạy</Option>
          <Option value="khuyến mãi">Khuyến Mãi</Option>
          <Option value="nổi bật">Nổi Bật</Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="productName"
        label="Product Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input value={product.productName} onChange={handleChange} name="productName"/>
      </Form.Item>

      <Form.Item
        name="price"
        label="Price"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input value={product.price} onChange={handleChange} name="price"/>
      </Form.Item>

      <Form.Item
        name="info"
        label="Info"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input  value={product.info} onChange={handleChange} name="info"/>
      </Form.Item>
      <Form.Item
        name="Image"
        label="Image"
        rules={[
          {
            required: true,
          },
        ]}
      >
      <Input  value={product.image} onChange={handleChange} name="image"/>
      </Form.Item>
      <Form.Item
        name="mass"
        label="Mass"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input  value={product.mass} onChange={handleChange} name="mass"/>
      </Form.Item>

      <Form.Item
        name="origin"
        label="Origin"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input  value={product.origin} onChange={handleChange} name="origin"/>
      </Form.Item>
      {/* <Form.Item
        noStyle
        shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
      >
        {({ getFieldValue }) =>
          getFieldValue('gender') === 'other' ? (
            <Form.Item
              name="customizeGender"
              label="Customize Gender"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input onChange={handleChange} />
            </Form.Item>
          ) : null
        }
      </Form.Item> */}
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>
        <Button type="link" htmlType="button" onClick={onFill}>
          Fill form
        </Button>
      </Form.Item>
    </Form>
  );
}
export default AddCreateProductPage;
