import React, { useState } from "react";

function EditService() {
  const [serviceData, setServiceData] = useState({
    title: "",
    imageUrl: "",
    icon: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, type, value, files } = e.target;

    if (type === "file") {
      // Handle file inputs
      const reader = new FileReader();
      reader.onloadend = () => {
        setServiceData((prevData) => ({
          ...prevData,
          [name]: reader.result,
        }));
      };

      if (files.length > 0) {
        reader.readAsDataURL(files[0]);
      }
    } else {
      // Handle regular inputs
      setServiceData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your logic for updating the service data
    console.log("Service data submitted:", serviceData);
  };

  return (
    <div className="px-4 my-8">
      <div className="max-w-5xl mx-auto mt-4 p-4 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-bold mb-4 text-center text-black">
          Edit Service
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="flex gap-8">
            <div className="lg:w-1/2">
              <label className="block mb-2">
                Title:
                <input
                  type="text"
                  name="title"
                  value={serviceData.title}
                  onChange={handleChange}
                  className="border border-gray-300 p-2 w-full rounded-md"
                />
              </label>
            </div>
            <div className="lg:w-1/2">
              <label className="block mb-2">
                Image URL:
                <input
                  type="file"
                  name="imageUrl"
                  onChange={handleChange}
                  className="border border-gray-300 p-2 w-full rounded-md"
                />
              </label>
            </div>
          </div>

          <div className="flex gap-8">
            <div className="lg:w-1/2">
              <label className="block mb-2">
                Icon:
                <input
                  type="file"
                  name="icon"
                  onChange={handleChange}
                  className="border border-gray-300 p-2 w-full rounded-md"
                />
              </label>
            </div>
            <div className="lg:w-1/2">
              <label className="block mb-2">
                Description:
                <textarea
                  name="description"
                  value={serviceData.description}
                  onChange={handleChange}
                  className="border border-gray-300 p-2 w-full rounded-md"
                />
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditService;
