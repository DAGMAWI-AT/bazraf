import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function CompanyOverview() {
  const [overview, setOverview] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [overviewsPerPage] = useState(3); // Adjust the number of overviews per page as needed
  const [selectedOverview, setSelectedOverview] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this bzoverview?"
    );

    if (isConfirmed) {
      fetch(`https://bazra.onrender.com/bzoverview/${id}`, {
        method: "DELETE",
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error(
              `Failed to delete bzoverview (status ${res.status})`
            );
          }
          return res.json();
        })
        .then((data) => {
          alert("bzoverview is Deleted Successfully");
          setOverview((prevOverviews) =>
            prevOverviews.filter((bzoverview) => bzoverview._id !== id)
          );
        })
        .catch((error) => {
          console.error("Error deleting bzoverview:", error);
        });
    }
  };

  useEffect(() => {
    // Fetch data when the component mounts
    fetch("https://bazra.onrender.com/bzoverview") // Update the URL based on your server endpoint
      .then((response) => response.json())
      .then((data) => setOverview(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleUpload = () => {
    navigate("/admin/dashboard/uploadoverview");
  };

  const handleEdit = (id) => {
    navigate(`/admin/dashboard/edit-overview/${id}`);
  };

  const handleViewDetails = (selectedOverview) => {
    setSelectedOverview(selectedOverview);
    setIsModalOpen(true);
  };

  // Get current overviews
  const indexOfLastOverview = currentPage * overviewsPerPage;
  const indexOfFirstOverview = indexOfLastOverview - overviewsPerPage;
  const currentOverviews = overview.slice(
    indexOfFirstOverview,
    indexOfLastOverview
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="px-4 my-8">
      <h2
        className="mb-8 text-3xl font-bold text-center text-italic"
        style={{ color: "#2d2e2e" }}
      >
        Manage Overview
      </h2>
      <div className="container mx-auto p-4 box-decoration-slice  ">
        <button
          onClick={handleUpload}
          className="font-semibold px-3 py-1 bg-green-600 hover:underline dark:text-cyan-500 mr-0"
        >
          Upload
        </button>
        </div>

        <table className="relative container table-auto w-full mt-4  mx-auto text-black  bg-white box-decoration-slice  shadow-2xl shadow-blue-gray-900">
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
                <td className="border px-4 py-2">
                  {index + 1 + (currentPage - 1) * overviewsPerPage}
                </td>
                <td className="border px-4 py-2">{item.hTitle}</td>
                <td className="border px-4 py-2">{item.number}</td>
                <td className="border px-4 py-2">
                  <img
                    src={`https://bazra.onrender.com/overview/${item.iconFile}`}
                    alt={item.title}
                    style={{ maxWidth: "100px" }}
                  />
                </td>
                <td className="border px-4 py-2">{item.title}</td>
                <td className="border px-4 py-2">{item.description}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handleEdit(item._id)}
                    className="bg-blue-500 text-white px-2 py-1 mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="bg-red-500 text-white px-2 py-1 mr-2"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleViewDetails(item)}
                    className="bg-green-500 text-white px-2 py-1"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination Controls */}
        <div className="flex justify-between mt-4">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="bg-blue-500 text-white px-2 py-1 mr-2"

          >
            Previous
          </button>
          <span>{currentPage}</span>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={indexOfLastOverview >= overview.length}
            className="bg-blue-500 text-white px-2 py-1 mr-2"

          >
            Next
          </button>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-4 rounded shadow-md w-[600px]">
              <h1 className="text-2xl font-bold mb-4">Overview Details</h1>
              {selectedOverview && (
                <>
                <button
                onClick={() => setIsModalOpen(false)}
                className="float-right bg-blue-500 text-white px-2 py-1 mt-4 text-center"

              >X</button>
                  <p>HTitle: {selectedOverview.hTitle}</p>
                  <img
                  src={`https://bazra.onrender.com/overview/${selectedOverview.iconFile}`}
                  alt={selectedOverview.title}
                  style={{ maxWidth: "100px" }}
                />
                  <p>Number: {selectedOverview.number}</p>
                  <p>Title: {selectedOverview.title}</p>
                  <p>Description: {selectedOverview.description}</p>
                
                </>
              )}
            </div>
          </div>
        )}
      </div>
  );
}

export default CompanyOverview;
