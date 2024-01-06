
import React, { useState } from 'react';
import './Products.css';
import { products } from '../data/Data';
import Reveal from '../reveal';

const Products = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div id="products">
      <div className="homepage-products-section">
        <Reveal>
          <h2 className="products-header">
            <a href="/products">Products</a>
          </h2>
          <h4 className="products-subheader">
            We at Bazra Motors provide the highest quality products and services. We partner with our customers to finish
            all projects in a timely manner with superior results.
          </h4>
        </Reveal>
        <div className="products-container-wrapper">
          <div className="products-container">
            {products.map((product, index) => (
              <div
                key={index}
                className={`product-wrapper ${hoveredIndex === index ? 'active' : ''}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="card product-card">
                  <Reveal>
                    <img className="card-img-top product-image" src={product.image} alt={product.title} draggable="false" />
                  </Reveal>
                  <div className="card-body text-center product-body">
                    <Reveal>
                      <h5 className="card-title product-title">{product.title}</h5>
                      <p className="card-text product-description">{product.description}</p>
                    </Reveal>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="product-dots">
            {products.map((_, index) => (
              <div
                key={index}
                className={`product-dot ${hoveredIndex === index ? 'active' : ''}`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products