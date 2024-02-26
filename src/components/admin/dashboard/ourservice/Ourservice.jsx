import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Ourservice = () => {
  const [services, setServices] = useState([
    { id:1,name: 'Service 1', description: 'Description for Service 1', video: 'video1.mp4' },
    { id:2,name: 'Service 2', description: 'Description for Service 2', video: 'video2.mp4' },
    // Add more services as needed
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);
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

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-black text-center">Service Management</h2>
      <div className="container mx-auto p-4 bg-white box-decoration-slice  shadow-2xl shadow-blue-gray-900">

      <button
        onClick={() => navigate("/admin/dashboard/uploadourservice")}
        className="font-semibold px-3 py-1 bg-green-600 hover:underline dark:text-cyan-500 mr-0"
      >
        Upload
      </button>
      <table className="table-auto w-full mt-4 text-black">
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
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Delete
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

    </div>
  );
};

export default Ourservice;
