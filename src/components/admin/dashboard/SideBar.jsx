// components/SideBar.js
import React, { useState } from 'react';
import { Sidebar } from 'flowbite-react';
import { BiBuoy } from 'react-icons/bi';
import { HiArrowSmRight, HiChartPie, HiInbox, HiLogout, HiMenu, HiOutlineCloudUpload, HiOutlineMenu, HiOutlineMenuAlt4, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import "./admin.css";

function SideBar() {
  const [isCollapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed((prevCollapsed) => !prevCollapsed);
  };

  return (
    <div className={`sidebar-wrapper ${isCollapsed ? 'collapsed' : ''}`}>

      <Sidebar
        aria-label="Sidebar with content separator example"
        style={{ background: "#061535" }}
      >
      <Sidebar.Items className="toggle-collapse" onClick={toggleCollapse}>
      {isCollapsed ? <HiOutlineMenu /> : <HiMenu />}
      </Sidebar.Items>
        <Sidebar.Logo href="/admin/dashboard" img="../../IMGlogo1.jpg" className='AdminLogo' imgAlt="Flowbite logo">
        {isCollapsed ? null : <p>Bazra Motors</p>}  
        </Sidebar.Logo>

        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="/admin/dashboard" icon={HiChartPie} className="sidebar-item">
              {isCollapsed ? null : <p>Dashboard</p>}
            </Sidebar.Item>
            <Sidebar.Item href="/admin/dashboard/managecars" icon={HiViewBoards} className="sidebar-item">
              {isCollapsed ? null : <p>Manage Cars</p>}
            </Sidebar.Item>
            <Sidebar.Item href="/admin/dashboard/uploadcars" icon={HiOutlineCloudUpload} className="sidebar-item">
              {isCollapsed ? null : <p>Upload Cars</p>}
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiInbox} className="sidebar-item">
              {isCollapsed ? null : <p>Inbox</p>}
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiUser} className="sidebar-item">
              {isCollapsed ? null : <p>Users</p>}
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiShoppingBag} className="sidebar-item">
              {isCollapsed ? null : <p>Blogs</p>}
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiArrowSmRight} className="sidebar-item">
              {isCollapsed ? null : <p>Sign In</p>}
            </Sidebar.Item>
            <Sidebar.Item href="/logout" icon={HiLogout} className="sidebar-item">
              {isCollapsed ? null : <p>Log Out</p>}
            </Sidebar.Item>
          </Sidebar.ItemGroup>

          <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={HiChartPie} className="sidebar-item">
              {isCollapsed ? null : <p>Create User</p>}
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiViewBoards} className="sidebar-item">
              {isCollapsed ? null : <p>Settings</p>}
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={BiBuoy} className="sidebar-item">
              {isCollapsed ? null : <p>Help</p>}
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
}

export default SideBar;
