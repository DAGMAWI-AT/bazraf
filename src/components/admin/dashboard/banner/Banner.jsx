import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Table } from 'flowbite-react';

function Banner() {
    const [banner, setbanner] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterCategory, setFilterCategory] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [carsPerPage] = useState(3);
    const navigate = useNavigate();
  
    useEffect(() => {
      fetch("https://bazra.onrender.com/allbanner")
        .then((res) => res.json())
        .then((data) => setbanner(data));
    }, []);
  
    const filteredCars = banner.filter((banner) => {
      const searchMatch = banner.text.toLowerCase().includes(searchTerm.toLowerCase());
      const categoryMatch = filterCategory ? banner.title === filterCategory : true;
      return searchMatch && categoryMatch;
    });
  
    const indexOfLastCar = currentPage * carsPerPage;
    const indexOfFirstCar = indexOfLastCar - carsPerPage;
    const currentbanner = filteredCars.slice(indexOfFirstCar, indexOfLastCar);
  
    const handleEdit = (id) => {
      navigate(`/admin/dashboard/edit-cars/${id}`);
    };
  
    const handleDelete = (id) => {
      const isConfirmed = window.confirm("Are you sure you want to delete this car?");
  
      if (isConfirmed) {
        fetch(`https://bazra.onrender.com/deletecar/${id}`, {
          method: "DELETE",
        })
          .then((res) => {
            if (!res.ok) {
              throw new Error(`Failed to delete car (status ${res.status})`);
            }
            return res.json();
          })
          .then((data) => {
            alert("Car is Deleted Successfully");
            setbanner((prevCars) => prevCars.filter((car) => car._id !== id));
          })
          .catch((error) => {
            console.error("Error deleting car:", error);
          });
      }
    };
  
    const handleAddBanner = () => {
        navigate('/admin/dashboard/uploadbanner');
      };

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
    return (
      <div className='px-4 my-12'>
        <h2 className='mb-8 text-3xl font-bold text-center' style={{ color: '#2d2e2e' }}>
          Manage Banner
        </h2>
        <button onClick={() => handleAddBanner()} className="font-semibold px-3 py-1 bg-green-600 hover:underline dark:text-cyan-500 mr-0 ">
          Add Banner
        </button>

        {/* Search and Filter Controls */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search by name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {/* Add your category filter dropdown here */}
        </div>
  
        {/* Banner Table */}
        <Table className='relative lg:w-[1080px]'>
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
            {currentbanner.map((item, i) => {
              const productId = i + 1 + (currentPage - 1) * carsPerPage;
              return (
                <tr key={item._id} className="bg-white dark:border-black-700 dark:bg-gray-800">
                  <td>{productId}</td>
                  <td>{item.title}</td>
                  <td>{item.text}</td>
                  <td>
                    <img src={item.image_path} alt="" style={{ width: '50px', height: '50px' }} />
                  </td>
                  <td>
                    <button onClick={() => handleEdit(item._id)} className="font-semibold px-3 py-1 bg-green-600 hover:underline dark:text-cyan-500 mr-0 ">
                      Edit
                    </button>
                    <button onClick={() => handleDelete(item._id)} className='bg-red-600 px-1 py-1 font-semibold hover:bg-orange-700 text-white  hover:bg-sky-600 mr-0'>
                      Delete
                    </button>
                    <button onClick={() => navigate(`/admin/dashboard/viewdetailcars/${item._id}`)} className="bg-blue-600 px-1 py-1 font-semibold hover:bg-blue-700 text-white  hover:bg-sky-600 mr-0">
                    View
                  </button>
        
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
  
        {/* Pagination Controls */}
        <div className="flex justify-between mt-4">
          <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
            Previous
          </button>
          <span>{currentPage}</span>
          <button onClick={() => paginate(currentPage + 1)} disabled={indexOfLastCar >= filteredCars.length}>
            Next
          </button>
        </div>
      </div>
    );
}

export default Banner
