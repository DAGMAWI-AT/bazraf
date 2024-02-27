import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ServiceManage() {
  const [services, setServices] = useState([]);
  const [error, setError] = useState('');

  // useEffect(() => {
  //   // Fetch services data from your API
  //   fetch('https://bazra.onrender.com/services') // Update the URL with your actual API endpoint
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! Status: ${response.status}`);
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setServices(data);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching services:', error);
  //       setError('Error fetching services. Please try again.');
  //     });
  // }, []);
  useEffect(() => {
    fetch("https://bazra.onrender.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  const handleDelete = (id) => {
    // Implement delete logic using your API
    // Example: fetch(`http://localhost:8000/services/${id}`, { method: 'DELETE' })
    //   .then((response) => response.json())
    //   .then(() => {
    //     // Update the services state after successful deletion
    //     setServices((prevServices) => prevServices.filter((service) => service.id !== id));
    //   })
    //   .catch((error) => {
    //     console.error('Error deleting service:', error);
    //     setError('Error deleting service. Please try again.');
    //   });

    // For demonstration purposes, simulate deletion
    setServices((prevServices) => prevServices.filter((service) => service.id !== id));
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Manage Services</h2>
      <Link to="/admin/dashboard/uploadservice" className="bg-blue-500 text-white px-4 py-2 mb-4 inline-block">
        Upload Service
      </Link>
      <table className="table-auto w-full mt-4 text-black bg-white">
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
          {services.map((service) => (
            <tr key={service.id}>
              <td className="border px-4 py-2">{service.id}</td>
              <td className="border px-4 py-2">{service.title}</td>
              <td className="border px-4 py-2">
                <img src={`path/to/images/${service.image}`} alt={service.title} style={{ maxWidth: '50px' }} />
              </td>
              <td className="border px-4 py-2">
                <img src={`path/to/icons/${service.icon}`} alt={service.title} style={{ maxWidth: '30px' }} />
              </td>
              <td className="border px-4 py-2">{service.description}</td>
              <td className="border px-4 py-2">
                <Link to={`/admin/dashboard/edit-service/${service.id}`} className="bg-blue-500 text-white px-2 py-1 mr-2">
                  Edit
                </Link>
                <button onClick={() => handleDelete(service.id)} className="bg-red-500 text-white px-2 py-1">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ServiceManage;
