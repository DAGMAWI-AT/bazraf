import React from 'react';
import { Sidebar } from 'flowbite-react';
import { BiBuoy } from 'react-icons/bi';
import { HiArrowSmRight, HiChartPie, HiInbox, HiLogout, HiOutlineCloudUpload, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';

function SideBar() {
  return (
    <div style={{ height: '100vh', overflowY: 'auto' }}>
      <Sidebar aria-label="Sidebar with content separator example" className='justify-between' style={{ background: "#061535" }}>
        {/* Sidebar content */}
        <Sidebar.Logo href="/admin/dashboard" img="../../IMGlogo1.jpg" imgAlt="Flowbite logo">
          Bazra Motors
        </Sidebar.Logo>

        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
              <p> Dashboard</p>
            </Sidebar.Item>
            <Sidebar.Item href="/admin/dashboard/managecars" icon={HiViewBoards}>
              <p>Manage Cars</p>
            </Sidebar.Item>
            <Sidebar.Item href="/admin/dashboard/uploadcars" icon={HiOutlineCloudUpload}>
              <p>Upload Cars</p>
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiInbox}>
              <p>Inbox</p>
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiUser}>
              <p>Users</p>
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiShoppingBag}>
              <p>Blogs</p>
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiArrowSmRight}>
              <p>Sign In</p>
            </Sidebar.Item>
            <Sidebar.Item href="/logout" icon={HiLogout}>
              <p>Log Out</p>
            </Sidebar.Item>
          </Sidebar.ItemGroup>

          <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={HiChartPie}>
              <p>Creat Uesr</p>
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiViewBoards}>
              <p>Settings</p>
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={BiBuoy}>
              <p>Help</p>
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
}

export default SideBar;
