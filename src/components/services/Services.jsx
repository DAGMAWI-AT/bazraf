import React ,{useEffect}from "react"
import Heading from "../common/Heading"
import { service } from "../data/Data"
import { Link, useHistory } from "react-router-dom";
import './Services.css'
// import video from "../video/bazra1.mp4"
// import Back from "../common/Back"
// import "../home/featured/Featured.css"
// import FeaturedCard from "../home/featured/FeaturedCard"
import {motion as m} from 'framer-motion'
const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
    const history = useHistory();
  
    const handleClick = (index) => {
      history.push(`/services?section=${index}`);
    };
  
  return (
    <>
      <m.div 
      initial={{y:"100%"}}
      animate={{y:"0%"}}
      transition={{duration:1,ease:"easeOut"}}
      exit={{ opacity:1}}
      className='services'>
        
        <div className='s-container' data-aos="fade-down-right">
          <Heading title='Services'  data-aos="fade-down-right"/>
          <div className='content gridser'>

              {service.map((item, index)=>(
           
                  
                  <div className='box' data-aos="zoom-in-right">

                    <i data-aos="fade-down-right">{item.icon}</i>
                    <h3 data-aos="flip-down">{item.title}</h3>
                    <p data-aos="flip-down" onClick={() => handleClick(index)}>
                  Service description
                </p>
                  </div>

                ))}
           </div>


        </div>
        
      </m.div>
    </>
  )
}

export default Services
