import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UploadOverview = () => {
  const [overviewData, setoverviewData] = useState({
    hTitle: '',
    number: '',
    iconFile: null,
    title: '',
    description: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setoverviewData((prevData) => ({
      ...prevData,
      [name]: name === 'iconFile' ? files[0] : value,
    }));
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("hTitle", overviewData.hTitle);
    formData.append("number", overviewData.number);
    formData.append("title", overviewData.title);
    formData.append("description", overviewData.description);
    formData.append("iconFile", overviewData.iconFile);

    // Add your fetch logic to send the data to the server
    fetch("https://bazra.onrender.com/bzoverview", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Data added successfully:", data);
        alert("Data added successfully");
        navigate("/admin/dashboard/managecompanyoverview");
      })
      .catch((error) => {
        console.error("Error adding Data:", error);
      });
  };

  return (
    <div className="max-w-5xl mx-auto mt-4">
      <form onSubmit={handleSubmit} className="flex flex-wrap -mx-4  bg-white shadow-md rounded-md p-8 text-black">
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label htmlFor="hTitle" className="block text-sm font-medium text-gray-600">
              Heading Title:
            </label>
            <input
              type="text"
              id="hTitle"
              name="hTitle"
              value={overviewData.hTitle}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full"
              required
            />
          </div>

          <div>
            <label htmlFor="number" className="block text-sm font-medium text-gray-600">
              Number:
            </label>
            <input
              type="text"
              id="number"
              name="number"
              value={overviewData.number}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label htmlFor="iconFile" className="block text-sm font-medium text-gray-600">
              Icon:
            </label>
            <input type="file" id="iconFile" name="iconFile" onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
            required/>
          </div>

          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-600">
              Title:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={overviewData.title}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full"
              required
            />
          </div>
        </div>

        <label htmlFor="description" className="block text-sm font-medium text-gray-600 mt-4">
          Description:
        </label>
        <textarea
          id="description"
          name="description"
          value={overviewData.description}
          onChange={handleChange}
          className="mt-1 p-8 border rounded-md w-full" required
        ></textarea>

        <button type="submit" className="mt-6 bg-green-500 text-white p-2 rounded-md hover:bg-green-600">
          Add Overview
        </button>
      </form>
    </div>
  );
};

export default UploadOverview;
