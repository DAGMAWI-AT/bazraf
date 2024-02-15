import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Label, TextInput } from 'flowbite-react';

function BannerEdit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [banner, setBanner] = useState({ title: '', text: '', imageFile: '' });

  useEffect(() => {
    // Fetch the banner data based on the ID when the component mounts
    fetch(`http://localhost:8000/allbanner/${id}`)
      .then((res) => res.json())
      .then((data) => setBanner(data))
      .catch((error) => console.error('Error fetching banner data:', error));
  }, [id]);

  const handleBannerUpdate = (event) => {
    event.preventDefault();

    const form = event.target;
    const updatedBanner = new FormData();
    updatedBanner.append('title', form.title.value);
    updatedBanner.append('text', form.text.value);
    updatedBanner.append('imageFile', form.imageFile.files[0]);

    fetch(`http://localhost:8000/updatebanner/${id}`, {
      method: 'PATCH',
      body: updatedBanner,
    })
      .then((res) => res.json())
      .then((data) => {
        navigate('/admin/dashboard/managebanner');
        alert('Banner Updated Successfully');
      })
      .catch((error) => {
        console.error('Error updating banner:', error);
      });
  };

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold text-center" style={{ color: '#2d2e2e' }}>
        Update Banner
      </h2>

      <form onSubmit={handleBannerUpdate} className="flex lg:w-[1080px] flex-col flex-wrap gap-4" encType="multipart/form-data">
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="title" value="Banner Title" />
            </div>
            <TextInput
              id="title"
              name="title"
              type="text"
              placeholder="Title of the banner"
              sizing="lg"
              defaultValue={banner.title}
              required
            />
          </div>
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="text" value="Banner Text" />
            </div>
            <TextInput
              id="text"
              name="text"
              type="text"
              placeholder="Text of the banner"
              defaultValue={banner.text}
              sizing="lg"
              required
            />
          </div>
        </div>

        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="imageFile" value="Banner Image" />
            </div>
            <input
              id="imageFile"
              name="imageFile"
              type="file"
              accept="image/*"
              defaultValue={banner.imageFile}
              required
            />
          </div>
        </div>

        <Button type="submit" className="mt-5" style={{ color: '#11224893', background: '#11224893' }}>
          Update Banner
        </Button>
      </form>
    </div>
  );
}

export default BannerEdit;