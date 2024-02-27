import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Label, TextInput, Textarea } from 'flowbite-react';

const WhoWeAreEdit = () => {
  const { id } = useParams();
  const [videoData, setVideoData] = useState({
    title: '',
    description: '',
    videoFile: null,
  });
  const [videoPreview, setVideoPreview] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://bazra.onrender.com/whoweare/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setVideoData(data);
        setVideoPreview(`https://bazra.onrender.com/videos/${data.videoFile}`);
      })
      .catch((error) => console.error('Error fetching video data:', error));
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setVideoData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setVideoData((prevData) => ({ ...prevData, videoFile: file }));

    // Display a preview of the selected video
    setVideoPreview(URL.createObjectURL(file));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', videoData.title);
    formData.append('description', videoData.description);
    formData.append('videoFile', videoData.videoFile);

    fetch(`https://bazra.onrender.com/updatewhoweare/${id}`, {
      method: 'PATCH',
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('Video updated successfully:', data);
        alert('Video updated successfully');
        navigate('/admin/dashboard/managewhoweare');
      })
      .catch((error) => {
        console.error('Error updating video:', error);
      });
  };

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold text-center" style={{ color: '#2d2e2e' }}>
        Edit Video
      </h2>
      <form onSubmit={handleFormSubmit} className="bg-white shadow-lg shadow-blue-gray-900 rounded-md p-8 text-black text-center">
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="title" value="Video Title" />
            </div>
            <input
              id="title"
              name="title"
              type="text"
              className="border border-blue-200 rounded-md p-4 w-full"
              placeholder="Enter video title"
              value={videoData.title}
              onChange={handleInputChange}
              required
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
              onChange={handleFileChange}
              accept="video/*"
              className="border border-blue-200 rounded-md p-3 w-full"
            />
            {/* Display video preview */}
            {videoPreview && (
              <video width="150" height="100" controls className="mx-auto block max-w-[100px] mt-2">
                <source src={videoPreview} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </div>
        <div className="mb-2 block">
          <Label htmlFor="description" value="Video Description" />
        </div>
        <Textarea
          id="description"
          name="description"
          placeholder="Enter video description"
          sizing="lg"
          value={videoData.description}
          onChange={handleInputChange}
          required
          rows={6}
          className="border border-blue-200 rounded-md p-3 w-full"
        />
        <Button type="submit" className="mt-5" style={{ color: '#11224893', background: '#11224893' }}>
          Update Video
        </Button>
      </form>
    </div>
  );
};

export default WhoWeAreEdit;
