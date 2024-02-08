import React, { useState } from 'react';
import { Avatar, Dropdown, Navbar } from 'flowbite-react';

function Navbars() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <Navbar fluid rounded className="h-16 flex justify-between items-center">
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearch}
          className="px-3 py-1 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="flex justify-end items-center absolute top-0 right-0">

      <Dropdown
      label={
        <Avatar
        alt="User settings"
        img="https://dagmawiamare.netlify.app/assets/dagi-vVZ85jA3.png"
        rounded
        className="w-8 h-3 m-0 " // Set a smaller size
      />
      }
    >
    <Dropdown.Header>
      <span className="block text-sm font-medium">dagm </span>
      <span className="block truncate text-xs">name@gmail.com.com</span> 
    </Dropdown.Header>
    <Dropdown.Item  className="w-25 h-8   ">Dashboard</Dropdown.Item>
    <Dropdown.Item className="w-30 h-8  ">Settings</Dropdown.Item>
    <Dropdown.Item className="w-30 h-8  ">Earnings</Dropdown.Item>
    <Dropdown.Divider />
    <Dropdown.Item className="w-30 h-8  ">Sign out</Dropdown.Item>
  </Dropdown>
</div>

    </Navbar>
  );
}

export default Navbars;
