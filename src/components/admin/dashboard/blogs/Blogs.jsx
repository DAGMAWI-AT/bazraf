import React, { useState } from "react";
import Modal from "react-modal";
import { postData } from "../../../data/Data";

const Blogs = () => {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tableData, setTableData] = useState(postData); // Assuming postData is your initial data

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = tableData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(tableData.length / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage < totalPages ? prevPage + 1 : prevPage));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  const handleAdd = () => {
    // Implement logic for adding a new blog
  };

  const handleDelete = (id) => {
    // Implement logic for deleting a blog based on id
    const updatedData = tableData.filter((blog) => blog.id !== id);
    // Update the state with the updatedData
    setTableData(updatedData);
  };

  const handleView = (blog) => {
    setSelectedBlog(blog);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Blogs</h2>
      <div className="container mx-auto p-4 bg-white">

      <div className="mt-4">
        <button
          onClick={handleAdd}
          className="bg-green-500 text-center text-white px-4 py-2"
        >
          Add Blog
        </button>
      </div>
      <div className="max-w-5xl mx-auto mt-4">

      <table className="table-auto w-full mt-4 text-black">
          <thead>
            <tr>
              <th className="border p-3">ID</th>
              <th className="border p-3">Title</th>
              <th className="border p-3">Descrip</th>
              <th className="border p-3">Images</th>
              <th className="border p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
          {postData.slice(indexOfFirstItem, indexOfLastItem).map((item, i) => (

              <tr key={item.id}>
                <td className="border p-3">{item.id}</td>
                <td className="border p-3">{item.ttl}</td>
                <td className="border p-3">
                <div
                className="max-h-16 overflow-y-hidden"
                style={{ whiteSpace: 'pre-line' }}
              >
                {item.dsc}
              </div>
        </td>
                <td className="border p-3">
                <img src={item.img} alt={item.title} style={{ maxWidth: '100px' }}/></td>
                <td className="border p-3">
                  <button
                    onClick={() => handleView(item)}
                    className="bg-blue-500 text-white px-2 py-1 mr-2"
                  >
                    View
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="bg-red-500 text-white px-2 py-1"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
</div>
</div>

      <div className="flex justify-between items-center mt-4">
        <button
          onClick={handlePrevPage}
          className={`${
            currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500"
          } text-white px-2 py-1`}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="text-lg font-bold">Page: {currentPage}</span>
        <button
          onClick={handleNextPage}
          className={`${
            currentPage === totalPages
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500"
          } text-white px-2 py-1`}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>

      {/* Modal for Viewing Blog */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="View Blog"
      >
        {selectedBlog && (
          <div>
          <button className="bg-blue-500 text-white px-2 py-1 mr-2 float-right" onClick={closeModal}>X</button>

          <h2>{selectedBlog.ttl}</h2>
            <img src={selectedBlog.img} className="text-center"/>
            <p>{selectedBlog.dsc}</p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Blogs;
