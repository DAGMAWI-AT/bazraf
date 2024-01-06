import React from 'react'
import { footer } from '../../data/Data'
import "./footer.css"
const Footer = () => {
  return (
    <>
            <div className="footers" >
      
               <footer >
                  <div>
                      <div className="Hline">
                        <hr/>
                      </div>
                      <div className="logo">
                                
                          <img src='../IMGlogo1.jpg' className=""alt='LOGO' data-aos="fade-up" data-aos-duration="2000"  />
                      </div>
                                    <div className='input flex'>
                                            <input type='text' placeholder='Email Address' />
                                            <button className='primaryBtn' >Subscribe</button>
                                          </div>
                                              
                    <div className="container" >
                      {footer.map((item) => (
                         <div className="fcontent">
                            <h3>{item.title}</h3>
                            <ul>
                                {item.text.map((items) => (
                                  <li className="box">
                                  {items.list} </li>
                                ))}
                            </ul>
                          </div>
                      ))}
                   </div>
                  </div>             
                </footer>
                 <p className='legal'>© All Right Reserved 2023</p>
             </div>
    </>
  )
}

export default Footer
