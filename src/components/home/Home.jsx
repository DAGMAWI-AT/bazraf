import {useEffect} from 'react'
import Hero from "./hero/Hero"
import Counter from './counter/Counter'
import Portfolio from '../portfolioBC/Portfolio'
import Testimonials from './testimonials/Testimonials'
import Who_we_are from "./who_we_are/Who_we_are"
import { overview } from '../data/Data'
import ServicesSE from '../services/ServicesSE'
import ImageSlider from '../ImageSlider/ImageSlider'

const renderCompanyOverview = () => {
  return (
    <div className="elementor-section">
    <div className='container'>
      <div className='sec_title text-center mb-70 wow fadeInUp' data-wow-delay="0.5s">
        <h2 className='f_p f_size_30 l_height50 f_600 t_color'>
          Company Overview
        </h2>
      </div>
      <div className='row1 mb-30 new_service'>
        {overview.map((val, i) => (
          <div key={i} className='col-lg-4 col-sm-6 elementor-repeater-item-b679855'>
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




const Home = () => {
  useEffect(() => {
    // Scroll to the top of the window when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
  <div>
   <Hero />
   <Who_we_are />
   {renderCompanyOverview()} 
   <Portfolio/>  
   <ServicesSE/>
   <ImageSlider />
   <Counter/>
   
   <Testimonials/>
   
   
  </div>
  )
}

export default Home
