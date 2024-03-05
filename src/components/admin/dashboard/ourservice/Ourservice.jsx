import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal'; // Import the modal library

const Ourservice = () => {
  const [services, setServices] = useState([
    { id: 1, name: 'Service 1', description: 'Description for Service 1', video: 'video1.mp4' },
    { id: 2, name: 'Service 2', description: 'Description for Service 2', video: 'video2.mp4' },
    // Add more services as needed
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedService, setSelectedService] = useState(null); // Track the selected service for the modal
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control the modal visibility
  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/admin/dashboard/edit-ourservice/${id}`);
  };

  const handleDelete = (index) => {
    const shouldDelete = window.confirm(`Are you sure you want to delete service with index: ${index}`);

    if (shouldDelete) {
      setServices((prevServices) => prevServices.filter((service, i) => i !== index));
    }
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length);
  };

  const handleView = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedService(null);
    setIsModalOpen(false);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-black text-center">Service Management</h2>
      <div className="">

        <button
          onClick={() => navigate("/admin/dashboard/uploadourservice")}
          className="font-semibold px-3 py-1 bg-green-600 hover:underline dark:text-cyan-500 mr-0"
        >
          Upload
        </button>
        <table className="table-auto w-full mt-4 text-black container mx-auto p-4 bg-white box-decoration-slice  shadow-2xl shadow-blue-gray-900">
          <thead>
            <tr>
              <th className="py-2 px-4 border">Index</th>
              <th className="py-2 px-4 border">Service Name</th>
              <th className="py-2 px-4 border">Description</th>
              <th className="py-2 px-4 border">Video</th>
              <th className="py-2 px-4 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b text-center">{service.id}</td>
                <td className="py-2 px-4 border-b text-center">{service.name}</td>
                <td className="py-2 px-4 border-b text-center">{service.description}</td>
                <td className="py-2 px-4 border-b text-center">{service.video}</td>
                <td className="py-2 px-4 border-b text-center">
                  <button
                    onClick={() => handleEdit(service.id)}
                    className="bg-blue-500 text-white px-2 py-1 mr-2 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="bg-red-500 text-white px-2 py-1 mr-2 rounded"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleView(service)}
                    className="bg-yellow-500 text-white px-2 py-1 rounded"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className='flex justify-between items-center mt-4'>
          <button
            onClick={handleNext}
            className="font-semibold px-3 py-1 bg-blue-600 hover:underline text-white mr-2"
          >
            Next
          </button>
          <button
            onClick={handlePrevious}
            className="font-semibold px-3 py-1 bg-blue-600 hover:underline text-white mr-2"
          >
            Previous
          </button>
        </div>
      </div>

      {/* Modal for viewing service details */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="Modal"
        overlayClassName="Overlay"
      >
        {selectedService && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center">
            <div className="bg-white p-4 rounded shadow-md w-[600px]">  
            <button
            onClick={closeModal}
            className="bg-blue-500 text-white px-2 py-1 mt-4 float-right"
          >
            X
          </button>  
             <h2>Service Details</h2>
            <p>ID: {selectedService.id}</p>
            <p>Name: {selectedService.name}</p>
            <p>Description: {selectedService.description}</p>
            <p>Video: {selectedService.video}</p>
            {/* Add more details as needed */}
          </div>
          </div>

        )}
      </Modal>

    </div>
  );
};

export default Ourservice;
