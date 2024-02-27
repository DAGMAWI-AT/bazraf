import React, { Fragment, useEffect, useState } from 'react'
import Back from "../common/Back"
import Heading from "../common/Heading"
import { Link } from "react-router-dom"
import img from "../images/vesta3.jpg"
import "./about.css"
import Departments from "./Departments"
import { about, overview } from "../data/Data"

const renderCompanyOverview = () => {
  return (
    <div className="elementor-section ">
      <div className='container'>
        <div className='sec_title text-center mb-70 wow fadeInUp' data-wow-delay="0.5s">
          <h2 className='f_p f_size_30 l_height50 f_600 t_color'>
            Company Overview
          </h2>
        </div>
        <div className='row1 mb-30 new_service'>
          {overview.map((val, i) => (
            <div key={i} className='col-lg-4 col-sm-6'>
              <div className="saas_features_item text-center wow fadeInUp" data-wow-delay="0.3s">
                <div className='number'>{val.id}</div>
                <div className='separator'></div>
                <div className='new_service_content'>
                  <img alt='Experience' data-src='' style={{ display: 'block', margin: 'auto' }} className="lazyloaded" src={val.cover} />
                  <h4 className='f_size_20 f_p t_color f_500'>{val.title}</h4>
                  <p className='f_400 f_size_15 mb-0'>{val.Desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};






const About = () => {
  useEffect(() => {
    // Scroll to the top of the window when the component mounts
    window.scrollTo(0, 0);
  }, []);
  const [toggleTab, setToggletab] = useState(1)
  const toggleState = (index) => {
    setToggletab(index)
  }
  return (
    <>

      <section className="about">
      {about.map((val, i) => (<>
        <Back title='About Us - Who We Are?' desc={val.bannerDesc} cover={img} />
        
<div>
          <div name="ID1" className='row'>
          <div className='container flex mtop' data-aos="fade-down-right">
              <>


                <div className="left row" data-aos="fade-down-left">
                  <img src={val.cover} alt='' />
                </div>

                <div className="right row">
                  <Heading title='About as' subtitle='Check out our company story and work process' data-aos="fade-down-right" />
                  <div className='column'>

                    <div className='tabs'>
                      <div className={toggleTab === 1 ? "single-tab  active-tab" : "single-tab"}
                        onClick={() => toggleState(1)}>
                        <button className='px-3 py-2 hover:bg-blue-gray-900'>Misson</button>
                      </div>

                      <div className={toggleTab === 2 ? "single-tab  active-tab" : "single-tab"}
                        onClick={() => toggleState(2)}>
                        <button className='px-3 py-2'>Vision </button>
                      </div>

                      <div className={toggleTab === 3 ? "single-tab active-tab" : "single-tab"}
                        onClick={() => toggleState(3)}>
                        <button className='px-3 py-2'>Objective</button>
                      </div>

                    </div>
                    <div className="tab-contents">
                      {/* about content */}
                      <div className={toggleTab === 1 ? "contents active-contents" : "contents"}>

                      <h3>
                      Company Info
                  </h3>
                  <div className="w-full sm:w-[500px] md:w-[750px] flex flex-auto flex-col">
                      <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
                          {val.missionDesc}
                      </p>
                  </div>

                        <div className="">

                          <div className="vition-column">
                            <div className="progress-rap">
                              <h3>developer</h3>
                              <div className="progress">
                                <div className="progress-bar">
                                  <span>80%</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="vition-column">
                            <div className="progress-rap">
                              <h3>developer</h3>
                              <div className="progress">
                                <div className="progress-bar">
                                  <span>90%</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="vition-column">
                            <div className="progress-rap">
                              <h3>developer</h3>
                              <div className="progress">
                                <div className="progress-bar">
                                  <span>80%</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="vition-column">
                            <div className="progress-rap">
                              <h3>developer</h3>
                              <div className="progress">
                                <div className="progress-bar">
                                  <span>80%</span>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>





                      </div>


                      {/* vition content */}
                      <div className={toggleTab === 2 ? "contents active-contents" : "contents"}>



                        <div className="w-full">

                          <div className="w-full">
                            <h3>Vision</h3>
                            <div className='w-[750px]'>

                            <p>{val.visionDesc}</p>
                            </div>
                          </div>

                          

                        </div>
                      </div>
                      {/*  objective content */}
                      <div className={toggleTab === 3 ? "contents active-contents" : "contents"}>
                        <div className="ob-column">
                          <h3>objective</h3>
                          <div className='w-[750px]'>

                          <p>{val.objectiveDesc}</p>
                          </div>
                        </div>
                      </div>


{/*                      <button className='primaryBtn' data-aos="fade-down-right">More About Us</button>
            */}

                    </div>



                  </div>

                </div>
              </>
            

          </div>
        </div>

        <>
          <div className="container flex rl">

            <div className="left1 row">
              <div className="l1">
                <h1>{val.title}</h1>

                <Link> More Infomarion About Bazra ...</Link>
              </div>
            </div>
            <hr />
            <div className="right1 row">
              <p>{val.moreDesc}

              </p>
            </div>

          </div>

        </>
        </div>
        </>
        ))}
        
        {renderCompanyOverview()}


        <Departments />


      </section>
    </>
  )
}

export default About
