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
  const handleUpload = () => {
    navigate("/admin/dashboard/uploadcars");
  };
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold text-center' style={{ color: '#2d2e2e' }}>
        Manage Cars
      </h2>
     

      <div className="container mx-auto p-4 bg-white box-decoration-slice  shadow-2xl shadow-blue-gray-900">
 
      <button
      onClick={() => handleUpload()}
      className="font-semibold px-3 py-1 bg-green-600 hover:underline dark:text-cyan-500  mr-4 float-right"
    >
      Upload
    </button>
   
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="rounded-full ml-3 border focus:outline-none  focus:border-blue-500 p-1  hover:border-blue-500"

        />
        {/* Add your category filter dropdown here */}
      </div>
      </div>
      {/* Cars Table */}

      <Table className='relative container table-auto w-full mt-4  mx-auto text-black  bg-white box-decoration-slice  shadow-2xl shadow-blue-gray-900'>
        <thead>
          <tr>
            <th className="text-center border p-3">ID</th>
            <th className="text-center border p-3">Product name</th>
            <th className="text-center border p-3">Category</th>
            <th className="text-center border p-3">CarImg</th>
            <th className="text-center border p-3">Descripion</th>
            <th className="text-center border p-3">Price</th>
            <th className="text-center border p-3">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {currentCars.map((item, i) => {
            const productId = i + 1 + (currentPage - 1) * carsPerPage;
            return (
              <tr key={item._id} className="bg-white dark:border-black-700 dark:bg-gray-800">
                <td className="text-center">{productId}</td>
                <td className="text-center">{item.name}</td>
                <td className="text-center">{item.category}</td>
                <td className="text-center">
                  <img src={item.imageUrl} alt=""  className="mx-auto block max-w-[60px]" />
                </td>
                <td className="text-center">describes</td>
                <td className="text-center">{item.price}</td>
                <td className="text-center">
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
