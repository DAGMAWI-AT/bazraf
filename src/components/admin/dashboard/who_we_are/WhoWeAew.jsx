import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Table } from 'flowbite-react';
import Modal from 'react-modal';

const WhoWeAre = () => {
  const [videos, setVideos] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch video data when the component mounts
    fetch('http://localhost:8000/whoweare')
      .then((res) => res.json())
      .then((data) => setVideos(data))
      .catch((error) => console.error('Error fetching video data:', error));
  }, []);

  const handleEdit = (id) => {
    navigate(`/admin/dashboard/edit-whoweare/${id}`);
  };

  const handleDelete = (id) => {
    const isConfirmed = window.confirm('Are you sure you want to delete this video?');

    if (isConfirmed) {
      fetch(`http://localhost:8000/deletewhoweare/${id}`, {
        method: 'DELETE',
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error(`Failed to delete video (status ${res.status})`);
          }
          return res.json();
        })
        .then((data) => {
          alert('Video is Deleted Successfully');
          setVideos((prevVideos) => prevVideos.filter((video) => video._id !== id));
        })
        .catch((error) => {
          console.error('Error deleting video:', error);
        });
    }
  };

  const handleAddVideo = () => {
    navigate('/admin/dashboard/uploawhoweare');
  };

  const handleView = (video) => {
    setSelectedVideo(video);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  const modalStyle = {
    content: {
      width: '60%', // Set the desired width
      height: '80%', // Set the desired height
      margin: 'auto', // Center the modal horizontally
      overflow: 'auto', // Enable scrolling if the content exceeds the modal size
    },
  };

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold text-center" style={{ color: '#2d2e2e' }}>
        Manage Videos
      </h2>
      <button onClick={handleAddVideo} className="font-semibold px-3 py-1 bg-green-600 hover:underline dark:text-cyan-500 mr-0">
        Add Video
      </button>

      {/* Video Table */}
      <Table className="relative lg:w-[1080px]">
        <thead>
          <tr>
            <th>id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Video</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {videos.map((video, index) => (
            <tr key={video._id} className="bg-white dark:border-black-700 dark:bg-gray-800">
              <td>{index + 1}</td>
              <td>{video.title}</td>
              <td>{video.description}</td>
              <td>
                {/* Embed small video in the cell */}
                <video width="150" height="100" controls>
                  <source src={`http://localhost:8000/videos/${video.videoFile}`} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </td>
              <td>
                <button onClick={() => handleEdit(video._id)} className="font-semibold px-3 py-1 bg-green-600 hover:underline dark:text-cyan-500 mr-2">
                  Edit
                </button>
                <button onClick={() => handleDelete(video._id)} className="bg-red-600 px-1 py-1 font-semibold hover:bg-orange-700 text-white  hover:bg-sky-600 mr-2">
                  Delete
                </button>
                <button onClick={() => handleView(video)} className="bg-blue-600 px-1 py-1 font-semibold hover:bg-blue-700 text-white  hover:bg-sky-600 mr-2">
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
          <button onClick={closeModal} className="float-right text-red-600 text-2xl cursor-pointer" style={{ marginRight: '10px' }}>
            &times;
          </button>
          <video width="80%" height="10%" controls>
          <source src={`http://localhost:8000/videos/${selectedVideo.videoFile}`} type="video/mp4" />
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
