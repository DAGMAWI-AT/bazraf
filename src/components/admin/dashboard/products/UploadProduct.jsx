import React, { useState } from 'react';

const UploadProduct = () => {
  const [productData, setProductData] = useState({
    title: '',
    link: '',
    image: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the uploaded product data, for example, store it in state or send it to a server
    console.log('Uploaded Product Data:', productData);
    // Reset the form after submission
    setProductData({
      title: '',
      link: '',
      image: '',
      description: '',
    });
  };

  return (
    <div className="max-w-5xl mx-auto mt-4">
      <h2 className="dark:text-black text-center mb-4">Upload Products</h2>

      <form
        className="bg-white shadow-md rounded-md p-8 text-black"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Product Title</label>
            <input
              type="text"
              name="title"
              value={productData.title}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Product Link</label>
            <input
              type="text"
              name="link"
              value={productData.link}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Image URL</label>
            <input
              type="file"  
              name="image"
              value={productData.image}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Product Description</label>
            <textarea
              name="description"
              value={productData.description}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              required
            ></textarea>
          </div>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Upload Product
        </button>
      </form>
    </div>
  );
};

export default UploadProduct;
