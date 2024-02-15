import React, { useState } from "react";

const UploadCounters = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [icon, setIcon] = useState("");
  const [title, setTitle] = useState("");
  const [number, setNumber] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior

    // Implement your upload logic here
    if (selectedFile && icon && title && number) {
      console.log("Uploading data:", {
        icon,
        title,
        number,
        file: selectedFile,
      });
      // You might want to use a library like axios to send the data to the server
      // Example using fetch API:
      // const formData = new FormData();
      // formData.append('file', selectedFile);
      // formData.append('icon', icon);
      // formData.append('title', title);
      // formData.append('number', number);
      // fetch('/api/upload', {
      //   method: 'POST',
      //   body: formData,
      // })
      //   .then(response => response.json())
      //   .then(data => console.log(data))
      //   .catch(error => console.error('Error:', error));
    }
  };

  return (
    <div className="max-w-5xl mx-auto mt-4">
      <h2 className="dark:text-black text-center mb-4">Upload Counters</h2>

      <form
        className="bg-white shadow-md rounded-md p-8"
        onSubmit={handleUpload}
      >
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border border-blue-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Number
            </label>
            <input
              type="text"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className="border border-blue-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Icon
          </label>
          <input
            type="file"
            value={icon}
            onChange={(e) => setIcon(e.target.value)}
            className="border border-blue-500 rounded w-half py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default UploadCounters;
