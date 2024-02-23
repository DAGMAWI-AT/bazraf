// components/SideBar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
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
        <Sidebar.Logo as={Link} to="/admin/dashboard" img="../../IMGlogo1.jpg" className='AdminLogo' imgAlt="Bazra">
          {isCollapsed ? null : <p>Bazra Motors</p>}  
        </Sidebar.Logo>

        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item as={Link} to="/admin/dashboard" icon={HiChartPie} className="sidebar-item">
              {isCollapsed ? null : <p>Dashboard</p>}
            </Sidebar.Item>
            <Sidebar.Item as={Link} to="/admin/dashboard/managebanner" icon={HiViewBoards} className="sidebar-item">
              {isCollapsed ? null : <p>Banner</p>}
            </Sidebar.Item>
            <Sidebar.Item as={Link} to="/admin/dashboard/managecars" icon={HiViewBoards} className="sidebar-item">
              {isCollapsed ? null : <p>Portfolio</p>}
            </Sidebar.Item>

            <Sidebar.Item as={Link} to="/admin/dashboard/uploadcars" icon={HiOutlineCloudUpload} className="sidebar-item">
              {isCollapsed ? null : <p>Upload Portfolio</p>}
            </Sidebar.Item>
            <Sidebar.Item as={Link} to="/admin/dashboard/managewhoweare" icon={HiInbox} className="sidebar-item">
            {isCollapsed ? null : <p>Who Are We</p>}
          </Sidebar.Item>
            <Sidebar.Item as={Link} to="/admin/dashboard/managecompanyoverview" icon={HiInbox} className="sidebar-item">
              {isCollapsed ? null : <p>Overview</p>}
            </Sidebar.Item>
            <Sidebar.Item as={Link} to="/admin/dashboard/manageservice" icon={HiInbox} className="sidebar-item">
              {isCollapsed ? null : <p>Services</p>}
            </Sidebar.Item>
            <Sidebar.Item as={Link} to="/admin/dashboard/cargallery_slider" icon={HiUser} className="sidebar-item">
              {isCollapsed ? null : <p>Gallery</p>}
            </Sidebar.Item>
            <Sidebar.Item as={Link} to="/admin/dashboard/counters" icon={HiShoppingBag} className="sidebar-item">
              {isCollapsed ? null : <p>Counter</p>}
            </Sidebar.Item>
            <Sidebar.Item as={Link} to="/admin/dashboard/testimoni" icon={HiArrowSmRight} className="sidebar-item">
              {isCollapsed ? null : <p>Testimoni</p>}
            </Sidebar.Item>
            <Sidebar.Item as={Link} to="/admin/dashboard/footers" icon={HiLogout} className="sidebar-item">
              {isCollapsed ? null : <p>Footers</p>}
            </Sidebar.Item>
            <Sidebar.Item as={Link} to="/admin/dashboard/ourservice" icon={HiChartPie} className="sidebar-item">
              {isCollapsed ? null : <p>Ourservice</p>}
            </Sidebar.Item>
            <Sidebar.Item as={Link} to="/admin/dashboard/product" icon={HiChartPie} className="sidebar-item">
            {isCollapsed ? null : <p>Products</p>}
          </Sidebar.Item>
          <Sidebar.Item as={Link} to="/admin/dashboard/contacts" icon={HiChartPie} className="sidebar-item">
          {isCollapsed ? null : <p>Contacts</p>}
        </Sidebar.Item> 
        <Sidebar.Item as={Link} to="/admin/dashboard/blogs" icon={HiChartPie} className="sidebar-item">
        {isCollapsed ? null : <p>Blogs</p>}
        </Sidebar.Item>                 
          </Sidebar.ItemGroup>

          <Sidebar.ItemGroup>
            <Sidebar.Item as={Link} to="/admin/dashboard/blogs" icon={HiChartPie} className="sidebar-item">
              {isCollapsed ? null : <p>Create User</p>}
            </Sidebar.Item>
            <Sidebar.Item as={Link} to="/admin/dashboard/settings" icon={HiViewBoards} className="sidebar-item">
              {isCollapsed ? null : <p>Settings</p>}
            </Sidebar.Item>
            <Sidebar.Item as={Link} to="/admin/dashboard/help" icon={BiBuoy} className="sidebar-item">
              {isCollapsed ? null : <p>Help</p>}
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
}

export default SideBar;
