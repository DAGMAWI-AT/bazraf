import React, { useState, useEffect } from 'react';

function EditAboutDepartment({ departmentId }) {
  const [formData, setFormData] = useState({
    title: '',
    image: '',
    description: '',
    services: '',
  });

  useEffect(() => {
    // Fetch the department details based on departmentId from your API or state
    // Update the state with the fetched data
    // For now, I'm using a dummy data for illustration purposes
    const dummyData = {
      id: '1',
      title: 'Marketing Department',
      image: '../../../m.jpg',
      description:
        'Our Marketing Department is dedicated to promoting our products and services to a wider audience. We employ innovative strategies to create brand awareness and drive customer engagement.',
      services: ['Social Media Campaigns', 'Content Marketing', 'Market Research'],
    };

    setFormData({
      title: dummyData.title,
      image: dummyData.image,
      description: dummyData.description,
      services: dummyData.services.join(', '), // Convert services array to comma-separated string
    });
  }, [departmentId]);

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
    console.log('Form submitted:', formData);
    // Add logic to update the department details in your backend or state
  };

  return (
    <div className="max-w-5xl mx-auto mt-4">
      <h2 className="text-center text-black">Edit About Department</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-md p-8 text-black"
      >
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
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
            <label htmlFor="services" className="block text-sm font-medium text-gray-700">
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
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
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
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">
              Image URL:
            </label>
            <input
              type="text"
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
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Update
        </button>
      </form>
    </div>
  );
}

export default EditAboutDepartment;
