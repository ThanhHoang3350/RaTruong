import React from 'react';
import {useSelector} from 'react-redux';
import './Header.css';
import { Link } from 'react-router-dom';

import { firebaseApp } from './../firebase';
function Header() {
    const user = useSelector((state) => state.user);
    const handleClick = () => {
		firebaseApp.auth().signOut();
	}

  return (
    <div className="App">
      <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow Header">
          {/* Sidebar Toggle (Topbar) */}
          <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
          <i className="fa fa-bars" />
          </button>
          {/* Topbar Navbar */}
          <ul className="navbar-nav ml-auto">
              <div className="topbar-divider d-none d-sm-block" />
              {/* Nav Item - User Information */}
              <li className="nav-item dropdown no-arrow">
                  <a className="nav-link dropdown-toggle" href=" #" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <span className="mr-2 d-none d-lg-inline text-gray-600 small">{user.info.username}</span>
                  <img alt="" className="img-profile rounded-circle" src="https://source.unsplash.com/QAB-WJcbgJk/60x60" />
                  </a>
                  {/* Dropdown - User Information */}
                  <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                  <a className="dropdown-item" href=" #">
                  <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />
                  Profile
                  </a>
                  <div className="dropdown-divider" />
                    <a className="dropdown-item">
                      <Link to={`/login`}>
                        <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"  />
                          Logout
                       </Link>
                    </a>
                  </div>
              </li>
          </ul>
      </nav>
    </div>
  );
}

export default Header;
