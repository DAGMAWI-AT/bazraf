import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal'; // Import the modal library

const Footers = () => {
  const [footerData, setFooterData] = useState([
    { id: 1, title: 'Footer 1' },
    { id: 2, title: 'Footer 2' },
    // Add more footer data as needed
  ]);
  const [selectedFooter, setSelectedFooter] = useState(null); // Track the selected footer for the modal
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control the modal visibility
  const navigate = useNavigate();

  const handleEdit = (id) => {
    // Implement your edit logic here
    navigate(`/admin/dashboard/edit-footers/${id}`);
  };

  const handleDelete = (id) => {
    // Display a confirmation dialog before deleting
    const shouldDelete = window.confirm(`Are you sure you want to delete footer with ID: ${id}`);

    if (shouldDelete) {
      // Implement your delete logic here
      setFooterData((prevData) => prevData.filter((item) => item.id !== id));
      console.log(`Delete footer with ID: ${id}`);
    }
  };

  const handleUpload = () => {
    navigate("/admin/dashboard/uploadfooters");
  };

  const handleView = (id) => {
    // Find the selected footer data
    const selected = footerData.find((item) => item.id === id);
    setSelectedFooter(selected);
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setSelectedFooter(null);
    setIsModalOpen(false); // Close the modal
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center text-black">Footer Management</h2>
      <div className="container mx-auto p-4 box-decoration-slice">

        <button
          onClick={handleUpload}
          className="font-semibold px-3 py-1 bg-green-600 hover:underline dark:text-cyan-500 mr-0"
        >
          Upload
        </button>
        <table className="table-auto w-full mt-4 text-black container mx-auto p-4 bg-white box-decoration-slice shadow-2xl shadow-blue-gray-900">
          <thead>
            <tr>
              <th className="py-2 px-4 border">ID</th>
              <th className="py-2 px-4 border">Title</th>
              <th className="py-2 px-4 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {footerData.map((item) => (
              <tr key={item.id}>
                <td className="py-2 px-4 border-b text-center">{item.id}</td>
                <td className="py-2 px-4 border-b text-center">{item.title}</td>
                <td className="py-2 px-4 border-b text-center">
                  <button onClick={() => handleEdit(item.id)} className="bg-blue-500 text-white px-2 py-1 mr-2 rounded">
                    Edit
                  </button>
                  <button onClick={() => handleDelete(item.id)} className="bg-red-500 text-white px-2 py-1 mr-2 rounded">
                    Delete
                  </button>
                  <button onClick={() => handleView(item.id)} className="bg-yellow-500 text-white px-2 py-1 rounded">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Modal for viewing footer details */}
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          className="Modal"
          overlayClassName="Overlay"
        >
          {selectedFooter && (
            <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center">
            <div className="bg-white p-4 rounded shadow-md w-[600px]">  
            <button
            onClick={closeModal}
            className="bg-blue-500 text-white px-2 py-1 mt-4 float-right"
          >
            X
          </button>            
          <h2>Footer Details</h2>
              <p>ID: {selectedFooter.id}</p>
              <p>Title: {selectedFooter.title}</p>
              {/* Add more details as needed */}
            </div>
            </div>

          )}
        </Modal>

      </div>
    </div>
  );
};

export default Footers;
