import React, { useState } from 'react';

const UploadOurservice = ({ onUpload }) => {
  const [newService, setNewService] = useState({
    name: '',
    description: '',
    video: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewService((prevService) => ({ ...prevService, [name]: value }));
  };

  const handleUpload = () => {
    // Perform validation if needed

    // Pass the new service data to the parent component
    onUpload(newService);

    // Clear the form after uploading
    setNewService({
      name: '',
      description: '',
      video: '',
    });
  };

  return (
    <div className="max-w-5xl mx-auto mt-4">
    <h2 className="text-2xl font-bold mb-4 text-gray-600 text-center">Upload New Service</h2>
      <form onSubmit="" className="bg-white shadow-md rounded-md p-8 text-black">
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Service Name</label>
          <input
            type="text"
            name="name"
            value={newService.name}
            onChange={handleChange}
            className="mt-1 p-2 border border-blue-500 rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Video</label>
          <input
            type="file"
            name="video"
            value={newService.video}
            onChange={handleChange}
            className="mt-1 p-2 border border-blue-500 rounded-md w-full"
          />
        </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            name="description"
            value={newService.description}
            onChange={handleChange}
            className="mt-1 p-2 border border-blue-500 rounded-md w-full"
          ></textarea>
        </div>
        
        <button
          type="button"
          onClick={handleUpload}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Upload Service
        </button>
      </form>
    </div>
  );
};

export default UploadOurservice;
