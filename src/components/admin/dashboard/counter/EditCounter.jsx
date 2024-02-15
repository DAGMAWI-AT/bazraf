import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditCounter = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [counterData, setCounterData] = useState({});
  const [editedData, setEditedData] = useState({
    icon: '',
    title: '',
    number: 0,
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`../../../data/Data/counter/${id}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch counter data: ${response.statusText}`);
        }

        const data = await response.json();
        setCounterData(data);
        setEditedData({
          icon: data.icon,
          title: data.title,
          number: data.number,
        });
      } catch (error) {
        console.error('Error fetching counter data:', error.message);
        setError('Failed to fetch counter data. Please try again.');
      }
    };

    fetchData();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSaveChanges = () => {
    // Implement your logic to save the edited data
    console.log('Saving changes:', editedData);
    // You might want to use a library like axios to send the data to the server
    // Example using fetch API:
    // fetch(`/api/counters/${id}`, {
    //   method: 'PUT',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(editedData),
    // })
    //   .then(response => response.json())
    //   .then(data => console.log('Updated counter:', data))
    //   .catch(error => console.error('Error updating counter:', error));
  };

  return (
    <div className="max-w-5xl mx-auto mt-4">
      <h2 className="dark:text-black text-center mb-4 " style={{ color: '#2d2e2e' }}>Edit Counter</h2>

      {error && <div className="text-red-500 mb-4">{error}</div>}

      <form className="bg-white shadow-md rounded-md p-8">
        
      <div className="grid grid-cols-2 gap-4 mt-4">

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={editedData.title}
            onChange={handleInputChange}
            className="border  border-blue-500  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Number
          </label>
          <input
            type="number"
            name="number"
            value={editedData.number}
            onChange={handleInputChange}
            className="border  border-blue-500   w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        </div>
        <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Icon
        </label>
        <input
          type="file"
          name="icon"
          value={editedData.icon}
          onChange={handleInputChange}
          className="border  border-blue-500  rounded w-half py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
        <button
          type="button"
          onClick={handleSaveChanges}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditCounter;
