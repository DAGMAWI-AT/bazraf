import React, { useState } from 'react';

function UploadTestimoni({ onUpload }) {
  const [formData, setFormData] = useState({
    prof: '',
    cover: '',
    text: '',
    name: '',
    address: '',
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
      prof: '',
      cover: '',
      text: '',
      name: '',
      address: '',
    });
  };

  return (
    <div>
      <h2 className="dark:text-black text-center" style={{ color: '#2d2e2e' }}>Upload Testimonial Data</h2>
      <div className="max-w-5xl mx-auto mt-4">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-md p-8">
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="mb-4">
          <label htmlFor="prof" className="block text-sm font-semibold text-gray-600">Profession:</label>
          <input
            type="text"
            id="prof"
            name="prof"
            value={formData.prof}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>
        <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-semibold text-gray-600">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded-md p-2 w-full"
        />
      </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-semibold text-gray-600">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>

      
        <div className="mb-4">
          <label htmlFor="cover" className="block text-sm font-semibold text-gray-600">Cover:</label>
          <input
            type="file"
            id="cover"
            name="cover"
            value={formData.cover}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="mb-4">
        <label htmlFor="text" className="block text-sm font-semibold text-gray-600">Text:</label>
        <textarea
          id="text"
          name="text"
          value={formData.text}
          onChange={handleChange}
          required
          rows="4"
          className="border border-gray-300 rounded-md p-2 w-full"
        ></textarea>
      </div>
        </div>
        {/* Add other form fields as needed */}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Upload
        </button>
      </form>
      </div>
    </div>
  );
}

export default UploadTestimoni;
