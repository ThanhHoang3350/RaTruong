import React from 'react';
import { Route, NavLink, Link } from 'react-router-dom';

import { Drawer, Button, Radio, Space } from 'antd';

// const RadioGroup = Radio.Group;

const MenuLink = ({ menu }) => {
	return (
		<Route path={menu.to} exact={menu.exact}
			children=
				{
					({ match }) => {
						let active = (match !== null && match.isExact===true) ? "active" : "";
						return (
              <li className={`nav-item ${active}`}>
                <NavLink to={menu.to} className="nav-link" >
                    <i className="fas fa-fw fa-table" />
                    <span>{menu.name}</span>
                </NavLink>
              </li>
						)
					}
				}
		/>
	)
}

function createMenu() {
  let menus  = [];
  menus.push({to: '/order', exact: true, name: 'Quản lý đơn hàng'});
  menus.push({to: '/employees', exact: true, name: 'Quản lý nhân viên'});
  menus.push({to: '/customer', exact: true, name: 'Quản lý khách hàng'});
  return menus;
}

function showMenus() {
  let xhtml = null;
  let menus  = createMenu();
  if(menus.length > 0 ){
    xhtml = menus.map((menu, index)=> {
        return (
          <MenuLink menu={menu} key={index} />
        );
    });
  }
  return xhtml;
}

function Sidebar() {
  return (
      <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
          <Link to={'/'} className="sidebar-brand d-flex align-items-center justify-content-center">
              <div className="sidebar-brand-icon rotate-n-15">
                  <i className="fas fa-laugh-wink" />
              </div>
              <div className="sidebar-brand-text mx-3">ADMIN</div>
          </Link>

          {/* Nav Item - Tables */}
          {showMenus()}
          {/* Divider */}
          <hr className="sidebar-divider d-none d-md-block" />
          {/* Sidebar Toggler (Sidebar) */}
          <div className="text-center d-none d-md-inline">
              <button className="rounded-circle border-0" id="sidebarToggle" />
          </div>
      </ul>
  );
}


export default Sidebar;
