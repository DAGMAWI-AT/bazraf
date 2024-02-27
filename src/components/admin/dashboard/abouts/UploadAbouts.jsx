import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function UploadAbouts({ handleUploadAbout }) {
  const [formData, setFormData] = useState({
    text: "",
    visionDesc: "",
    title: "",
    missionDesc: "",
    objectiveDesc: "",
    cover: "",
    moreDesc: "",
    bannerDesc: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Call the function passed from the parent to handle the upload
    handleUploadAbout(formData);

    // Reset the form after submission
    setFormData({
      text: "",
      visionDesc: "",
      title: "",
      missionDesc: "",
      objectiveDesc: "",
      cover: "",
      moreDesc: "",
      bannerDesc: "",
    });

    // Optionally, navigate to a different page after successful upload
    navigate("/admin/dashboard"); // Change the route as needed
  };

  return (
    <div className="max-w-5xl mx-auto mt-4">
      <h2 className="text-center text-black">Upload Abouts Data</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-md p-8 text-black"
      >
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Text
            </label>

            <input
              type="text"
              name="text"
              value={formData.text}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Title:
            </label>
            <input
              type="text"
              name="text"
              value={formData.text}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Vision Description:
            </label>
            <textarea
              name="visionDesc"
              value={formData.visionDesc}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Mission Description:
            </label>
            <textarea
              name="missionDesc"
              value={formData.missionDesc}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Objectiv Description:
            </label>
            <textarea
              name="bannerDesc"
              value={formData.bannerDesc}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Detail Description:
            </label>
            <textarea
              name="moreDesc"
              value={formData.moreDesc}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Banner Description:
            </label>
            <textarea
              name="bannerDesc"
              value={formData.bannerDesc}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Cover Image URL:
            </label>
            <input
              type="file"
              name="cover"
              value={formData.cover}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
        </div>
        <button type="submit" className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >Upload</button>
      </form>
    </div>
  );
}

export default UploadAbouts;
