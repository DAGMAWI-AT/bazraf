import React,{useEffect} from 'react'
import Heading from "../common/Heading"
import styled from 'styled-components';
import Back from "../common/Back"
import img from "../images/th.jpeg"
 import "./contacts.css"
 import "./contacts.css"

 import "./contact.css"
import { MdEmail, MdLocalPhone } from 'react-icons/md';
import ContactInfoItem from './contactinfoitem'
import ContactForm from './ContactForm';
import Contact from "./Contact"
import { bancontact, contact } from '../data/Data';
// import { withGoogleMap, withScriptjs, GoogleMap, Marker } from 'react-google-maps/api';

import Typewriter from "typewriter-effect"
// import 'animate.css';
// import PText from './PText';

 

export default function Contactpage() {
  
  
useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <>
     
     
   
    <section className='contactcontainer'>
    <section className="bancontact_area" >   
    { bancontact.map((item, i) => (
    <>
    <img alt="Get in touch" class="bancontact_shap lazyloaded" src={item.cover}/>    
       <div className="container">
        <div className="breadcrumb_content text-center">
               <h1 className="f_p f_700 f_size_50 w_color l_height50 mb_20">
                     Get in touch            
                </h1>
          </div>
          </div>
        </>
    ))}
    
        
     </section>{/*    <Back  title='Contact Us ' cover={img} />
  */}
    <div>
     <h1  className='c-head'>
    Any Support info 
     </h1> 
     
     </div>
       <div className='contactsection_wraper'>
       <div  className='con_left'>
       {contact.map((item, i) => 

    <div className="ItemStyles">
       <div className="icon" >{item.icon}</div>
       <div className="info"> <p>{item.text}</p> </div>
     </div>

            
 

       )}
       </div>
       <div className='con_right'>
       <ContactForm/>
       </div>
       </div>
    </section>
   
           <div className='map'>
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.8088686448523!2d38.783590374297276!3d8.98972809107002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b84fb99570403%3A0x8a21e3ebfc8b4fc5!2zRnJpZW5kc2hpcCBCdXNpbmVzcyBDZW50ZXIgKOGNjeGIrOGKleGLteGIuuGNlSDhi6jhjIjhiaDhi6sg4Yib4Yql4Yqo4YiNKQ!5e0!3m2!1sen!2set!4v1702992616433!5m2!1sen!2set" width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          
             </div>
         </>    
  )
}
