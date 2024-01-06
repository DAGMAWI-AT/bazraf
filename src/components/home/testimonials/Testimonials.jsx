import React from 'react'
import Heading from '../../common/Heading'
import { testimonials } from '../../data/Data'
import { FormatQuote } from '@mui/icons-material'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const Testimonials = () => {

    const settings = {
        dots: false,
        infinite: true, // Enable infinite loop
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 1000, // Set the delay in milliseconds (e.g., 3000ms = 3 seconds)
      };
  return (
      <div className="testimonials hero">

        <div className="container">
        <Heading title='Client Testimonial' subtitle='Review from Our Customer' data-aos="fade-down-right" />
        <Slider {...settings}>

        {testimonials.map((val, i)=>(
                    
                    
                  <div className="testi">
                    <i>
                        <FormatQuote/>
                    </i>
                        <p>{val.text}</p>
                        <div className="img">
                           <img src={val.cover} alt='' />

                        </div>
                        <h3>{val.name}</h3>
                        <h3>{val.address}</h3>

                        <label>{val.prof}</label>
                  
                  </div>

          ))} 
          </Slider>
        </div>
      </div>
  )
}

export default Testimonials
