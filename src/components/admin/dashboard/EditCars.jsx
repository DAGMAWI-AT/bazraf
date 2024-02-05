import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

function EditCars() {
  const { id } = useParams();
  const [carData, setCarData] = useState({});
  const [editedData, setEditedData] = useState({
    // Define the state structure for edited data
    name: '',
    category: '',
    imageUrl: '',
    // ... other fields
  });
  const {name, category, imageUrl,description, price}=useLoaderData();

  useEffect(() => {
    // Fetch the car data based on the ID from the URL
    fetch(`http://localhost:8000/getcar/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCarData(data);
        // Set the initial state for edited data
        setEditedData({
          name: data.name,
          category: data.category,
          imageUrl: data.imageUrl,
          // ... other fields
        });
      })
      .catch((error) => {
        console.error('Error fetching car data:', error);
      });
  }, [id]);

  const handleInputChange = (e) => {
    // Update the state when input fields change
    setEditedData({
      ...editedData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSaveChanges = () => {
    // Perform the update to the backend with the edited data
    fetch(`http://localhost:8000/updatecar/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editedData),
    })
      .then((res) => res.json())
      .then((data) => {
        alert('Car data updated successfully');
        // You can redirect to the manage cars page or take any other action
      })
      .catch((error) => {
        console.error('Error updating car data:', error);
      });
  };

  return (
    <div>
      <h2>Edit Car - {id}</h2>
      {/* Render your form with input fields for editing data */}
      <form>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={editedData.name}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Category:
          <input
            type="text"
            name="category"
            value={editedData.category}
            onChange={handleInputChange}
          />
        </label>
        <br />
        {/* Add other fields as needed */}
        <button type="button" onClick={handleSaveChanges}>
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default EditCars;
