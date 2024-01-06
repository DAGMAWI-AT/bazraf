import { useEffect } from "react";
import Heading from "../common/Heading";
import { Banservice, service } from "../data/Data";
import { Link, Element, scroller } from 'react-scroll';
import { useHistory } from "react-router-dom";

import Portfolio from "../portfolioBC/Portfolio";
import "./Services.css";
import Services from "./Services";
const ServicesSE = () => {


    const scrollToTarget = () => {
        scroller.scrollTo('targetElement', {
          smooth: true,
          duration: 500,
        });
      };


      const history = useHistory();
  
    const handleClick = (index) => {
      history.push(`/services?section=${index}`);
    };
  return (
    <>
   <div className='services'>
  <div id="targetElement" className='container' data-aos="fade-down-right" >
          <Heading name="targetElement" title='Services' data-aos="fade-down-right" />
          <div className='content grid3' >
            {service.map((item, i) => (
              <div className='box' key={i} data-aos="fade-up" data-aos-duration="2000" onClick={() => handleClick(i)}>
                <i data-aos="fade-up" data-aos-duration="2000">{item.icon}</i>
                <h3 data-aos="fade-up" data-aos-duration="2000">{item.title}</h3>
                <p data-aos="fade-up" data-aos-duration="2000" onClick={() => handleClick(i)}>{item.Desc}</p>
              </div>
            ))}
          </div>
        </div>
        </div>
    </>
  )
}

export default ServicesSE
