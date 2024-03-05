import React, { useState } from "react";
import Modal from "react-modal";
import MessagesPage from "./MessagesPage";

  

const Contacts = () => {


  const [isModalOpen, setIsModalOpen] = useState(false); // State to control the modal visibility
  const [selectedContact, setSelectedContact] = useState(null); // Track the selected footer for the modal


  const initialMessages = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      message:
        "Long message 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      message:
        "Long message 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...",
    },
    {
      id: 3,
      name: "Alice Johnson",
      email: "alice@example.com",
      message:
        "Long message 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...",
    },
    {
      id: 4,
      name: "Bob Wilson",
      email: "bob@example.com",
      message:
        "Long message 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...",
    },
  ];

  const [contactData, setContactData] = useState(initialMessages);
  const [currentPage, setCurrentPage] = useState(1);
  const contactPerPage = 3;

  const handleView = (id) => {
    // Find the selected footer data
    const selected = initialMessages.find((item) => item.id === id);
    setSelectedContact(selected);
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setSelectedContact(null);
    setIsModalOpen(false); // Close the modal
  };

  const handleDelete = (id) => {
    // Display a confirmation dialog before deleting
    const shouldDelete = window.confirm(`Are you sure you want to delete footer with ID: ${id}`);

    if (shouldDelete) {
      // Implement your delete logic here
      setContactData((prevData) => prevData.filter((item) => item.id !== id));
      console.log(`Delete footer with ID: ${id}`);
    }
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => (prevPage - 1 > 0 ? prevPage - 1 : 1));
  };


  const startIndex = (currentPage - 1) * contactPerPage;
  const endIndex = startIndex + contactPerPage;
  const paginatedContact = initialMessages.slice(startIndex, endIndex);

  return (
    <div>
      <h2 className="text-center text-gray-600">Contact Info</h2>
      <div className="container mx-auto p-4">
        <table className="table-auto w-full mt-4 text-black bg-white">
          <thead>
            <tr>
            <th className="border text-center p-2">ID</th>
              <th className="border text-center p-2">Name</th>
              <th className="border text-center p-2">Email</th>
              <th className="border text-center p-2">Message</th>
              <th className="border text-center p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {paginatedContact.map((contact, index) => (
              <tr key={index}>
              <td className="border text-center p-2">{contact.id}</td>

                <td className="border text-center p-2">{contact.name}</td>
              
                <td className="border text-center p-2">
                {contact.email}
                </td>
                <td className="border text-center p-2">
                {contact.message}
                </td>
                <td className="border text-center p-2">
                    <button
                      className="bg-blue-500 text-white px-2 py-1 mr-2"
                      onClick={() => handleView(contact.id)}
                    >
                      View
                    </button>
                    <button
                    className="bg-red-500 text-white px-2 py-1 mr-2"
                    onClick={() => handleDelete(index)}
                  >
                    Delate
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
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="Modal"
        overlayClassName="Overlay"
      >
        {selectedContact && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-4 rounded shadow-md w-[600px]">  
          <button
          onClick={closeModal}
          className="bg-blue-500 text-white px-2 py-1 mt-4 float-right"
        >
          X
        </button>            
        <h2>Footer Details</h2>
            <p>ID: {selectedContact.id}</p>
            <p>Title: {selectedContact.name}</p>
            <p>Message: {selectedContact.email}</p>
            <p>Message: {selectedContact.message}</p>

          </div>
          </div>

        )}
      </Modal>
      </div>
{ /*     <MessagesPage />
        */}    
        </div>
  );
};

export default Contacts;
