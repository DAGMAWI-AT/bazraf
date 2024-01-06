import React from "react"
import Heading from "../common/Heading"
import Back from "../common/Back"
import img from "../images/th.jpeg"
// import "./contact.css"
import {bancontact, contact} from "../data/Data"

const Contact = () => {

  return (
    <>
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
    
        
     </section>
      <div className='contact'>


    
       <Back name='Contact Us' title='Get Helps & Friendly Support' cover={img} /> 
        <div className='container'>
          <Heading title='Contact Us' />
          <div className="content flexsb">
          <div className="right">
          <form >
            <h3>Fillup The Form</h3> <br />
           <div className="flex">
              <input type='text' placeholder='Name' />
              {/*<input type='email' placeholder='Email' />*/}
            </div>
            <div className="flex">
            <input type='email' placeholder='Email' />
            </div>
            <div className="flex">
            <input type='text' placeholder='Subject' />
            </div>
            <div className="flex">
            <textarea cols='50' rows='10'></textarea>
            </div>
            <button >Submit Request</button>
          </form>
           </div>  
           <span className="vertical-line"></span>
           <div className="left">
           <p className=" bg-black ">heloo</p>
              {contact.map((item, i) => 
              <div className="box"> 
                <h3 style={{ whiteSpace: 'nowrap' }}><i >{item.icon}</i> 
                <i>{item.text}</i>
                </h3> <br/>
              </div>
                )}
           </div>
        </div>

        </div>


        
        
      
      </div>
      
      <div>
          <iframe width="100%" height="400" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Friendship%20International%20Hotel,%20Bole,%20Addis%20Ababa+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
            <a href="https://www.maps.ie/population/">Population mapping</a></iframe>
            </div>
    </>
  )
}

export default Contact
