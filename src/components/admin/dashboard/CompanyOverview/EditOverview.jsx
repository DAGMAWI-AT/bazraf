import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EditOverview() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    hTitle: '',
    number: '',
    iconFile: null,
    title: '',
    description: '',
  });

  useEffect(() => {
    // Fetch the existing data for the specified ID
    fetch(`http://localhost:8000/bzoverview/${id}`)
      .then((response) => response.json())
      .then((data) => setFormData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, [id]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'iconFile' ? files[0] : value,
    }));
  };


  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const updatedOverview = new FormData();
    updatedOverview.append('title', form.title.value);
    updatedOverview.append('hTitle', form.hTitle.value);
    updatedOverview.append('number', form.number.value);
    updatedOverview.append('description', form.description.value);
    updatedOverview.append('iconFile', form.iconFile.files[0]);

    fetch(`http://localhost:8000/bzoverview/${id}`, {
      method: 'PATCH',
      body: updatedOverview,
    })
      .then((res) => res.json())
      .then((data) => {
        navigate('/admin/dashboard/managecompanyoverview');
        alert('overview Updated Successfully');
      })
      .catch((error) => {
        console.error('Error updating overview:', error);
      });
  };
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Edit Overview</h2>
      <form onSubmit={handleSubmit} className="flex flex-wrap -mx-4 text-black">
        <div className="mb-4 w-full lg:w-1/2 px-4">
          <label htmlFor="hTitle" className="block text-sm font-medium text-gray-600">
            Heading Title:
          </label>
          <input
            type="text"
            id="hTitle"
            name="hTitle"
            value={formData.hTitle}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>

        <div className="mb-4 w-full lg:w-1/2 px-4">
          <label htmlFor="number" className="block text-sm font-medium text-gray-600">
            Number:
          </label>
          <input
            type="text"
            id="number"
            name="number"
            value={formData.number}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>

        <div className="mb-4 w-full lg:w-1/2 px-4">
          <label htmlFor="iconFile" className="block text-sm font-medium text-gray-600">
            Icon File:
          </label>
          <input
            type="file"
            id="iconFile"
            name="iconFile"
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>

        <div className="mb-4 w-full lg:w-1/2 px-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-600">
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>

        <div className="mb-4 w-full px-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-600">
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>

        <div className="mb-4 w-full px-4">
          <button type="submit" className="bg-blue-500 text-white px-4 py-2">
            Update Overview
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditOverview;
