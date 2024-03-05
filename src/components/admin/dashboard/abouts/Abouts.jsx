import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { about } from '../../../data/Data';
import Modal from 'react-modal';

function Abouts() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalItems = about.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const [footerData, setFooterData] = useState(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return about
      .slice(startIndex, endIndex)
      .map((item, index) => ({ ...item, id: startIndex + index + 1 }));
  });

  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/admin/dashboard/edit-abouts/${id}`);
  };

  const handleDelete = (id) => {
    const shouldDelete = window.confirm(`Are you sure you want to delete footer with ID: ${id}`);
    if (shouldDelete) {
      setFooterData((prevData) => prevData.filter((item) => item.id !== id));
      console.log(`Delete footer with ID: ${id}`);
    }
  };

  const handleView = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleUpload = () => {
    navigate('/admin/dashboard/uploadabouts');
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

  return (
    <div>
      <h2 className='text-black text-center'>Manageable Table</h2>
      <div className="">
        <button
          onClick={handleUpload}
          className="bg-green-600 px-1 py-1 font-semibold hover:bg-orange-700 text-white hover:bg-sky-600 mr-0"
        >
          Upload
        </button>
        <table className="table-auto w-full mt-4 text-black container mx-auto p-4 bg-white box-decoration-slice shadow-2xl shadow-blue-gray-900">
          <thead>
            <tr>
              <th className="border p-3">ID</th>
              <th className="border p-3">Text</th>
              <th className="border p-3">Vision Description</th>
              <th className="border p-3">Mission Description</th>
              <th className="border p-3">Cover Image</th>
              <th className="border p-3">Detail Description</th>
              <th className="border p-3">Banner Description</th>
              <th className="border p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {footerData.map((item) => (
              <tr key={item.id} className="text-center">
                <td className="border p-3">{item.id}</td>
                <td className="border p-3">{item.text}</td>
                <td className="text-center p-3">
                  <div
                    className="max-h-16 overflow-y-hidden"
                    style={{ whiteSpace: 'pre-line' }}
                  >
                    {item.visionDesc}
                  </div>
                </td>
                <td className="text-center p-3">
                  <div
                    className="max-h-16 overflow-y-hidden"
                    style={{ whiteSpace: 'pre-line' }}
                  >
                    {item.missionDesc}
                  </div>
                </td>
                <td className="border p-3">
                  <img src={item.cover} alt={`Cover for ${item.cover}`} className="w-[100px]" />
                </td>
                <td className="text-center p-3">
                  <div
                    className="max-h-16 overflow-y-hidden"
                    style={{ whiteSpace: 'pre-line' }}
                  >
                    {item.moreDesc}
                  </div>
                </td>
                <td className="text-center p-3">
                  <div
                    className="max-h-16 overflow-y-hidden"
                    style={{ whiteSpace: 'pre-line' }}
                  >
                    {item.bannerDesc}
                  </div>
                </td>
                <td className="border text-center p-3">
                  <button
                    className="bg-blue-600 px-1 py-1 font-semibold hover:bg-orange-700 text-white hover:bg-sky-600 mr-0"
                    onClick={() => handleEdit(item.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-green-600 px-1 py-1 font-semibold hover:bg-orange-700 text-white hover:bg-sky-600 mr-0"
                    onClick={() => handleView(item)}
                  >
                    View
                  </button>
                  <button
                    className="bg-red-600 px-1 py-1 font-semibold hover:bg-orange-700 text-white hover:bg-sky-600 mr-0"
                    onClick={() => handleDelete(item.id)}
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
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleModalClose}
        contentLabel="Item Details"
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
          content: {
            width: '50%',
            margin: 'auto',
            padding: '20px',
            backgroundColor: '#fff',
            borderRadius: '8px',
          },
        }}
      >
        {selectedItem && (
          <div>
            <button
              onClick={handleModalClose}
              style={{
                float: 'right',
                cursor: 'pointer',
                fontSize: '18px',
                background: 'none',
                border: 'none',
                color: '#000',
              }}
            >
              &#10006;
            </button>
            <img
              src={selectedItem.cover}
              alt={selectedItem.text}
              style={{ maxWidth: '100%', maxHeight: '400px' }}
            />
            <h2>{selectedItem.text}</h2>
            <p> <b>more description: </b>{selectedItem.moreDesc}</p>
            <p> <b>banner: </b>{selectedItem.bannerDesc}</p>

          </div>
        )}
      </Modal>
    </div>
  );
}

export default Abouts;
