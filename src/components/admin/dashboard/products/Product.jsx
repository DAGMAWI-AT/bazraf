import React, { useState } from 'react';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import { products } from '../../../data/Data';

const Product = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const productsPerPage = 3;
  const navigate = useNavigate();

  const openModal = (product) => {
    setSelectedProduct(product);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setModalIsOpen(false);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => (prevPage - 1 > 0 ? prevPage - 1 : 1));
  };

  const handleEdit = (productId) => {
    // Handle the edit action, for example, navigate to the edit page
    navigate(`/admin/dashboard/edit-product/${productId}`);
  };

  const handleDelete = (productId) => {
    // Handle the delete action, for example, show a confirmation dialog and delete the product
    console.log(`Delete product with Id: ${productId}`);
  };

  const handleView = (index) => {
    setSelectedId(index);
    openModal(products[index]);
  };

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const paginatedProducts = products.slice(startIndex, endIndex);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-center text-black">Product List</h2>
      <div className="">
        <button
          onClick={() => navigate("/admin/dashboard/uploadproduct")}
          className="font-semibold px-3 py-1 bg-green-600 hover:underline dark:text-cyan-500 mr-0"
        >
          Upload
        </button>
        <table className="table-auto w-full mt-4 text-black container mx-auto p-4 bg-white box-decoration-slice shadow-2xl shadow-blue-gray-900">
          <thead>
            <tr>
              <th className="p-3 border">Id</th>
              <th className="p-3 border">Title</th>
              <th className="p-3 border">Link</th>
              <th className="p-3 border">Image</th>
              <th className="p-3 border">Description</th>
              <th className="p-3 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedProducts.map((product, index) => (
              <tr key={product.id}>
                <td className="py-2 px-4 border-b text-center">{startIndex + index + 1}</td>
                <td className="py-2 px-4 border-b text-center">{product.title}</td>
                <td className="py-2 px-4 border-b text-center">
                  <a href={product.link} className="text-blue-500 hover:underline">
                    {product.link}
                  </a>
                </td>
                <td className="py-2 px-4 border-b text-center">
                  <img src={product.image} alt={product.title} className="max-w-full h-auto" />
                </td>
                <td className="py-2 px-4 border-b text-center">{product.description}</td>
                <td className="py-2 px-4 border-b text-center">
                  <button
                    onClick={() => handleEdit(product.id)}
                    className="font-semibold px-3 py-1 bg-green-600 hover:underline dark:text-cyan-500 mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="bg-red-600 px-1 py-1 font-semibold hover:bg-orange-700 text-white  hover:bg-sky-600 mr-2"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleView(startIndex + index)}
                    className="bg-blue-600 px-1 py-1 font-semibold hover:bg-blue-700 text-white  hover:bg-sky-600 mr-2"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-between mt-4">
          <button
            onClick={handlePreviousPage}
            className="font-semibold px-3 py-1 bg-blue-600 hover:underline text-white mr-2"
          >
            Previous
          </button>
          <button
            onClick={handleNextPage}
            className="font-semibold px-3 py-1 bg-blue-600 hover:underline text-white"
          >
            Next
          </button>
        </div>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className="Modal"
          overlayClassName="Overlay"
        >
          {selectedProduct && (
            <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center">
              <div className="bg-white p-4 rounded shadow-md w-[600px]">
                <button
                  onClick={closeModal}
                  className="bg-blue-500 text-white px-2 py-1 mt-4 float-right"
                >
                  X
                </button>
                <h2 className="text-2xl font-bold mb-4">{selectedProduct.title} Details</h2>
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  className="max-w-full h-auto"
                />
                <p>{selectedProduct.description}</p>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
};

export default Product;
