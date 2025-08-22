import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const { logout, user } = useAuth();
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsExpanded(prev => !prev);
  };

  return (
    <aside id="sidebar" className={isExpanded ? 'expand' : ''}>
      <div className="d-flex justify-content-between p-4">
        <div className="sidebar-logo">
          <Link to="/">Gobi Info</Link>
        </div>
        <button className="toggle-btn border-0" type="button" onClick={toggleSidebar}>
          <i id="icon" className={`bxr ${isExpanded ? 'bx-chevrons-left' : 'bx-chevrons-right'}`}></i>
        </button>
      </div>
      <ul className="sidebar-nav">
        <li className="sidebar-item">
          <Link to="/complain" className="sidebar-link">
            <i className='bxr  bx-tabs'  ></i> 
            <span>Өргөдөл, Гомдол</span>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/information" className="sidebar-link">
            <i className='bxr  bx-pencil'  ></i> 
            <span>Мэдээлэл</span>
          </Link>
        </li>
        {user?.is_admin && (
          <li className="sidebar-item">
            <Link to="/users" className="sidebar-link">
              <i className='bx bxs-shield'></i>
              <span>Хэрэглэгч</span>
            </Link>
          </li>
          
        )} 
        <li className="sidebar-item">
          <Link to="/category" className="sidebar-link">
            <i className='bxr  bx-categories'  ></i> 
            <span>Бизнес төрөл</span>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/business" className="sidebar-link">
            <i className='bxr  bx-business'  ></i> 
            <span>Бизнес бүртгэл</span>
          </Link>
        </li>
      </ul>
      <div className="sidebar-footer">
        <Link to="/logout" className="sidebar-link" onClick={() => {logout()}}>
          <i className='bxr bx-arrow-out-left-square-half'></i>
          <span>Logout</span>
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
