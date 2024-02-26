// SlidCarsGallery.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ViewModal = ({ isOpen, closeModal, data }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white p-4 rounded shadow-md max-w-[600px] w-full max-h-[400px]">
          <button className="float-right text-gray-500" onClick={closeModal}>
            X
          </button>
          <h2 className="text-2xl font-bold mb-4">{data?.name}</h2>
          <p className="text-gray-700 mb-4">{data?.carmodal}</p>
          <img src={data?.image} alt="Car" className="max-w-full h-auto object-cover mb-4" />
        </div>
      </div>
    </div>
  );
};

const SlidCarsGallery = () => {
  const navigate = useNavigate();

  const data = [
    { id: 1, name: 'Car 1', carmodal: 'Model A', image: 'path/to/image1.jpg' },
    { id: 2, name: 'Car 2', carmodal: 'Model B', image: 'path/to/image2.jpg' },
  ];

  const [currentProductId, setCurrentProductId] = useState(0);
  const [isViewModalOpen, setViewModalOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  const handleView = (rowData) => {
    setSelectedData(rowData);
    setViewModalOpen(true);
  };

  const handleEdit = (rowData) => {
    navigate(`/admin/dashboard/edit-cargallery_slide/${rowData.id}`);
  };

  const handleDelete = (rowData) => {
    // Implement your delete action here
    console.log('Delete:', rowData);
  };

  const handleUpload = () => {
    navigate('/admin/dashboard/uploadcargallery_slide');
  };

  const handleNext = () => {
    const nextProductId = currentProductId + 1;
    if (nextProductId < data.length) {
      setCurrentProductId(nextProductId);
    }
  };

  const handlePrevious = () => {
    const previousProductId = currentProductId - 1;
    if (previousProductId >= 0) {
      setCurrentProductId(previousProductId);
    }
  };

  const currentProduct = data[currentProductId];

  return (
    <div className="px-4 my-12">
    <div className="container mx-auto p-4 bg-white box-decoration-slice  shadow-2xl shadow-blue-gray-900">
    <button
        onClick={handleUpload}
        className="font-semibold px-3 py-1 bg-green-600 hover:underline dark:text-cyan-500 mr-2"
      >
        Upload
      </button>

      <table className="mt-8 w-full table-auto text-gray-600">
        <thead>
          <tr>
            <th className="border  text-center p-3">Id</th>
            <th className="border  text-center p-3">Name</th>
            <th className="border  text-center p-3">Car Model</th>
            <th className="border  text-center p-3">Car Image</th>
            <th className="border  text-center p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr key={currentProductId}>
            <td className="px-4 py-2 text-center">{currentProduct?.id}</td>
            <td className="text-center">{currentProduct?.name}</td>
            <td className="text-center">{currentProduct?.carmodal}</td>
            <td className="text-center">
              <img src={currentProduct?.image} alt="Car" className="mx-auto max-w-[50px] max-h-[50px]" />
            </td>
            <td className="px-4 py-2">
              <button onClick={() => handleView(currentProduct)} className="bg-green-500 text-white px-2 py-1">
                View
              </button>
              <button
                onClick={() => handleEdit(currentProduct)}
                className="bg-blue-500 text-white px-2 py-1 mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(currentProduct)}
                className="bg-red-500 text-white px-2 py-1"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="mt-4 flex justify-between">
        <button onClick={handlePrevious} className="font-semibold px-3 py-1 bg-blue-600 text-white">
          Previous
        </button>
        <span className="font-bold text-gray-800">{currentProduct?.id}</span>
        <button onClick={handleNext} className="font-semibold px-3 py-1 bg-blue-600 text-white">
          Next
        </button>
      </div>

      <ViewModal
        isOpen={isViewModalOpen}
        closeModal={() => setViewModalOpen(false)}
        data={selectedData}
      />
    </div>
    </div>
  );
};

export default SlidCarsGallery;
