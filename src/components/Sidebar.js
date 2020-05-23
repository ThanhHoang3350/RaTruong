import React, { useState } from 'react';
import './Sidebar.css';
import "antd/dist/antd.css";


import { Route, NavLink, Link } from 'react-router-dom';
import { Button, Radio, Space, Menu } from 'antd';

import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  BarChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';

function Sidebar() {
  const [ collapsed, setCollapsed ] = useState(false);
  const { SubMenu } = Menu;

  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  };

  return (
    collapsed  ?
      <div className="Wrap-sidebar-mini">
        <div className="Wrap-top-menu-mini">
          <Button className="Button-menu-mini" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
          </Button>
        </div>

        <Menu
          className="Menu-mini"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
        >

          <Menu.Item key="1" icon={<BarChartOutlined />}>
            <Link to="/order" className="Link">
              THỐNG KÊ DOANH THU
            </Link>
          </Menu.Item>

          <Menu.Item key="2" icon={<PieChartOutlined/>}>
            <Link to="/customer" className="Link">
              QUẢN LÍ ĐƠN HÀNG
            </Link>
          </Menu.Item>

          <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Quản lý sản phẩm">
            <Menu.Item key="3" to>
              <Link to="/product">
                DANH SÁCH SẢN PHẨM
              </Link>
            </Menu.Item>
            <Menu.Item key="4" to>
              <Link to="/customer">
                TÊN SẢN PHẨM
              </Link>
            </Menu.Item>
          </SubMenu>

          <SubMenu key="sub3" icon={<AppstoreOutlined />} title="QUẢN LÍ SHIPPER">
            <Menu.Item key="5">
              <Link to="/order">
                DANH SÁCH DUYỆT ĐĂNG KÍ
              </Link>
            </Menu.Item>
            <Menu.Item key="6" to>
              <Link to="/customer">
                DANH SÁCH NGƯỜI GIAO HÀNG
              </Link>
            </Menu.Item>
          </SubMenu>

          <SubMenu key="sub4" icon={<AppstoreOutlined />} title="QUẢN LÍ KHÁCH HÀNG">
            <Menu.Item key="7">
              <Link to="/order">
                DANH SÁCH DUYỆT ĐĂNG KÍ
              </Link>
            </Menu.Item>
            <Menu.Item key="8" to>
              <Link to="/customer">
                DANH SÁCH NGƯỜI GIAO HÀNG
              </Link>
            </Menu.Item>
          </SubMenu>

        </Menu>
      </div>
      :
      <div className="Wrap-sidebar">
        <div className="Wrap-top-menu">
          <div className="Logo-menu">KingBook</div>
          <Button className="Button-menu" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
          </Button>
        </div>

        <Menu
          className="Menu"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
        >

          <Menu.Item key="1" icon={<BarChartOutlined />}>
            <Link to="/order" className="Link">
                THỐNG KÊ DOANH THU
            </Link>
          </Menu.Item>

          <Menu.Item key="2" icon={<PieChartOutlined />}>
            <Link to="/customer" className="Link">
              QUẢN LÍ ĐƠN HÀNG
            </Link>
          </Menu.Item>

          <SubMenu key="sub2" icon={<AppstoreOutlined />} title="QUẢN LÍ SẢN PHẨM">
            <Menu.Item key="3" to>
              <Link to="/product">
                DANH SÁCH SẢN PHẨM
              </Link>
            </Menu.Item>
            <Menu.Item key="4" to>
              <Link to="/addproduct">
                THÊM SẢN PHẨM
              </Link>
            </Menu.Item>
          </SubMenu>

          <SubMenu key="sub3" icon={<AppstoreOutlined />} title="QUẢN LÍ NGƯỜI GIAO HÀNG">
            <Menu.Item key="5">
              <Link to="/order">
                DANH SÁCH DUYỆT ĐĂNG KÍ
              </Link>
            </Menu.Item>
            <Menu.Item key="6" to>
              <Link to="/customer">
                DANH SÁCH SHIPPER
              </Link>
            </Menu.Item>
          </SubMenu>

          <SubMenu key="sub4" icon={<AppstoreOutlined />} title="QUẢN LÍ KHÁCH HÀNG">
            <Menu.Item key="7">
              <Link to="/order">
                DANH SÁCH DUYỆT ĐĂNG KÍ
              </Link>
            </Menu.Item>
            <Menu.Item key="8" to>
              <Link to="/customer">
                DANH SÁCH SHIPPER
              </Link>
            </Menu.Item>
          </SubMenu>

        </Menu>
      </div>
    )
}

export default Sidebar;
