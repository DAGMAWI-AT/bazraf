// Hero.js

import React, { useState, useEffect } from 'react';
import './hero.css';
import { Link } from 'react-router-dom';
import { scroller } from 'react-scroll';
import Reveal from '../../reveal';
import { home } from '../../data/Data';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [door, setDoor] = useState(false);
  const [prevSlide, setPrevSlide] = useState(home.length - 1);
  const [textVisible, setTextVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setDoor(true);
      setTextVisible(false); // Hide text before changing slide
      setTimeout(() => {
        setPrevSlide(currentSlide);
        setCurrentSlide((prevSlide) => (prevSlide + 1) % home.length);
        setDoor(false);
      }, 800);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  useEffect(() => {
    // Show text after changing slide
    setTextVisible(true);
  }, [currentSlide]);

  const scrollToTarget = () => {
    scroller.scrollTo('ID1', {
      smooth: true,
      duration: 500,
    });
  };

  const goToSlide = (index) => {
    setPrevSlide(currentSlide);
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    setPrevSlide(currentSlide);
    setCurrentSlide((prevSlide) => (prevSlide - 1 + home.length) % home.length);
  };

  const goToNextSlide = () => {
    setPrevSlide(currentSlide);
    setCurrentSlide((prevSlide) => (prevSlide + 1) % home.length);
  };

  return (
    <div className="slider">
      {home.map((item, index) => (
        <div key={index} className={`slide ${index === currentSlide ? 'current' : ''}`}>
          <img src={item.cover} alt={`Slide ${index + 1}`} draggable="false" />
          <div className={`contante ${index === currentSlide ? 'current' : ''}`}>
            <div>
              <h1 className="heading">
                <Typewriter
                  options={{
                    strings: [item.title],
                    autoStart: true,
                    loop: true,
                  }}
                  data-aos="zoom-in-right"
                />
              </h1>
              <h3>{item.text}</h3>
            </div>
            <hr />
            <br />
            <div>
              <Link to="/services" className="primaryBtn" data-aos="fade-up-right">
                Read More
              </Link>
            </div>
          </div>
        </div>
      ))}

      <div className="slider-circles">
        {home.map((_, index) => (
          <div
            key={index}
            className={`circle ${index === currentSlide ? 'active' : ''} ${
              index === prevSlide ? 'previous' : ''
            }`}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
      </div>

      <div className="scroll-wrapper">
        <a href="#service" onClick={scrollToTarget}>
          <i className="scroll fas fa-chevron-down"></i>
        </a>
      </div>
    </div>
  );
};

export default Hero;
