// components/SideBar.js
import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiLogout,
  HiMenu,
  HiOutlineCloudUpload,
  HiOutlineMenu,
  HiOutlineMenuAlt4,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
import "./admin.css";

function SideBar() {
  const [isCollapsed, setCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState(""); // State to track the active item

  const toggleCollapse = () => {
    setCollapsed((prevCollapsed) => !prevCollapsed);
  };
  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  return (
    <div className={`sidebar-wrapper ${isCollapsed ? "collapsed" : ""}`}>
      <Sidebar
        aria-label="Sidebar with content separator example"
        style={{ background: "#2a2185" }}
      >
        <Sidebar.Items className="toggle-collapse" onClick={toggleCollapse}>
          {isCollapsed ? <HiOutlineMenu /> : <HiMenu />}
        </Sidebar.Items>
        <Sidebar.Logo
          as={Link}
          to="/admin/dashboard"
          img="../../IMGlogo1.jpg"
          className="AdminLogo"
          imgAlt="Bazra"
        >
          {isCollapsed ? null : <p>Bazra Motors</p>}
        </Sidebar.Logo>

        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item
              as={Link}
              to="/admin/dashboard"
              icon={HiChartPie}
              className={`sidebar-item ${
                activeItem === "Dashboard" ? "active" : ""
              }`}
              onClick={() => handleItemClick("Dashboard")}
            >
              {isCollapsed ? null : <p>Dashboard</p>}
            </Sidebar.Item>
            <Sidebar.Item
              as={Link}
              to="/admin/dashboard/managebanner"
              icon={HiViewBoards}
              className={`sidebar-item ${
                activeItem === "Banner" ? "active" : ""
              }`}
              onClick={() => handleItemClick("Banner")}
            >
              {isCollapsed ? null : <p>Banner</p>}
            </Sidebar.Item>
            <Sidebar.Item
              as={Link}
              to="/admin/dashboard/managecars"
              icon={HiViewBoards}
              className={`sidebar-item ${
                activeItem === "Portfolio" ? "active" : ""
              }`}
              onClick={() => handleItemClick("Portfolio")}
            >
              {isCollapsed ? null : <p>Portfolio</p>}
            </Sidebar.Item>
            <Sidebar.Item
              as={Link}
              to="/admin/dashboard/managewhoweare"
              icon={HiInbox}
              className={`sidebar-item ${
                activeItem === "Who Are We" ? "active" : ""
              }`}
              onClick={() => handleItemClick("Who Are We")}
            >
              {isCollapsed ? null : <p>Who Are We</p>}
            </Sidebar.Item>
            <Sidebar.Item
              as={Link}
              to="/admin/dashboard/managecompanyoverview"
              icon={HiInbox}
              className={`sidebar-item ${
                activeItem === "Overview" ? "active" : ""
              }`}
              onClick={() => handleItemClick("Overview")}
            >
              {isCollapsed ? null : <p>Overview</p>}
            </Sidebar.Item>
            <Sidebar.Item
              as={Link}
              to="/admin/dashboard/manageservice"
              icon={HiInbox}
              className={`sidebar-item ${
                activeItem === "Services" ? "active" : ""
              }`}
              onClick={() => handleItemClick("Services")}
            >
              {isCollapsed ? null : <p>Services</p>}
            </Sidebar.Item>
            <Sidebar.Item
              as={Link}
              to="/admin/dashboard/cargallery_slider"
              icon={HiUser}
              className={`sidebar-item ${
                activeItem === "Gallery" ? "active" : ""
              }`}
              onClick={() => handleItemClick("Gallery")}
            >
              {isCollapsed ? null : <p>Gallery</p>}
            </Sidebar.Item>
            <Sidebar.Item
              as={Link}
              to="/admin/dashboard/counters"
              icon={HiShoppingBag}
              className={`sidebar-item ${
                activeItem === "Counter" ? "active" : ""
              }`}
              onClick={() => handleItemClick("Counter")}
            >
              {isCollapsed ? null : <p>Counter</p>}
            </Sidebar.Item>
            <Sidebar.Item
              as={Link}
              to="/admin/dashboard/testimoni"
              icon={HiArrowSmRight}
              className={`sidebar-item ${
                activeItem === "Testimoni" ? "active" : ""
              }`}
              onClick={() => handleItemClick("Testimoni")}
            >
              {isCollapsed ? null : <p>Testimoni</p>}
            </Sidebar.Item>
            <Sidebar.Item
              as={Link}
              to="/admin/dashboard/footers"
              icon={HiLogout}
              className={`sidebar-item ${
                activeItem === "Footers" ? "active" : ""
              }`}
              onClick={() => handleItemClick("Footers")}
            >
              {isCollapsed ? null : <p>Footers</p>}
            </Sidebar.Item>
            <Sidebar.Item
              as={Link}
              to="/admin/dashboard/ourservice"
              icon={HiChartPie}
              className={`sidebar-item ${
                activeItem === "Ourservice" ? "active" : ""
              }`}
              onClick={() => handleItemClick("Ourservice")}
            >
              {isCollapsed ? null : <p>Ourservice</p>}
            </Sidebar.Item>
            <Sidebar.Item
              as={Link}
              to="/admin/dashboard/product"
              icon={HiChartPie}
              className={`sidebar-item ${
                activeItem === "Products" ? "active" : ""
              }`}
              onClick={() => handleItemClick("Products")}
            >
              {isCollapsed ? null : <p>Products</p>}
            </Sidebar.Item>
            <Sidebar.Item
              as={Link}
              to="/admin/dashboard/contacts"
              icon={HiChartPie}
              className={`sidebar-item ${
                activeItem === "Contacts" ? "active" : ""
              }`}
              onClick={() => handleItemClick("Contacts")}
            >
              {isCollapsed ? null : <p>Contacts</p>}
            </Sidebar.Item>
            <Sidebar.Item
              as={Link}
              to="/admin/dashboard/blogs"
              icon={HiChartPie}
              className={`sidebar-item ${
                activeItem === "Blogs" ? "active" : ""
              }`}
              onClick={() => handleItemClick("Blogs")}
            >
              {isCollapsed ? null : <p>Blogs</p>}
            </Sidebar.Item>
            <Sidebar.Item
            as={Link}
            to="/admin/dashboard/abouts"
            icon={HiChartPie}
            className={`sidebar-item ${
              activeItem === "Abouts" ? "active" : ""
            }`}
            onClick={() => handleItemClick("Abouts")}
          >
            {isCollapsed ? null : <p>Abouts</p>}
          </Sidebar.Item>
          </Sidebar.ItemGroup>

          <Sidebar.ItemGroup>
            <Sidebar.Item
              as={Link}
              to="/admin/dashboard/abouts"
              icon={HiChartPie}
              className={`sidebar-item ${
                activeItem === "Create User" ? "active" : ""
              }`}
              onClick={() => handleItemClick("Create User")}
            >
              {isCollapsed ? null : <p>Create User</p>}
            </Sidebar.Item>
            <Sidebar.Item
              as={Link}
              to="/admin/dashboard/settings"
              icon={HiViewBoards}
              className={`sidebar-item ${
                activeItem === "Settings" ? "active" : ""
              }`}
              onClick={() => handleItemClick("Settings")}
            >
              {isCollapsed ? null : <p>Settings</p>}
            </Sidebar.Item>
            <Sidebar.Item
              as={Link}
              to="/admin/dashboard/help"
              icon={BiBuoy}
              className={`sidebar-item ${
                activeItem === "Help" ? "active" : ""
              }`}
              onClick={() => handleItemClick("Help")}
            >
              {isCollapsed ? null : <p>Help</p>}
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
}

export default SideBar;
