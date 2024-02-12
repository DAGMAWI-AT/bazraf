import React, { useState } from 'react';
import { Button, Label, TextInput } from 'flowbite-react';

function BannerAdd() {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [error, setError] = useState(null);

  const handleBannerSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('text', text);
      formData.append('imageFile', imageFile);

      const response = await fetch('http://localhost:8000/addbanner', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Failed to upload banner (status ${response.status})`);
      }

      const data = await response.json();

      if (data.success) {
        alert('Banner Uploaded Successfully');
        setTitle('');
        setText('');
        setImageFile(null);
        setImagePreview(null);
        setError(null);
      } else {
        setError('Error: Unable to upload banner');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred while uploading the banner');
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setImageFile(file);

      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };

      reader.readAsDataURL(file);
    } else {
      setImageFile(null);
      setImagePreview(null);
    }
  };

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold text-center' style={{ color: '#2d2e2e' }}>
        Upload Banner
      </h2>

      <form onSubmit={handleBannerSubmit} className='flex lg:w-[1080px] flex-col flex-wrap gap-4'>
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className='mb-2 block'>
              <Label htmlFor='title' value='Banner Title' />
            </div>
            <TextInput
              id='title'
              type='text'
              placeholder='Title of Banner'
              sizing='lg'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className='lg:w-1/2'>
            <div className='mb-2 block'>
              <Label htmlFor='text' value='Banner Text' />
            </div>
            <TextInput
              id='text'
              type='text'
              placeholder='Banner Text'
              sizing='lg'
              value={text}
              onChange={(e) => setText(e.target.value)}
              required
            />
          </div>
        </div>

        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className='mb-2 block'>
              <Label htmlFor='imageFile' value='Banner Image' />
            </div>
            <input
              type='file'
              id='imageFile'
              accept='image/*'
              onChange={handleImageChange}
              className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md'
            />
          </div>
          {imagePreview && (
            <div className='lg:w-1/2'>
              <img src={imagePreview} alt='Image Preview' className='max-w-full h-auto' />
            </div>
          )}
        </div>

        {error && <div className='text-red-500'>{error}</div>}

        <Button type='submit' className='mt-5' style={{ color: '#11224893', background: '#11224893' }}>
          Upload Banner
        </Button>
      </form>
    </div>
  );
}

export default BannerAdd;
