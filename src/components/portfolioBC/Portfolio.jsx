// components/Portfolio.js
import React, { useState, useEffect } from 'react';
import Heading from '../common/Heading';
import { portfolio } from '../data/Data';

const allCategories = ["all", ...new Set(portfolio.map((item) => item.category))];

const Portfolio = () => {
  const [list, setList] = useState(portfolio);
  const [category, setCategory] = useState(allCategories);

  const filterItems = (selectedCategory) => {
    if (selectedCategory === "all") {
      setList(portfolio.flatMap((item) => item.items || []));
    } else {
      const newItems = portfolio.find((item) => item.category === selectedCategory)?.items || [];
      setList(newItems);
    }
  };

  useEffect(() => {
    // Call filterItems with "all" category when the component mounts
    filterItems("all");
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

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
              <div key={i} className='box'>
                <div className="img">
                  <img src={item.cover} alt="" data-aos="fade-up" data-aos-duration="2000" />
                </div>
                <div className="overlay">
                  <h3 data-aos="fade-down-right">{item.title}</h3>
                  <span data-aos="fade-down-left">{item.name}</span>
                  {/* <Visibility /> Uncomment this line if you use the Visibility icon */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
};

export default Portfolio;
