// EditVideo.js
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
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:8000/whoweare/${id}`)
      .then((res) => res.json())
      .then((data) => setVideoData(data))
      .catch((error) => console.error('Error fetching video data:', error));
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setVideoData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setVideoData((prevData) => ({ ...prevData, videoFile: file }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', videoData.title);
    formData.append('description', videoData.description);
    formData.append('videoFile', videoData.videoFile);

    fetch(`http://localhost:8000/updatewhoweare/${id}`, {
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
      <form onSubmit={handleFormSubmit} className="flex lg:w-[1080px] flex-col flex-wrap gap-4">
        <div className="lg:w-1/2">
          <div className="mb-2 block">
            <Label htmlFor="title" value="Video Title" />
          </div>
          <TextInput
            id="title"
            name="title"
            type="text"
            placeholder="Enter video title"
            sizing="lg"
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

          />
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
        />
        <Button
          type="submit"
          className="mt-5"
          style={{ color: '#11224893', background: '#11224893' }}
        >
          Update Video
        </Button>
      </form>
    </div>
  );
};



export default WhoWeAreEdit
