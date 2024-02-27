import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Label, TextInput, Textarea, FileInput } from "flowbite-react";

const WhoWeAre_Upload = () => {
  const [videoData, setVideoData] = useState({
    title: "",
    description: "",
    videoFile: null,
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;

    setVideoData((prevData) => ({
      ...prevData,
      [name]: name === "videoFile" ? files[0] : value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", videoData.title);
    formData.append("description", videoData.description);
    formData.append("videoFile", videoData.videoFile);

    // Add your fetch logic to send the data to the server
    fetch("https://bazra.onrender.com/addwhoweare", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Video added successfully:", data);
        alert("Video added successfully");
        navigate("/admin/dashboard/managewhoweare");
      })
      .catch((error) => {
        console.error("Error adding video:", error);
      });
  };

  return (
    <div className="px-4 my-12">
      <h2
        className="mb-8 text-3xl font-bold text-center"
        style={{ color: "#2d2e2e" }}
      >
        Add WhoWeAre
      </h2>

      <form
        onSubmit={handleFormSubmit}
        className="bg-white shadow-lg shadow-blue-gray-900 rounded-md p-8"
      >
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="title" value="Video Title" />
            </div>
            <input
              id="title"
              name="title"
              type="text"
              placeholder="Enter video title"
              sizing="lg"
              value={videoData.title}
              onChange={handleInputChange}
              required
              className='border border-blue-200 rounded-md p-3 w-full'

            />
          </div>
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="videoFile" value="Video File" />
            </div>
            <input
              id="videoFile"
              name="videoFile"
              type="file"
              sizing="lg"
              onChange={handleInputChange}
              className='border border-blue-200 rounded-md p-2 w-full'

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
          placeholder="Enter video description"
          className='border border-blue-200 focus:outline-none rounded-md p-2 w-full'
          value={videoData.description}
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
  );
};

export default WhoWeAre_Upload;
