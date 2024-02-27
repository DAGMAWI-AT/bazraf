import React, { useState } from 'react';

function AboutDepartment() {
  const departmentsData = [
    {
      id: '1',
      title: 'Marketing Department',
      image: '../../../m.jpg',
      description: 'Our Marketing Department is dedicated to promoting our products and services to a wider audience. We employ innovative strategies to create brand awareness and drive customer engagement.',
      services: ['Social Media Campaigns', 'Content Marketing', 'Market Research'],
    },
    {
      id: '2',
      title: 'IT Services Department',
      image: '../../../IT.png',
      description: 'The IT Services Department ensures the smooth functioning of our digital infrastructure. We provide comprehensive IT solutions to support the organization\'s operations and security.',
      services: ['Network Management', 'Software Development', 'Cybersecurity'],
    },
    {
      id: '3',
      title: 'Agriculture Department',
      image: '../../../agi.jpg',
      description: 'The Agriculture Department plays a vital role in ensuring food security. We focus on sustainable farming practices and support local farmers in maximizing their yield.',
      services: ['Crop Management', 'Farm Support', 'Research and Development'],
    },
    {
      id: '4',
      title: 'Manufacturing Department',
      image: '../../../manif.jpg',
      description: 'The Manufacturing Department is responsible for producing high-quality goods. We prioritize efficiency and innovation in our production processes to meet consumer demands.',
      services: ['Production Planning', 'Quality Control', 'Supply Chain Management'],
    },
    // Add more department data as needed
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Set the number of items per page
  const totalDepartments = departmentsData.length;
  const totalPages = Math.ceil(totalDepartments / itemsPerPage);

  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEdit = (id) => {
    // Implement your edit logic here
    console.log(`Edit department with ID: ${id}`);
  };

  const handleDelete = (id) => {
    // Display a confirmation dialog before deleting
    const shouldDelete = window.confirm(`Are you sure you want to delete department with ID: ${id}`);

    if (shouldDelete) {
      // Implement your delete logic here
      setSelectedDepartment((prevDepartments) => prevDepartments.filter((dept) => dept.id !== id));
      console.log(`Delete department with ID: ${id}`);
    }
  };

  const handleView = (department) => {
    setSelectedDepartment(department);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleDepartments = departmentsData.slice(startIndex, endIndex);

  return (
    <div>
      <h2>Manageable Table</h2>
      <table className="table-auto w-full mt-4 text-black bg-white">
        <thead>
          <tr>
            <th className="border p-3">ID</th>
            <th className="border p-3">Title</th>
            <th className="border p-3">Description</th>
            <th className="border p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {visibleDepartments.map((department) => (
            <tr key={department.id} className="text-center">
              <td className="border p-3">{department.id}</td>
              <td className="border p-3">{department.title}</td>
              <td className="border p-3">{department.description}</td>
              <td className="border text-center p-3">
                <button
                  className="bg-blue-600 px-1 py-1 font-semibold hover:bg-orange-700 text-white hover:bg-sky-600 mr-2"
                  onClick={() => handleEdit(department.id)}
                >
                  Edit
                </button>
                <button
                  className="bg-green-600 px-1 py-1 font-semibold hover:bg-orange-700 text-white hover:bg-sky-600 mr-2"
                  onClick={() => handleView(department)}
                >
                  View
                </button>
                <button
                  className="bg-red-600 px-1 py-1 font-semibold hover:bg-orange-700 text-white hover:bg-sky-600"
                  onClick={() => handleDelete(department.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between mt-4">
        <button
          onClick={handlePrevPage}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Next
        </button>
      </div>

      {isModalOpen && selectedDepartment && (
        <div>
          <div className="modal-overlay" onClick={handleModalClose}></div>
          <div className="modal">
            <button className="close-button" onClick={handleModalClose}>
              &#10006;
            </button>
            <h2>{selectedDepartment.title}</h2>
            <img src={selectedDepartment.image} alt={selectedDepartment.title} />
            <p>{selectedDepartment.description}</p>
            <h3>Services:</h3>
            <ul>
              {selectedDepartment.services.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default AboutDepartment;
