// components/Portfolio.js
import React, { useState, useEffect } from 'react';
import Heading from '../common/Heading';
import Modal from './Modal'; // Import the Modal component
import { Card } from 'flowbite-react';

const Portfolio = () => {
  const [list, setList] = useState([]); // Change initial state to an empty array
  const [category, setCategory] = useState([]);
  const [cars, setCars] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null); // To track the selected item
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8000/allcars")
      .then((res) => res.json())
      .then((data) => {
        setCars(data);

        // Extract unique categories from the data
        const uniqueCategories = ["all", ...new Set(data.flatMap((item) => item.category))];
        setCategory(uniqueCategories);

        // Set the initial list to all cars
        setList(data);
      });
  }, []);

  const filterItems = (selectedCategory) => {
    if (selectedCategory === "all") {
      setList(cars);
    } else {
      const newItems = cars.filter((item) => item.category === selectedCategory);
      setList(newItems);
    }
  };

  const openModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setIsModalOpen(false);
  };

  return (
    <div className='portf'>
      <article>
        <div className="container" data-aos="fade-down-right">
          <Heading title='Bazra Motors' data-aos="fade-up" data-aos-duration="2000" />
          <div className="catButton">
            {category.map((cat) => (
              <button
                key={cat}
                className=''
                onClick={() => filterItems(cat)}
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="content grid3">
            {list.map((item, i) => (
              <div key={i} className='box' onClick={() => openModal(item)}>
                <div className="img">
                  <img src={item.imageUrl} alt="" data-aos="fade-up" data-aos-duration="2000" />
                </div>
                <div className="overlay">
                  <h3 data-aos="fade-down-right">{item.name}</h3>
                  <h3 data-aos="fade-down-right">{item.category}</h3>
                  <span data-aos="fade-down-left">{item.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>
      {isModalOpen && <Modal item={selectedItem} onClose={closeModal} />}
    </div>
  );
};

export default Portfolio;
