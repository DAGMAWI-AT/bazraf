import React, { useState, useEffect } from 'react';

const EditProduct = ({ product, onUpdate }) => {
  const [editedProduct, setEditedProduct] = useState({
    id: '',
    title: '',
    link: '',
    image: '',
    description: '',
  });

  useEffect(() => {
    // Update the form values when the product prop changes
    setEditedProduct({
      id: '',
      title: '',
      link: '',
      image: '',
      description: '',
    });
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  const handleUpdate = () => {
    // Perform validation if needed

    // Pass the updated product data to the parent component
    onUpdate(editedProduct);
  };

  return (
    <div>
    <h2 className="dark:text-black text-center" style={{ color: '#2d2e2e' }}>Edit Testimonial</h2>
    <div className="max-w-5xl mx-auto mt-4">
      <form onSubmit="" className="bg-white shadow-md rounded-md p-8 text-black">
        <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Product Title</label>
          <input
            type="text"
            name="title"
            value={editedProduct.title}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Product Link</label>
          <input
            type="text"
            name="link"
            value={editedProduct.link}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Image URL</label>
          <input
            type="file"
            name="image"
            value={editedProduct.image}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Product Description</label>
          <textarea
            name="description"
            value={editedProduct.description}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          ></textarea>
        </div>
        </div>
        <button
          type="button"
          onClick={handleUpdate}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Update Product
        </button>
      </form>
    </div>
    </div>
  );
};

export default EditProduct;
