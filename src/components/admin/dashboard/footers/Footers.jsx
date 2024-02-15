import React, { useState } from 'react';

const Footers = () => {
  const [footerData, setFooterData] = useState([
    { id: 1, title: 'Footer 1' },
    { id: 2, title: 'Footer 2' },
    // Add more footer data as needed
  ]);

  const handleEdit = (id) => {
    // Implement your edit logic here
    console.log(`Edit footer with ID: ${id}`);
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

  return (
    <div>
      <table className="footer-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {footerData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>
                <button onClick={() => handleEdit(item.id)} className="editBtn">
                  Edit
                </button>
                <button onClick={() => handleDelete(item.id)} className="deleteBtn">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Footers;
