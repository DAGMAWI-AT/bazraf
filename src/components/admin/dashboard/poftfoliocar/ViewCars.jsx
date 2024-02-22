// Import necessary dependencies
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../admin.css'
// Other imports...

function ViewCars() {
  const [car, setCar] = useState(null);
  const { id } = useParams();  // Use useParams hook to get route parameters

  useEffect(() => {
    // Fetch data for a specific car based on its ID
    fetch(`https://bazra.onrender.com/allcars/${id}`)
      .then(response => response.json())
      .then(data => setCar(data))
      .catch(error => console.error('Error fetching car data:', error));
  }, [id]);  // Re-run the effect when the id changes

  if (!car) {
    return <p>Loading...</p>;  // Handle loading state
  }

  return (
    <div className="text-center car-details-container">
      <h2 className="car-details-title">Car Details</h2>
      <div className="car-image-container">
        <img src={car.imageUrl} alt="" className="car-image" />
      </div>

      <div className="car-info">
        <p className="car-info-item"><strong>Name:</strong> {car.name}</p>
        <p className="car-info-item"><strong>Color:</strong> {car.color}</p>
        <p className="car-info-item"><strong>Model:</strong> {car.model}</p>
        <p className="car-info-item"><strong>Engin:</strong> {car.engin}</p>
        <p className="car-info-item"><strong>Category:</strong> {car.category}</p>
        <p className="car-info-item"><strong>Price:</strong> Birr{car.price}</p>
        {/* Add more car details as needed */}
      </div>
    </div>
  );
}

export default ViewCars;
