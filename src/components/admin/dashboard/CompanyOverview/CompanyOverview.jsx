import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function CompanyOverview() {
  const [overview, setOverview] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [overviewsPerPage] = useState(3); // Adjust the number of overviews per page as needed
  const navigate = useNavigate();

 


  const handleDelete = (id) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this bzoverview?");

    if (isConfirmed) {
      fetch(`http://localhost:8000/bzoverview/${id}`, {
        method: "DELETE",
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error(`Failed to delete bzoverview (status ${res.status})`);
          }
          return res.json();
        })
        .then((data) => {
          alert("bzoverview is Deleted Successfully");
          setOverview((prevOverviews) => prevOverviews.filter((bzoverview) => bzoverview._id !== id));
        })
        .catch((error) => {
          console.error("Error deleting bzoverview:", error);
        });
    }
  };


  useEffect(() => {
    // Fetch data when the component mounts
    fetch('http://localhost:8000/bzoverview') // Update the URL based on your server endpoint
      .then((response) => response.json())
      .then((data) => setOverview(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleUpload = () => {
    navigate('/admin/dashboard/uploadoverview');
  };
  const handleEdit = (id) => {
    navigate(`/admin/dashboard/edit-overview/${id}`);
  };
  // Get current overviews
  const indexOfLastOverview = currentPage * overviewsPerPage;
  const indexOfFirstOverview = indexOfLastOverview - overviewsPerPage;
  const currentOverviews = overview.slice(indexOfFirstOverview, indexOfLastOverview);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto p-4">
      <button
        onClick={handleUpload}
        className="font-semibold px-3 py-1 bg-green-600 hover:underline dark:text-cyan-500 mr-0"
      >
        Upload
      </button>

      <table className="table-auto w-full mt-4 text-black">
        <thead>
          <tr>
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">HTitle</th>
            <th className="border px-4 py-2">Number</th>
            <th className="border px-4 py-2">Icon</th>
            <th className="border px-4 py-2">Title</th>
            <th className="border px-4 py-2">Description</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentOverviews.map((item, index) => (
            <tr key={item._id}>
              <td className="border px-4 py-2">{index + 1 + (currentPage - 1) * overviewsPerPage}</td>
              <td className="border px-4 py-2">{item.hTitle}</td>
              <td className="border px-4 py-2">{item.number}</td>
              <td>
                {/* Display image dynamically */}
                <img src={`http://localhost:8000/overview/${item.iconFile}`} alt={item.title} style={{ maxWidth: '100px' }} />
              </td>
              <td className="border px-4 py-2">{item.title}</td>
              <td className="border px-4 py-2">{item.description}</td>
              <td className="border px-4 py-2">
              <button
              onClick={() => handleEdit(item._id)} // Pass the overview id to the function
              className="bg-blue-500 text-white px-2 py-1 mr-2"
            >
              Edit
            </button>
                <button
  onClick={() => handleDelete(item._id)}
  className="bg-red-500 text-white px-2 py-1"
>
  Delete
</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="flex justify-between mt-4">
        <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
        <span>{currentPage}</span>
        <button onClick={() => paginate(currentPage + 1)} disabled={indexOfLastOverview >= overview.length}>
          Next
        </button>
      </div>
    </div>
  );
}

export default CompanyOverview;
