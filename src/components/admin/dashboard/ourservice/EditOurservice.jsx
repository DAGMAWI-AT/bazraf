// EditOurservice.jsx

import React, { useState, useEffect } from 'react';

const EditOurservice = () => {
  const [editedService, setEditedService] = useState({
    id: '',
    name: '',
    description: '',
    video:'',
  });

  // useEffect(() => {
  //   // Update the form values when the service prop changes
  //   setEditedService({
  //     id: service.id,
  //     name: service.name,
  //     description: service.description,
  //     video: service.video,
  //   });
  // }, [service]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedService((prevService) => ({ ...prevService, [name]: value }));
  };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFooter((prevFooter) => ({
  //     ...prevFooter,
  //     [name]: value,
  //   }));
  // };

  // const handleUpdate = () => {
  //   // Perform validation if needed

  //   // Pass the updated service data to the parent component
  //   onUpdate(editedService);
  // };

  return (
    <div>
    <h2 className="dark:text-black text-center" style={{ color: '#2d2e2e' }}>Edit Testimonial</h2>
    <div className="max-w-5xl mx-auto mt-4">
      <form onSubmit="" className="bg-white shadow-md rounded-md p-8 text-black">
        <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Service Name</label>
          <input
            type="text"
            name="name"
            // value={editedService.name}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Video</label>
          <input
            type="file"
            name="video"
            // value={editedService.video}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            name="description"
            // value={editedService.description}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          ></textarea>
        </div>
        
        <button
          type="button"
          onClick=''
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Update Service
        </button>
      </form>
    </div>
    </div>

  );
};

export default EditOurservice;
