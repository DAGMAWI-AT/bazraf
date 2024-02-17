import React, { useState } from 'react';

function UploadCarsGallery() {
  const [uploadFile, setUploadFile] = useState(null);

  const handleUpload = (event) => {
    const file = event.target.files[0];
    setUploadFile(file);
  };

  return (
    <div>
      <div className="rounded-md p-6 bg-gray-200">
        <div className="max-w-5xl mx-auto mt-4">
          <form onSubmit="" className="bg-white shadow-md rounded-md p-8 text-black">
          <div className='grid grid-cols-2 gap-4 mt-4'>
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                className="mt-1 p-2 w-full border border-blue-500 rounded-md"
                placeholder="Car Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Car Model</label>
              <input
                type="text"
                className="mt-1 p-2 w-full border border-blue-500 rounded-md"
                placeholder="Car Model"
              />
            </div>
            </div>
            <div className="mb-4 m-4">
              <label htmlFor="fileInput" className="text-lg font-bold block">Upload Image:</label>
              <input
                type="file"
                id="fileInput"
                accept=".json"
                className="mt-1 border border-blue-500 rounded p-2 font-bold"
                onChange={handleUpload}
              />
            </div>
            <div>
              <button
                type="button"
                className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Add to Gallery
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UploadCarsGallery;
