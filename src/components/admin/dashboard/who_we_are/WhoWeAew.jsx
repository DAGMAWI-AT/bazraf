import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Table, TextInput } from "flowbite-react";
import Modal from "react-modal";

const WhoWeAre = () => {
  const [videos, setVideos] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch video data when the component mounts
    fetch("https://bazra.onrender.com/whoweare")
      .then((res) => res.json())
      .then((data) => setVideos(data))
      .catch((error) => console.error("Error fetching video data:", error));
  }, []);

  const handleEdit = (id) => {
    navigate(`/admin/dashboard/edit-whoweare/${id}`);
  };

  const handleDelete = (id) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this video?"
    );

    if (isConfirmed) {
      fetch(`https://bazra.onrender.com/deletewhoweare/${id}`, {
        method: "DELETE",
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error(`Failed to delete video (status ${res.status})`);
          }
          return res.json();
        })
        .then((data) => {
          alert("Video is Deleted Successfully");
          setVideos((prevVideos) =>
            prevVideos.filter((video) => video._id !== id)
          );
        })
        .catch((error) => {
          console.error("Error deleting video:", error);
        });
    }
  };

  const handleAddVideo = () => {
    navigate("/admin/dashboard/uploawhoweare");
  };

  const handleView = (video) => {
    setSelectedVideo(video);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter videos based on the search query
  const filteredVideos = videos.filter((video) =>
    video.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const modalStyle = {
    content: {
      width: "60%", // Set the desired width
      height: "80%", // Set the desired height
      margin: "auto", // Center the modal horizontally
      overflow: "auto", // Enable scrolling if the content exceeds the modal size
    },
  };

  return (
    <div className="px-4 my-8">
      <h2
        className="mb-8 text-3xl font-bold text-center"
        style={{ color: "#2d2e2e" }}
      >
        Manage Videos
      </h2>

      <div className="container mx-auto p-4 box-decoration-slice justify-between">
        <button
          onClick={handleAddVideo}
          className="font-semibold float-right px-3 py-1 bg-green-600 hover:underline dark:text-cyan-500 mr-3"
        >
          Add Video
        </button>

        {/* Search Input */}
        <div className="mb-4">
          <input
            id="search"
            type="text"
            placeholder="Search..."
            sizing="lg"
            value={searchQuery}
            onChange={handleSearch}
            className="rounded-full ml-3 border focus:outline-none  focus:border-blue-500 p-1  hover:border-blue-500"
          />
        </div>
        </div>

        {/* Video Table */}
        <Table className="relative container table-auto w-full mt-4  mx-auto text-black  bg-white box-decoration-slice  shadow-2xl shadow-blue-gray-900">
        <thead>
            <tr>
              <th className="text-center border p-3">ID</th>
              <th className="text-center border p-3">Title</th>
              <th className="text-center border p-3">Description</th>
              <th className="text-center border p-3">Video</th>
              <th className="text-center border p-3">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {filteredVideos.map((video, index) => (
              <tr
                key={video._id}
                className="bg-white dark:border-black-700 dark:bg-gray-800"
              >
                <td className="text-center">{index + 1}</td>
                <td className="text-center">{video.title}</td>
                <td className="text-center">{video.description}</td>
                <td className="text-center">
                  {/* Embed small video in the cell */}
                  <video
                    width="150"
                    height="100"
                    controls
                    className="mx-auto block max-w-[100px]"
                  >
                    <source
                      src={`https://bazra.onrender.com/videos/${video.videoFile}`}
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </td>
                <td className="text-center">
                  <button
                    onClick={() => handleEdit(video._id)}
                    className="font-semibold px-3 py-1 bg-green-600 hover:underline dark:text-cyan-500 mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(video._id)}
                    className="bg-red-600 px-1 py-1 font-semibold hover:bg-orange-700 text-white  hover:bg-sky-600 mr-2"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleView(video)}
                    className="bg-blue-600 px-1 py-1 font-semibold hover:bg-blue-700 text-white  hover:bg-sky-600 mr-2"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

      {/* Modal for viewing video details */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Video Details"
        style={modalStyle}
      >
        {selectedVideo && (
          <div>
            <button
              onClick={closeModal}
              className="float-right text-red-600 text-2xl cursor-pointer"
              style={{ marginRight: "10px" }}
            >
              &times;
            </button>
            <video width="80%" height="10%" controls>
              <source
                src={`https://bazra.onrender.com/videos/${selectedVideo.videoFile}`}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <h2>{selectedVideo.title}</h2>
            <p>{selectedVideo.description}</p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default WhoWeAre;
