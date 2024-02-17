import React, { useState } from 'react';

const UploadFooters = ({ onUpload }) => {
  const [formData, setFormData] = useState({
    title: '',
    // Add other fields as needed
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
    // You can perform validation here before submitting
    onUpload(formData);
    // Reset the form after submitting
    setFormData({
      title: '',
      // Reset other fields as needed
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Upload Footer Data</h2>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-md p-4">
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-semibold text-gray-600">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="border border-gray-300 text-black rounded-md p-2 w-full"
          />
        </div>
        {/* Add other form fields as needed */}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Upload
        </button>
      </form>
    </div>
  );
};

export default UploadFooters;
