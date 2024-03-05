import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import { serviceData } from '../../../data/Data';

function ServiceManage() {
  const [services, setServices] = useState([]);
  const [error, setError] = useState('');
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [servicesPerPage] = useState(3);
const navigate = useNavigate();
  // Fetch services from your API or backend on component mount
  useEffect(() => {
    // Replace this with your actual API call to fetch services
    // Example: fetchServices().then(data => setServices(data)).catch(error => setError(error.message));
    setServices(serviceData);
  }, []);

  const handleDelete = (id) => {
    const isConfirmed = window.confirm('Are you sure you want to delete this service?');

    if (isConfirmed) {
      setServices((prevServices) => prevServices.filter((service) => service.id !== id));
    }
  };

  const handleView = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };
  const handleEdit = (id) => {
    try {
      navigate(`/admin/dashboard/edit-service/${id}`);
    } catch (error) {
      console.error("Error navigating to edit page:", error);
      // Display a user-friendly error message to the user
      // You might also want to redirect them to a different page or provide additional instructions.
    }
  };
  
  
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const indexOfLastService = currentPage * servicesPerPage;
  const indexOfFirstService = indexOfLastService - servicesPerPage;
  const currentServices = services.slice(indexOfFirstService, indexOfLastService);
  const totalPages = Math.ceil(services.length / servicesPerPage);

  const handleNext = () => {
    setCurrentPage((prevPage) => (prevPage < totalPages ? prevPage + 1 : prevPage));
  };

  const handlePrevious = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  const handleCloseModal = () => {
    setSelectedService(null);
    setIsModalOpen(false);
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-center text-black mb-4">Manage Services</h2>
      <Link to="/admin/dashboard/uploadservice" className="bg-blue-500 text-white px-4 py-2 mb-4 inline-block">
        Upload Service
      </Link>

      <table className="container table-auto w-full mt-4  mx-auto text-black  bg-white box-decoration-slice  shadow-2xl shadow-blue-gray-900">
      <thead>
          <tr>
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Title</th>
            <th className="border px-4 py-2">Image</th>
            <th className="border px-4 py-2">Icon</th>
            <th className="border px-4 py-2">Description</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentServices.map((service) => (
            <tr key={service.id}>
              <td className="border px-4 py-2">{service.id}</td>
              <td className="border px-4 py-2">{service.title}</td>
              <td className="border px-4 py-2">
                <img src={service.imageUrl} alt={service.title} style={{ maxWidth: '50px' }} />
              </td>
              <td className="border px-4 py-2">{service.icon}</td>
              <td className="border px-4 py-2">{service.description}</td>
              <td className="border px-4 py-2">
                <button onClick={() => handleEdit(service.id)} 
                className="bg-blue-500 p-4 text-white px-2 py-1 mr-2"
                >
                  Edit
                </button>
                <button onClick={() => handleDelete(service.id)} 
                className="bg-red-500 text-white p-4 px-2 py-1 mr-2"
                >
                  Delete
                </button>
                <button onClick={() => handleView(service)} 
                className="bg-green-500 text-white px-2 py-1 mr-2"
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4 flex justify-between">
        <button onClick={() => handlePrevious()} disabled={currentPage === 1} className="bg-blue-500 text-white px-4 py-2">
          Previous
        </button>
        <div>
          Page {currentPage} of {totalPages}
        </div>
        <button onClick={() => handleNext()} disabled={indexOfLastService >= services.length} className="bg-blue-500 text-white px-4 py-2">
          Next
        </button>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Service Details"
        ariaHideApp={false}
      >
        {selectedService && (
          <div>
          <button onClick={handleCloseModal} className="float-right bg-blue-500 p-4 text-white px-2 py-1 mr-2">X</button>
          <img src={selectedService.imageUrl} alt={selectedService.title} style={{ maxWidth: '200px' }} />
            <h2>{selectedService.title}</h2>
            <p>{selectedService.description}</p>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default ServiceManage;
