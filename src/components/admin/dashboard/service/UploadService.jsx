import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Label, TextInput, Textarea, FileInput } from "flowbite-react";

const UploadService = () => {
  // const [formData, setFormData] = useState({
  //   title: '',
  //   description: '',
  //   imageFiles: null,
  // });
  // const navigate = useNavigate();
  // const [error, setError] = useState('');

  // const handleChange = (e) => {
  //   const { name, value, files } = e.target;

  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: name.includes('File') ? files[0] : value,
  //   }));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   // Validate form data
  //   if (!formData.title || !formData.description || !formData.imageFiles) {
  //     setError('Please fill out all fields.');
  //     return;
  //   }

  //   // Clear previous errors
  //   setError('');

  //   // Create a FormData object to handle file uploads
  //   const serviceManagerData = new FormData();
  //   serviceManagerData.append('title', formData.title);
  //   serviceManagerData.append('description', formData.description);
  //   serviceManagerData.append('imageFiles', formData.imageFiles);

  //   // Make a POST request to your server to handle the upload
  //   fetch('http://localhost:8000/uploadservice', {
  //     method: 'POST',
  //     body: serviceManagerData,
  //   })
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log("Data added successfully:", data);
  //     alert("Data added successfully");
  //     navigate("/admin/dashboard/manageservice");
  //   })
  //   .catch((error) => {
  //     console.error("Error adding Data:", error);
  //   });
  // };
  const [serviceData, setserviceData] = useState({
    title: "",
    description: "",
    videoFile: null,
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;

    setserviceData((prevData) => ({
      ...prevData,
      [name]: name === "imageFiles" ? files[0] : value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", serviceData.title);
    formData.append("description", serviceData.description);
    formData.append("videoFile", serviceData.imageFiles);

    // Add your fetch logic to send the data to the server
    fetch("http://localhost:8000/uploadservice", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("serviceData added successfully:", data);
        alert("serviceData added successfully");
        navigate("/admin/dashboard/manageservice");
      })
      .catch((error) => {
        console.error("Error adding serviceData:", error);
      });
  };

  return (
    <div className="px-4 my-12">
      <h2
        className="mb-8 text-3xl font-bold text-center"
        style={{ color: "#2d2e2e" }}
      >
        Add service
      </h2>
    <div className="max-w-5xl mx-auto mt-4">
      <form encType="multipart/form-data" onSubmit={handleFormSubmit} className="bg-white shadow-md rounded-md p-8 text-black">
      
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="title" value="Video Title" />
            </div>
            <TextInput
              id="title"
              name="title"
              type="text"
              placeholder="Enter title"
              sizing="lg"
              value={serviceData.title}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="imageFiles" value="Video File" />
            </div>
            <FileInput
              id="imageFiles"
              name="imageFiles"
              type="file"
              sizing="lg"
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="mb-2 block">
          <Label htmlFor="description" value="Video Description" />
        </div>
        <Textarea
          id="description"
          name="description"
          placeholder="Enter description"
          sizing="lg"
          value={serviceData.description}
          onChange={handleInputChange}
          required
          rows={6}
        />
        <Button
          type="submit"
          className="mt-5"
          style={{ color: "#11224893", background: "#11224893" }}
        >
          Add WhoWeAre
        </Button>
      </form>
      </div>
    </div>
  );
};

export default UploadService;
