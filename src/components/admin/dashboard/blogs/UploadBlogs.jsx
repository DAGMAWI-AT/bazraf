import React, { useState } from 'react'

function UploadBlogs({onUpload}) {

    const [formData, setFormData] = useState({
        titel: '',
        description: '',
        image: '',

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
          description: '',
          image: '',
          
        });
      };
  return (
    <div className="max-w-5xl mx-auto mt-4">
      <h2 className="text-center text-black mb-4">Upload Blogs</h2>

      <form
        className="bg-white shadow-md rounded-md p-8 text-black"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              name="title"
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              required
            />
          </div>
          <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Image URL</label>
          <input
            type="file"  
            name="image"
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>        
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
         
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Product Description</label>
            <textarea
              name="description"
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              required
            ></textarea>
          </div>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Upload Blogs
        </button>
      </form>
    </div>
  );
}

export default UploadBlogs
