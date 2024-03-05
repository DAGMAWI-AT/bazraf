import React, { useState } from "react";

function UploadAboutDepartment() {
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    description: "",
    services: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission, you can send the data to your backend or perform any other actions.
    console.log("Form submitted:", formData);
  };

  return (
    <div className="max-w-5xl mx-auto mt-4">
      <h2 className="text-center text-black">Upload About Department</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-md p-8 text-black"
      >
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Title:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="services"
              className="block text-sm font-medium text-gray-700"
            >
              Services (comma-separated):
            </label>
            <input
              type="text"
              id="services"
              name="services"
              value={formData.services}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description:
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700"
            >
              Image URL:
            </label>
            <input
              type="file"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Upload
        </button>
      </form>
    </div>
  );
}

export default UploadAboutDepartment;
