import React from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const Layout = () => (
  <div className="wrapper">
    <Sidebar />
    <div className="main p-4">
      <Outlet /> {/* This renders the current page */}
    </div>
  </div>
);

export default Layout;
