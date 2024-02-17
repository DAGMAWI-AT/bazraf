import React, { useState } from 'react';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';

const Product = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const productsPerPage = 2;
  const navigate = useNavigate();
  const products = [
    {
      id: 1,
      title: 'AGGREGATES',
      link: '/products/aggregates',
      image: '../../../IT.png',
      description:
        'Aggregates are an engineered granular material consisting of crushed stone, gravel, and sand of varying minerologies.',
    },
    // Add more products as needed
  ];

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

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Product List</h2>
      <div className="container mx-auto p-4">
        <button
          onClick={() => navigate("/admin/dashboard/uploadproduct")}
          className="font-semibold px-3 py-1 bg-green-600 hover:underline dark:text-cyan-500 mr-0"
        >
          Upload
        </button>
        <table className="table-auto w-full mt-4 text-black">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Id</th>
              <th className="py-2 px-4 border-b">Title</th>
              <th className="py-2 px-4 border-b">Link</th>
              <th className="py-2 px-4 border-b">Image</th>
              <th className="py-2 px-4 border-b">Description</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product.id}>
                <td className="py-2 px-4 border-b">{product.id}</td>
                <td className="py-2 px-4 border-b">{product.title}</td>
                <td className="py-2 px-4 border-b">
                  <a href={product.link} className="text-blue-500 hover:underline">
                    {product.link}
                  </a>
                </td>
                <td className="py-2 px-4 border-b">
                  <img src={product.image} alt={product.title} className="max-w-full h-auto" />
                </td>
                <td className="py-2 px-4 border-b">{product.description}</td>
                <td className="py-2 px-4 border-b">
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
                    onClick={() => handleView(index)}
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
          contentLabel="Product Details"
          className="modal"
          overlayClassName="overlay"
        >
          {selectedProduct && (
            <div>
              <h2 className="text-2xl font-bold mb-4">{selectedProduct.title} Details</h2>
              <p>{selectedProduct.description}</p>
              <button onClick={closeModal} className="bg-blue-500 text-white px-2 py-1 mt-4 rounded">
                Close
              </button>
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
};

export default Product;
