import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Table } from 'flowbite-react';
import Modal from 'react-modal'; // Import the Modal component

function Banner() {
  const [banner, setBanner] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [bannersPerPage] = useState(3);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBanner, setSelectedBanner] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8000/allbanner")
      .then((res) => res.json())
      .then((data) => setBanner(data));
  }, []);

  const filteredBanners = banner.filter((banner) => {
    const searchMatch = banner.text.toLowerCase().includes(searchTerm.toLowerCase());
    const categoryMatch = filterCategory ? banner.title === filterCategory : true;
    return searchMatch && categoryMatch;
  });

  const indexOfLastBanner = currentPage * bannersPerPage;
  const indexOfFirstBanner = indexOfLastBanner - bannersPerPage;
  const currentBanners = filteredBanners.slice(indexOfFirstBanner, indexOfLastBanner);

  const handleEdit = (id) => {
    navigate(`/admin/dashboard/edit-banner/${id}`);
  };

  const handleDelete = (id) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this banner?");

    if (isConfirmed) {
      fetch(`http://localhost:8000/deletebanner/${id}`, {
        method: "DELETE",
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error(`Failed to delete banner (status ${res.status})`);
          }
          return res.json();
        })
        .then((data) => {
          alert("Banner is Deleted Successfully");
          setBanner((prevBanners) => prevBanners.filter((banner) => banner._id !== id));
        })
        .catch((error) => {
          console.error("Error deleting banner:", error);
        });
    }
  };

  const handleAddBanner = () => {
    navigate('/admin/dashboard/uploadbanner');
  };

  const openModal = (banner) => {
    setSelectedBanner(banner);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='px-4 my-8'>
      <h2 className='mb-8 text-3xl font-bold text-center text-italic' style={{ color: '#2d2e2e' }}>
        Manage Banner
      </h2>
      <div className="container mx-auto p-4">

      <button onClick={() => handleAddBanner()} className="font-semibold px-3 py-1 bg-green-600 hover:underline dark:text-cyan-500 mr-0 ">
        Add Banner
      </button>

      {/* Search and Filter Controls */}
      <div className="mb-4">
        <input className='rounded border border-blue-500'
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {/* Add your category filter dropdown here */}
      </div>

      {/* Banner Table */}
      <Table className="relative  table-auto w-full mt-4 text-black">
        <thead>
          <tr>
            <th>Banner id</th>
            <th>Title</th>
            <th>Text</th>
            <th>coverimg</th>
            <th className='text-center'>Action</th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {currentBanners.map((item, i) => (
            <tr key={item._id} className="bg-white dark:border-black-700 dark:bg-gray-800" >
              <td>{i + 1 + (currentPage - 1) * bannersPerPage}</td>
              <td>{item.title}</td>
              <td>{item.text}</td>
              <td>
                {/* Display image dynamically */}
                <img src={`http://localhost:8000/images/${item.imageFile}`} alt={item.title} style={{ maxWidth: '100px' }} />
              </td>
              <td>
                <button onClick={() => handleEdit(item._id)} className="font-semibold px-3 py-1 bg-green-600 hover:underline dark:text-cyan-500 mr-0 ">
                  Edit
                </button>
                <button onClick={() => handleDelete(item._id)} className='bg-red-600 px-1 py-1 font-semibold hover:bg-orange-700 text-white  hover:bg-sky-600 mr-0'>
                  Delete
                </button>
                <button onClick={() => openModal(item)} className="bg-blue-600 px-1 py-1 font-semibold hover:bg-blue-700 text-white  hover:bg-sky-600 mr-0">
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Pagination Controls */}
      <div className="flex justify-between mt-4">
        <button className="bg-blue-500 text-white px-2 py-1"
        onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
        <span>{currentPage}</span>
        <button className="bg-blue-500 text-white px-2 py-1"
        onClick={() => paginate(currentPage + 1)} disabled={indexOfLastBanner >= filteredBanners.length}>
          Next
        </button>
      </div>
</div>
      {/* Modal for detailed view */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Banner Details"
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
          content: {
            width: '50%',
            margin: 'auto',
            padding: '20px',
            backgroundColor: '#fff',
            borderRadius: '8px',
          },
        }}
      >
        {selectedBanner && (
          <div>
            {/* Close button */}
            <button onClick={closeModal} style={{ float: 'right', cursor: 'pointer', fontSize: '18px', background: 'none', border: 'none', color: '#000' }}>
              &#10006;
            </button>
            <img src={`http://localhost:8000/images/${selectedBanner.imageFile}`} alt={selectedBanner.title} style={{ maxWidth: '100%',maxHeight:'400px' }} />
            <h2>{selectedBanner.title}</h2>
            <p>{selectedBanner.text}</p>
            {/* Add more details as needed */}
          </div>
        )}
      </Modal>
    </div>
  );
}

export default Banner;
