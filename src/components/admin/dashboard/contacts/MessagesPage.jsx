import React, { useState } from "react";
import Modal from "react-modal";
// import "./Board.css";
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
// MessageRow component
const MessageRow = ({ message, onView, onDelete }) => {
  const handleClick = () => {
    onView(message);
  };

  const handleDeleteClick = () => {
    onDelete(message.id);
  };

  return (
    <tr>
      <td>{message.name}</td>
      <td>{message.email}</td>
      <td className="message-cell" onClick={handleClick}>
        {message.message.length > 50
          ? `${message.message.slice(0, 25)}...`
          : message.message}
      </td>
      <td>
        <button className="bg-blue-500 text-white px-2 py-1 mr-2"  onClick={() => onView(message)}>
          View
        </button>
        <button className="bg-red-500 text-white px-2 py-1 mr-2" onClick={handleDeleteClick}>
          Delete
        </button>
      </td>
    </tr>
  );
};

// Main MessagesPage component
const MessagesPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [deleteConfirmation, setDeleteConfirmation] = useState(null);
  const [sampleMessages, setSampleMessages] = useState(initialMessages);

  const handleView = (message) => {
    setSelectedMessage(message);
    setModalIsOpen(true);
  };

  const handleDelete = (messageId) => {
    // Open confirmation modal
    setDeleteConfirmation(
      sampleMessages.find((message) => message.id === messageId)
    );
  };

  const handleConfirmDelete = (messageId) => {
    // Filter out the message with the given ID
    const updatedMessages = sampleMessages.filter(
      (message) => message.id !== messageId
    );
    // Update the sampleMessages array with the filtered array
    setSampleMessages(updatedMessages);

    // Close the delete confirmation modal
    setDeleteConfirmation(null);
  };

  return (
    <div className="message">
      <h1 className="header-text">Messages</h1>
      <table className="message-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sampleMessages.map((message) => (
            <MessageRow
              key={message.id}
              message={message}
              onView={handleView}
              onDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>

      {/* Modal for displaying message content */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        ariaHideApp={false}
      >
        {selectedMessage && (
          <div>
            <h2>Message Details</h2>
            <div>
              <p style={{ color: "black" }}>Name: {selectedMessage.name}</p>
              <p style={{ color: "black" }}>Email: {selectedMessage.email}</p>
              <p style={{ color: "black" }}>
                Message: {selectedMessage.message}
              </p>
            </div>
            <button
              onClick={() => setModalIsOpen(false)}
              style={{ color: "black" }}
            >
              Close
            </button>
          </div>
        )}
      </Modal>

      {/* Delete confirmation modal */}
      <Modal
        isOpen={!!deleteConfirmation}
        onRequestClose={() => setDeleteConfirmation(null)}
        ariaHideApp={false}
      >
        <div>
          <h2>Delete Confirmation</h2>
          {deleteConfirmation && (
            <div>
              <p style={{ color: "red", fontSize: "30px" }}>
                Are you sure you want to delete the following message?
              </p>
              <p style={{ color: "black" }}>Name: {deleteConfirmation.name}</p>
              <p style={{ color: "black" }}>
                Email: {deleteConfirmation.email}
              </p>
              <p style={{ color: "black" }}>
                Message: {deleteConfirmation.message}
              </p>
              <button
                className="delete-btn"
                style={{ fontSize: "20px" }}
                onClick={() => handleConfirmDelete(deleteConfirmation.id)}
              >
                Yes
              </button>
              <button
                style={{ color: "green", fontSize: "20px" }}
                onClick={() => setDeleteConfirmation(null)}
              >
                No
              </button>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default MessagesPage;
