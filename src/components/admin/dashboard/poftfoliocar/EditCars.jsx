import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { Button, Label, Select, TextInput, Textarea } from 'flowbite-react';

function EditCars() {
  const {id} = useParams();
  const navigate = useNavigate(); // Create a navigate function

  const { name, category, imageUrl, description, price } = useLoaderData();
  console.log("Loader Data:", { name, category, imageUrl, description, price });
  
  const carCategory = ["Lada Vasta", "Lada 4x4", "Lada Cross"];
  const [selectedCarCategory, setSelectedCarCategory] = useState(carCategory[0]);

  const handleChangeSelectedValue = (event) => {
    console.log(event.target.value);
    setSelectedCarCategory(event.target.value);
  };

  // handle cars submission
  const handleCarUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const category = form.category.value;
    const imageUrl = form.imageUrl.value;
    const description = form.description.value;
    const price = form.price.value;

    const UpdateCar = {
      name,
      category,
      imageUrl,
      description,
      price,
    };
console.log(UpdateCar);


    fetch(`https://bazra.onrender.com/updatecars/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(UpdateCar),
    })
      .then((res) => res.json())
      .then((data) => {
        navigate('/admin/dashboard/managecars');
        alert('Car Update Successfully');
        // navigate('/admin/dashboard/managecars'); // Redirect to the manage cars page

        // form.reset();
      });
  };

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold text-center' style={{ color: '#2d2e2e' }}>
        Update Cars
      </h2>

      <form onSubmit={handleCarUpdate} className='flex lg:w-[1080px] flex-col flex-wrap gap-4'>
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className='mb-2 block'>
              <Label htmlFor='name' value='Car name' />
            </div>
            <TextInput id='name' name='name' type='text' placeholder='name of car' sizing='lg' defaultValue={name} required  />
          </div>

          <div className='lg:w-1/2'>
            <div className='mb-2 block'>
              <Label htmlFor='category' value='Car category' />
            </div>
            <Select
              sizing='lg'
              id='category'
              name='category'
              className='w-full rounded'
              value={selectedCarCategory}
              onChange={handleChangeSelectedValue}
            >
              {carCategory.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </div>
        </div>

        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className='mb-2 block'>
              <Label htmlFor='price' value='Car price' />
            </div>
            <TextInput id='price' type='text' placeholder='price of car' defaultValue={price} sizing='lg' required />
          </div>
          <div className='lg:w-1/2'>
            <div className='mb-2 block'>
              <Label htmlFor='imageUrl' value='Car image' />
            </div>
            <TextInput id='imageUrl' type='text' sizing='lg' defaultValue={imageUrl} />
          </div>
        </div>

        <div className='mb-2 block'>
          <Label htmlFor='description' value='Car description' className='text-bold text-black' />
        </div>
        <Textarea className='w-full' id='description' type='text' placeholder='Write description of car...' defaultValue={description} required rows={6} />
        <Button type='submit' className='mt-5' style={{ color: '#11224893', background: '#11224893' }}>
          Update Car
        </Button>
      </form>
    </div>
  );
}

export default EditCars;
