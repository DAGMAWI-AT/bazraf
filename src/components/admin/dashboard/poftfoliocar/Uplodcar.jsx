import React, { useState } from "react";
import { Button, Label, Select, TextInput, Textarea } from "flowbite-react";

function Uplodcar() {
  const carCategory = ["Lada Vasta", "Lada 4x4", "Lada Cross"];
  const [selectedCarCategory, setSelectedCarCategory] = useState(
    carCategory[0]
  );
  const [uploadCategory, setUploadCategory] = useState(false);

  const handleChangeSelectedValue = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue === "other") {
      // Handle the case when "Other" is selected
      // For example, show an input field to allow the user to write a new category
      setUploadCategory(true); // Add a state to track if user is editing the category
      setSelectedCarCategory(""); // Clear the selected category
    } else {
      setUploadCategory(false);
      setSelectedCarCategory(selectedValue);
    }
  };

  // handle cars submission
  const handleCarSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const category = form.category.value;
    const imageUrl = form.imageUrl.value;
    const description = form.description.value;
    const price = form.price.value;

    const carObj = {
      name,
      category,
      imageUrl,
      description,
      price,
    };

    fetch("https://bazra.onrender.com/addcars", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(carObj),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Car Upload Successfully");
        form.reset();
      });
  };

  return (
    <div className="px-4 my-12">
      <h2
        className="mb-8 text-3xl font-bold text-center"
        style={{ color: "#2d2e2e" }}
      >
        Upload cars
      </h2>

      <form
        onSubmit={handleCarSubmit}
        className="bg-white shadow-md rounded-md p-8"
      >
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="name" value="Car name" />
            </div>
            <TextInput
              id="name"
              type="text"
              placeholder="name of car"
              sizing="lg"
              required
            />
          </div>

          {uploadCategory ? (
            <div className='lg:w-1/2'>
              <div className='mb-2 block'>
                <Label htmlFor='category' value='Car category' />
              </div>
              <TextInput
                id='category'
                name='category'
                type='text'
                placeholder='Enter new category'
                sizing='lg'
                value={selectedCarCategory}
                onChange={(e) => setSelectedCarCategory(e.target.value)}
              />
            </div>
          ) : (
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
                <option value="other">Other</option>
              </Select>
            </div>
          )}
          
        </div>

        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="price" value="Car price" />
            </div>
            <TextInput
              id="price"
              type="text"
              placeholder="price of car"
              sizing="lg"
              required
            />
          </div>
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="imageUrl" value="Car image" />
            </div>
            <TextInput id="imageUrl" type="text" sizing="lg" />
          </div>
        </div>

        <div className="mb-2 block">
          <Label
            htmlFor="description"
            value="Car description"
            className="text-bold text-black"
          />
        </div>
        <Textarea
          className="w-full"
          id="description"
          type="text"
          placeholder="Write description of car..."
          required
          rows={6}
        />
        <Button
          type="submit"
          className="mt-5"
          style={{ color: "#11224893", background: "#11224893" }}
        >
          Upload Car
        </Button>
      </form>
    </div>
  );
}

export default Uplodcar;
