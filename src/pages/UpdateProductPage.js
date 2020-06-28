import React, { useReducer, useState, useEffect, useContext } from 'react';
import { Form, Input, Button, Select, message } from 'antd';
import axios from 'axios'
import { Link } from 'react-router-dom';
import { ProductCtx } from './ProductContext';

import './AddProductPage.css';
import { useDispatch } from 'react-redux';
import { Menu } from 'antd';

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

const UpdateProductPage = () => {

  const { productSave, setProductSave } = useContext(ProductCtx);

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

  const addProduct = () => {
    let id = productSave.id;
    const datapost = {
      productName: product.productName || productSave.productName,
      price: product.price || productSave.price,
      info: product.info || productSave.info,
      image: product.image || productSave.image,
      mass: product.mass || productSave.mass,
      origin: product.origin || productSave.origin,
      status: product.status || productSave.status,
      typeId: product.typeId || productSave.typeid,
      marketId: product.marketId || productSave.marketid,
    }
    return axios.put(`http://localhost:4000/updateproduct/${id}`, datapost)
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
    <React.Fragment>
      <div className="Title-page-add-product">Page Update Product</div>
      <Form className="Page-add-product" {...layout} form={form} name="control-hooks" onFinish={handleSubmit}>
        <Form.Item
          name="marketId"
          label="Tên Cửa Hàng"
        >
          <Select
            defaultValue={productSave.marketid === 1 ? 'Phương Nam' : productSave.marketid === 2 ? 'Cá Chép' : productSave.marketid === 3 ? 'Kim Đồng' : productSave.marketid === 4 ? 'E Book' : productSave.marketid === 5 ? 'Fahasa' : productSave.marketid === 6 ? 'Alpha Books' : productSave.marketid === 7 ? 'Thái Hà' : productSave.marketid === 8 ? 'Nhã Nam' : productSave.marketid === 9 ? 'Tri Thức Trẻ' : null}
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
        >
          <Select
            defaultValue={productSave.typeid === 1 ? 'Văn Học Việt Nam' : productSave.typeid === 2 ? 'Văn Học Nước Ngoài' : productSave.typeid === 3 ? 'Giáo Dục' : productSave.typeid === 4 ? 'Truyện Tranh' : productSave.typeid === 5 ? 'Kinh Tế' : productSave.typeid === 6 ? 'Xã Hội' : productSave.typeid === 7 ? 'Công Nghệ' : productSave.typeid === 8 ? 'Nấu Ăn' : productSave.typeid === 9 ? 'Luyện Tiếng Anh' : productSave.typeid === 10 ? 'Thể Dục Thể Thao' : productSave.typeid === 11 ? 'Văn Học Trung Quốc' : productSave.typeid === 12 ? 'Luật Pháp' : null}
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
        >
          <Select
           defaultValue={productSave.status === 'bán chạy' ? 'Bán Chạy' : productSave.status === '"khuyến mãi' ? 'Khuyến Mãi' : productSave.status === 'nổi bật' ? 'Nổi Bật' :  null}
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
          label="Tên Sản Phẩm"
        >
          <Input value={product.productName} defaultValue={productSave.productName} onChange={handleChange} name="productName"/>
        </Form.Item>

        <Form.Item
          name="price"
          label="Giá Sản Phẩm"
        >
          <Input value={product.price} onChange={handleChange} defaultValue={productSave.price} name="price"/>
        </Form.Item>

        <Form.Item
          name="info"
          label="Thông Tin"
        >
          <Input  value={product.info} onChange={handleChange} defaultValue={productSave.info} name="info"/>
        </Form.Item>
        <Form.Item
          name="Image"
          label="Hình Ảnh"
        >
        <Input  value={product.image} onChange={handleChange}  defaultValue={productSave.image} name="image"/>
        </Form.Item>
        <Form.Item
          name="mass"
          label="Tác Giả"
        >
          <Input  value={product.mass} onChange={handleChange}  defaultValue={productSave.mass} name="mass"/>
        </Form.Item>

        <Form.Item
          name="origin"
          label="Nguồn Gốc"
        >
          <Input  value={product.origin} onChange={handleChange} defaultValue={productSave.origin} name="origin"/>
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
        <Form.Item className="Wrap-button">
          <Button className="Button-submit" onClick={addProduct} type="primary" htmlType="submit">
            <Link to={`/product`}>Submit</Link>
          </Button>
          <Button htmlType="button" onClick={onReset}>
            Reset
          </Button>
        </Form.Item>
      </Form>
    </React.Fragment>
  );
}
export default UpdateProductPage;
