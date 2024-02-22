import { useEffect, useState } from 'react';
import { Table } from 'flowbite-react';
import { Link, useNavigate } from 'react-router-dom';

function ManageCars() {
  const [cars, setCars] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [carsPerPage] = useState(3);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://bazra.onrender.com/allcars")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);

  const filteredCars = cars.filter((car) => {
    const searchMatch = car.name.toLowerCase().includes(searchTerm.toLowerCase());
    const categoryMatch = filterCategory ? car.category === filterCategory : true;
    return searchMatch && categoryMatch;
  });

  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);

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
          setCars((prevCars) => prevCars.filter((car) => car._id !== id));
        })
        .catch((error) => {
          console.error("Error deleting car:", error);
        });
    }
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold text-center' style={{ color: '#2d2e2e' }}>
        Manage Cars
      </h2>
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

      {/* Cars Table */}
      <Table className='relative lg:w-[1080px]'>
        <thead>
          <tr>
            <th>Product id</th>
            <th>Product name</th>
            <th>Category</th>
            <th>CarImg</th>
            <th>Descripion</th>
            <th>Price</th>
            <th className='text-center'>Action</th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {currentCars.map((item, i) => {
            const productId = i + 1 + (currentPage - 1) * carsPerPage;
            return (
              <tr key={item._id} className="bg-white dark:border-black-700 dark:bg-gray-800">
                <td>{productId}</td>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>
                  <img src={item.imageUrl} alt="" style={{ width: '50px', height: '50px' }} />
                </td>
                <td>describes</td>
                <td>{item.price}</td>
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
        <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}             className="bg-blue-500 text-white px-2 py-1"
        >
          Previous
        </button>
        <span>{currentPage}</span>
        <button onClick={() => paginate(currentPage + 1)} disabled={indexOfLastCar >= filteredCars.length}             className="bg-blue-500 text-white px-2 py-1"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default ManageCars;
