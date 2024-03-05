import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function EditGallery() {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    carmodal: '',
    image: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with data:', formData);
    // Implement logic to update the gallery data (e.g., make an API call)
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-3xl font-bold mb-4 text-center text-gray-900">Edit Cars Gallery</h2>
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md text-black">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-semibold text-gray-600">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border border-blue-500  rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="carmodal" className="block text-sm font-semibold text-gray-600">
            Car Model
          </label>
          <input
            type="text"
            id="carmodal"
            name="carmodal"
            value={formData.carmodal}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border border-blue-500 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-semibold text-gray-600">
            Car Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border border-blue-500 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Update
        </button>
      </form>
    </div>
  );
}

export default EditGallery;
