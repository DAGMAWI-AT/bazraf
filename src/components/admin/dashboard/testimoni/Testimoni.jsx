import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Testimoni() {
  const [selectedId, setSelectedId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
const navigate =useNavigate();
  const testimonialsData = [
    {
        prof: "Founder",
        cover:  "../testimoni.png",
        text: "good for all in bazra",
        // address: "Addis Ababa",
        name: "Dr. Yayerad A",
        icon: [<a href="mailto:amaredagmawi1@gmail.com" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-google"></i>
      </a>,<a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>, <i class='fa-brands fa-linkedin'></i>, <i class='fa-brands fa-twitter'></i>, <i class='fa-brands fa-instagram'></i>],
      },
      {
        prof: "Finance Manager",
        cover:  "../testimoni.png",
        text: "good for all in bazra",
        name: "Mr. Brhanu ",
        // address: "amaredagmawi1@gmail.com",
        icon: [<i class='fa-brands fa-facebook-f'></i>, <i class='fa-brands fa-linkedin'></i>, <i class='fa-brands fa-twitter'></i>, <i class='fa-brands fa-instagram'></i>],
      },
      {
        prof: "Client",
        cover:  "../testimoni.png",
        text: "good for all in bazra",
        name: "Mr/DR/Ms",
        // address: "amaredagmawi1@gmail.com",
        icon: [<i class='fa-brands fa-facebook-f'></i>, <i class='fa-brands fa-linkedin'></i>, <i class='fa-brands fa-twitter'></i>, <i class='fa-brands fa-instagram'></i>],
      },
      {
        prof: "Softwar Engineer",
        text: "contact bazra and good for all in bazra",
        cover:  "../IMG_7525A.JPG",
        // address: "Addis Ababa",
        name: "dagmawi",
        icon: [<i class='fa-brands fa-facebook-f'></i>, <i class='fa-brands fa-linkedin'></i>, <i class='fa-brands fa-twitter'></i>, <i class='fa-brands fa-instagram'></i>],
      },
      {
        prof: "Founder",
        cover:  "../testimoni.png",
        text: "good for all in bazra",
        // address: "amaredagmawi1@gmail.com",
        name: "Dr. Yayerad A",
        icon: [<i class='fa-brands fa-facebook-f'></i>, <i class='fa-brands fa-linkedin'></i>, <i class='fa-brands fa-twitter'></i>, <i class='fa-brands fa-instagram'></i>],
      },
      {
        prof: "Manager",
        cover:  "../testimoni.png",
        text: "good for all in bazra",
        name: "Mr. Lealem. S",
        // address: "amaredagmawi1@gmail.com",
    
        icon: [<i class='fa-brands fa-facebook-f'></i>, <i class='fa-brands fa-linkedin'></i>, <i class='fa-brands fa-twitter'></i>, <i class='fa-brands fa-instagram'></i>],
      },
  ];

  const handleEdit = (index) => {
    navigate(`/admin/dashboard/edit-testimoni/${index}`);
  };

  const handleDelete = (index) => {
    const shouldDelete = window.confirm('Are you sure you want to delete this testimonial?');
    if (shouldDelete) {
      console.log(`Delete testimonial at index ${index}`);
    }
  };

  const handleView = (index) => {
    setSelectedId(index);
  };

  const handleUpload = () => {
    // Implement your logic for uploading data
navigate("/admin/dashboard/uploadtestimoni") 
 };

  const handleNext = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, Math.ceil(testimonialsData.length / 5)));
  };

  const handlePrevious = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const itemsPerPage = 3;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return (
    <div>
      <h2 className="dark:text-black text-center" style={{ color: '#2d2e2e' }}>Testimonials</h2>
      <div className="container mx-auto p-4">

      <button
        onClick={handleUpload}
        className="font-semibold px-3 py-1 bg-green-600 hover:underline dark:text-cyan-500 mr-0"
      >
        Upload Data
      </button>
      <table className="table-auto w-full mt-4 text-black">
        <thead>
          <tr>
            <th>ID</th>
            <th>Profession</th>
            <th>Cover</th>
            <th>Text</th>
            <th>Address</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {testimonialsData.slice(startIndex, endIndex).map((item, index) => (
            <tr key={index + startIndex}>
              <td>{index + startIndex + 1}</td>
              <td>{item.prof}</td>
              <td>{item.cover}</td>
              <td>{item.text}</td>
              <td>{item.address}</td>
              <td>{item.name}</td>
              <td>
                <button className="bg-blue-500 px-3 py-1 mr-0" onClick={() => handleEdit(index + startIndex)}>
                  Edit
                </button>
                <button className="bg-red-500 px-3 py-1 mr-0" onClick={() => handleDelete(index + startIndex)}>
                  Delete
                </button>
                <button className="bg-green-500 px-3 py-1 mr-0" onClick={() => handleView(index + startIndex)}>
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between items-center mt-4">
        <button
          onClick={handlePrevious}
          className="bg-blue-500 text-white px-2 py-1"
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="text-lg font-bold">Page: {currentPage}</span>
        <button
          onClick={handleNext}
          className="bg-blue-500 text-white px-2 py-1"
          disabled={currentPage === Math.ceil(testimonialsData.length / itemsPerPage)}
        >
          Next
        </button>
      </div>

      {selectedId !== null && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-4 rounded shadow-md w-[600px]">
            <h2 className="text-lg font-bold mb-4">Testimonial Details</h2>
            <p>ID: {selectedId + 1}</p>
            <p>Profession: {testimonialsData[selectedId].prof}</p>
            <p>Cover: {testimonialsData[selectedId].cover}</p>
            <p>Text: {testimonialsData[selectedId].text}</p>
            <p>Name: {testimonialsData[selectedId].name}</p>
            <div>
              {testimonialsData[selectedId].icon.map((icon, i) => (
                <span key={i} className="mr-2">{icon}</span>
              ))}
            </div>
            <button
              onClick={() => setSelectedId(null)}
              className="bg-blue-500 text-white px-2 py-1 mt-4 text-center"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
    </div>

  );
}

export default Testimoni;
