import { useEffect } from "react";
import Heading from "../common/Heading";
import { Banservice, service } from "../data/Data";
import { Link, Element, scroller } from 'react-scroll';
import "./Service1s.css";
import ServicesSE from "./ServicesSE";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToTarget = () => {
    scroller.scrollTo('targetElement', {
      smooth: true,
      duration: 500,
    });
  };

  return (
    <>
      <div className='services'>
       
       <section className="software_banner_area d-flex align-items-center">
       <div className="container">
         <div className="row">
           {Banservice.map((item, i) => (
             <>
             <div key={i} className="col-lg-6 d-flex align-items-center">
               <div className="software_banner_content">
                 <h1
                   data-aos="fade-up"
                   data-aos-duration="2000"
                   className="f_size_50  text-left heading "

                 >
                   Services
                 </h1>
                 <p
                   data-aos="fade-up"
                   data-aos-duration="2000"
                   className="service_p"
                  
                 >
                   Connect your technology needs for your best business with technology our service and technology service. Practiced and implemented using technology and modern car auto rebuild the.
                 </p>
                 <div
                   className="action_btn d-flex align-items-center mt_40  fadeInLeft"
                   data--delay="0.6s"
                   style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInRight' }}
                 >
                 <a href="/contactpage" className="software_banner_btn elementor-repeater-item-abf08bf" > Contact </a>
                 </div>
               </div>
             </div>
             <div key={i} className="col-lg-6">
               <div className="software_img  fadeInRight" data--delay="0.2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInRight' }}>
                 {/* <img alt="TechFin" className=" lazyloaded box1" src={item.cover} /> */}
               </div>
             </div>
           </>
           ))}
         </div>
       </div>
     </section>
      </div>
     
    
    </>
  );
}

export default Services;
