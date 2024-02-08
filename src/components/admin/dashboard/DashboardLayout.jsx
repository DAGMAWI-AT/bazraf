import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import "./admin.css";
import Navbars from "./Navbar";

function DashboardLayout() {
  return (
    <div className="flex flex-row md:flex-row h-screen overflow-hidden">
      <SideBar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Navbars />
        <div className="flex-grow overflow-y-auto bg-gray-200">
        <Outlet />
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
