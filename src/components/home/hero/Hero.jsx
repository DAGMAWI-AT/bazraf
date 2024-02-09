// Hero.js

import React, { useState, useEffect } from "react";
import "./hero.css";
import { Link } from "react-router-dom";
import { scroller } from "react-scroll";
import Reveal from "../../reveal";
import { home } from "../../data/Data";
import Typewriter from "typewriter-effect";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [door, setDoor] = useState(false);
  const [prevSlide, setPrevSlide] = useState(home.length - 1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDoor(true);
      setTimeout(() => {
        setPrevSlide(currentSlide);
        setCurrentSlide((prevSlide) => (prevSlide + 1) % home.length);
        setDoor(false);
      }, 800);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const scrollToTarget = () => {
    scroller.scrollTo("ID1", {
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
    <div className="hero-section">
      <div className="page-turn">
        <div className={`page-turn ${door ? "slide-enter" : ""}`}>
          <img
            src={home[currentSlide].cover}
            alt={`Slide ${currentSlide + 1}`}
            draggable="false"
          />
        </div>
      </div>

      <div className="contante">
        <div>
          <h1 className="Heroheading">
            <Typewriter
              options={{
                strings: [home[currentSlide].title],
                autoStart: true,
                loop: true,
              }}
              data-aos="zoom-in-right"
            />
          </h1>
          <h3>{home[currentSlide].text}</h3>
        </div>
        <hr />
        <br />
        <div className="readMore">
          <Link to="/services" className="primaryBtn" data-aos="fade-up-right">
            <a className="Read">Read More</a>
          </Link>
        </div>
      </div>

      <div className="slider-circles">
        {home.map((_, index) => (
          <div
            key={index}
            className={`circle ${index === currentSlide ? "active" : ""} ${
              index === prevSlide ? "previous" : ""
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
