import React from 'react'
import ServicesSE from './ServicesSE'
import Services1 from './Services1';
import Products from './Products';
import ServiceDescription from './ServiceDescription'
import "./Services.css";
import videoSource from '../../Lada Vesta Cross.mp4';
import Portfolio from "../portfolioBC/Portfolio";
import { Link } from 'react-router-dom';


const Servicepage = () => {
  return (
    <>
    <Services1 />
    <ServicesSE/>

      <div className="service-overview-section">
       
      <div className="service-containe">
        <h2 className="service-title">Our Services</h2>
        <p className="service-description">
          At bazra motors, we are dedicated to providing cutting-edge solutions tailored to meet the unique needs of the car manifacturing sector. Our comprehensive range of services is designed to empower businesses and drive success in a rapidly evolving landscape.
        </p>
       
         <Link to="/contactpage" >          
         <a href="/contactpage" className="service-button">
        👉 Get in Touch 👈
        </a>
          </Link>

      </div>
      <div className="ser-img">
        {/* <img src="../../../bzs.png" alt="service-img" />  */}
        <video autoPlay loop muted controls>
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      </div>
    </div>
        
    <Portfolio />
    <Products/>
    <ServiceDescription/> 
    </>
  )
}

export default Servicepage
