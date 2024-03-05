// SlidCarsGallery.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import { images } from '../../../data/Data';

const SlidCarsGallery = () => {
  const navigate = useNavigate();

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [isViewModalOpen, setViewModalOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  useEffect(() => {
    console.log('isViewModalOpen:', isViewModalOpen);
  }, [isViewModalOpen]);

  const handleView = (index) => {
    setSelectedData(index);
    setViewModalOpen(true);
  };

  const handleCloseModal = () => {
    console.log('Modal Closed');
    setSelectedData(null);
    setViewModalOpen(false);
  };

  const handleEdit = (index) => {
    navigate(`/admin/dashboard/edit-cargallery_slide/${index}`);
  };

  const handleDelete = (index) => {
    const shouldDelete = window.confirm('Are you sure you want to delete this item?');

    if (shouldDelete) {
      console.log(`Delete item at index ${index}`);
    }
  };

  const handleUpload = () => {
    navigate('/admin/dashboard/uploadcargallery_slide');
  };

  const handleNext = () => {
    const nextPage = currentPage + 1;
    if (nextPage <= Math.ceil(images.length / itemsPerPage)) {
      setCurrentPage(nextPage);
    }
  };

  const handlePrevious = () => {
    const previousPage = currentPage - 1;
    if (previousPage >= 1) {
      setCurrentPage(previousPage);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = images.slice(startIndex, endIndex);

  return (
    <div className="px-4 my-8">
      <div className="container mx-auto p-4 box-decoration-slice ">
        <button
          onClick={handleUpload}
          className="font-semibold px-3 py-1 bg-green-600 hover:underline dark:text-cyan-500 mr-2"
        >
          Upload
        </button>

        <table className="container text-black mx-auto p-4 bg-white box-decoration-slice shadow-2xl shadow-blue-gray-900">
          <thead>
            <tr>
              <th className="border text-center p-3">Id</th>
              <th className="border text-center p-3">Name</th>
              <th className="border text-center p-3">Car Model</th>
              <th className="border text-center p-3">Car Image</th>
              <th className="border text-center p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentProducts.map((item, index) => (
              <tr key={item.id}>
                <td className="px-4 py-2 text-center">{startIndex + index + 1}</td>
                <td className="text-center">{item.name}</td>
                <td className="text-center">{item.role}</td>
                <td className="text-center">
                  <img src={item.src} alt="Car" className="mx-auto max-w-[50px] max-h-[50px]" />
                </td>
                <td className="px-4 py-2">
                  <button onClick={() => handleView(index)} className="bg-green-500 text-white px-2 py-1">
                    View
                  </button>
                  <button onClick={() => handleEdit(index)} className="bg-blue-500 text-white px-2 py-1 mr-2">
                    Edit
                  </button>
                  <button onClick={() => handleDelete(index)} className="bg-red-500 text-white px-2 py-1">
                    Delete
                  </button>

                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-4 flex justify-between">
          <button onClick={handlePrevious} className="font-semibold px-3 py-1 bg-blue-600 text-white">
            Previous
          </button>
          <span className="font-bold text-gray-800">{currentPage}</span>
          <button onClick={handleNext} className="font-semibold px-3 py-1 bg-blue-600 text-white">
            Next
          </button>
        </div>
      </div>

      {selectedData !== null && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-4 rounded shadow-md w-[600px]">
            <button
              onClick={handleCloseModal}
              className="bg-blue-500 text-white px-2 py-1 mt-4 float-right"
            >
              Close
            </button>
            <h2 className="text-lg font-bold mb-4">Counter Details</h2>
            <p>ID: {selectedData}</p>
            <p>Name: {images[selectedData].name}</p>
            <p>Model: {images[selectedData].role}</p>
            <img src={images[selectedData].src} alt="Car" className="mx-auto max-w-[150px] max-h-[150px]" />

          </div>
        </div>
      )}
    </div>
  );
};

export default SlidCarsGallery;
