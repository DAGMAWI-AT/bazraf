import React, { useState } from 'react';
import { counter } from '../../../data/Data';
import CountUp from 'react-countup';
import { useNavigate } from 'react-router-dom';

const Counters = () => {
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const [editableIndex, setEditableIndex] = useState(-1);
  const [selectedId, setSelectedId] = useState(null);
  const navigate = useNavigate();

  const handleEdit = (index) => {
    navigate(`/admin/dashboard/edit-counters/${index}`);
  };

  const handleDelete = (index) => {
    // Display a confirmation dialog before deleting
    const shouldDelete = window.confirm('Are you sure you want to delete this item?');

    if (shouldDelete) {
      // Implement your delete logic here
      console.log(`Delete item at index ${index}`);
    }
  };

  const handleView = (index) => {
    setSelectedId(index);
  };

  const handleSave = (index) => {
    console.log(`Save item at index ${index}`);
    setEditableIndex(-1);
  };

  const handleUpload = () => {
    navigate("/admin/dashboard/uploadcounters");
  };

  const handleNext = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevious = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const getButtonColor = (action) => {
    switch (action) {
      case 'Edit':
        return 'bg-blue-500';
      case 'Delete':
        return 'bg-red-500';
      case 'View':
        return 'bg-green-500';
      default:
        return 'bg-gray-500';
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return (
    <div>
      <h2 className="dark:text-black text-center" style={{ color: '#2d2e2e' }}>Counters</h2>

      <div className="container mx-auto p-4  box-decoration-slice  shadow-2x">
      <button
          onClick={handleUpload}
          className="font-semibold px-3 py-1 bg-green-600 hover:underline dark:text-cyan-500 mr-0"
        >
          Upload
        </button>

        <table className="table-auto w-full mt-4 text-black container mx-auto p-4 bg-white box-decoration-slice  shadow-2xl shadow-blue-gray-900">
          <thead>
            <tr>
              <th className='text-center border p-3'>ID</th>
              <th className='text-center border p-3'>Icon</th>
              <th className='text-center border p-3'>Number</th>
              <th className='text-center border p-3'>Title</th>
              <th className='text-center border p-3'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {counter.slice(startIndex, endIndex).map((item, i) => (
              <tr key={i + startIndex}>
                <td className='text-center'>{i + startIndex + 1}</td>
                <td className='text-center'>{item.icon}</td>
                <td className='text-center'>
                  {editableIndex === i + startIndex ? (
                    <input
                      type="text"
                      value={item.num}
                      onChange={(e) => console.log(e.target.value)}
                    />
                  ) : (
                    <CountUp duration={2} end={item.num} />
                  )}
                </td>
                <td className='text-center'>{item.title}</td>
                <td className='text-center'>
                  {editableIndex === i + startIndex ? (
                    <button
                      className="bg-yellow-500"
                      onClick={() => handleSave(i + startIndex)}
                    >
                      Save
                    </button>
                  ) : (
                    <>
                      <button
                        className={getButtonColor('Edit')}
                        onClick={() => handleEdit(i + startIndex)}
                      >
                        Edit
                      </button>
                      <button
                        className={getButtonColor('Delete')}
                        onClick={() => handleDelete(i + startIndex)}
                      >
                        Delete
                      </button>
                      <button
                        className={getButtonColor('View')}
                        onClick={() => handleView(i + startIndex)}
                      >
                        View
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-between items-center mt-4">
          <button
            onClick={handlePrevious}
            className="bg-blue-500 text-white px-2 py-1"
          >
            Previous
          </button>
          <span className="text-lg font-bold">Page: {currentPage}</span>
          <button
            onClick={handleNext}
            className="bg-blue-500 text-white px-2 py-1"
          >
            Next
          </button>
        </div>
      </div>

      {/* Modal for View action */}
      {selectedId !== null && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-4 rounded shadow-md w-[600px]">
          <button
              onClick={() => setSelectedId(null)}
              className="bg-blue-500 text-white px-2 py-1 mt-4 float-right"
            >
              Close
            </button>
            <h2 className="text-lg font-bold mb-4">Counter Details</h2>
            <p>ID: {selectedId}</p>
            <p>Icon: {counter[selectedId].icon}</p>
            <p>Number: {counter[selectedId].num}</p>
            <p>Title: {counter[selectedId].title}</p>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default Counters;
