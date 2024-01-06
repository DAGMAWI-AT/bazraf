import React, { useEffect } from "react";
import { preLoaderAnim } from "../animations/gsap";

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);

  const ulStyle = {
    float: 'left',
  };
  return (
    <section className="pre">
    <div class="container">

    <ul class="nav nav-tabs startup_tab" id="myTab" role="tablist">
    <li class="nav-item elementor-repeater-item-c2a198b">
     <a class="nav-link active" id="saasland-tab-1721" data-toggle="tab" role="tab" href="#saasland-tab-content-1721" aria-controls="saasland-tab-content-1721">
                            <span class="icon"> <i class='icon-bulb'> </i></span>
                                                            <h3>Our Vison </h3>
                    </a>
     </li>
        <li class="nav-item elementor-repeater-item-34c93d8">
     <a class="nav-link " id="saasland-tab-1722" data-toggle="tab" role="tab" href="#saasland-tab-content-1722" aria-controls="saasland-tab-content-1722">
                            <span class="icon"> <i class='icon-rocket'> </i></span>
                                                            <h3>Our Mission </h3>
                    </a>
    </li>
        <li class="nav-item elementor-repeater-item-334c470">
   <a class="nav-link " id="saasland-tab-1723" data-toggle="tab" role="tab" href="#saasland-tab-content-1723" aria-controls="saasland-tab-content-1723">
                            <span class="icon"> <i class='ti-layers-alt'> </i></span>
                                                            <h3>Core Values </h3>
                    </a>
</li>
</ul>
<div class="tab-content startup_tab_content" id="myTabContent">
                                            <div class="tab-pane fade show active" aria-labelledby="saasland-tab-1721" data-toggle="tab" role="tab" id="saasland-tab-content-1721">
                            <div class="startup_tab_img">
                                <h3>To become a world class technology solutions and services provider that transforms the way business run in Africa.</h3>                                <div class="web_img">
                                    <img decoding="async" src="" alt="Our Vison "/>
                                </div>
                                <div class="phone_img"><img decoding="async"  alt="Our Vison " data-src="https://www.ienetworksolutions.com/wp-content/uploads/2020/11/icon3.png" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/><noscript><img decoding="async" src="https://www.ienetworksolutions.com/wp-content/uploads/2020/11/icon3.png" alt="Our Vison "/></noscript></div>
                            </div>
                        </div>
                                                <div class="tab-pane fade " aria-labelledby="saasland-tab-1722" data-toggle="tab" role="tab" id="saasland-tab-content-1722">
                            <div class="startup_tab_img">
                                <h3><strong>Change the Life of Africa via Disciplined Work Culture and Systems Thinking.</strong></h3>                                <div class="web_img">
                                    <img decoding="async" src="" alt="Our Mission "/>
                                </div>
                                <div class="phone_img"><img decoding="async"  alt="Our Mission " data-src="https://www.ienetworksolutions.com/wp-content/uploads/2020/11/icon4.png" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/><noscript><img decoding="async" src="https://www.ienetworksolutions.com/wp-content/uploads/2020/11/icon4.png" alt="Our Mission "/></noscript></div>
                            </div>
                        </div>
                                                <div class="tab-pane fade " aria-labelledby="saasland-tab-1723" data-toggle="tab" role="tab" id="saasland-tab-content-1723">
                            <div class="startup_tab_img">
                            <ul style={ulStyle}><li><h4>Discipline</h4></li><li><h4>10X</h4></li><li><h4>Grit</h4></li><li><h4>Radical Candor</h4></li><li><h4>Strong Work Ethic</h4></li></ul><ul style={ulStyle}><li><h4>Extreme Ownership</h4></li><li><h4>Continuous Improvment</h4></li><li><h4>EGO is the Enemy</h4></li><li><h4>Never Settle for Mediocrity</h4></li><li><h4>Collaboration with Individual Accountability</h4></li></ul>                                <div class="web_img">
                                    <img decoding="async" src="" alt="Core Values "/>
                                </div>
                                <div class="phone_img"><img decoding="async"  alt="Core Values " data-src="https://www.ienetworksolutions.com/wp-content/uploads/2020/11/icon5.png" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/><noscript><img decoding="async" src="https://www.ienetworksolutions.com/wp-content/uploads/2020/11/icon5.png" alt="Core Values "/></noscript></div>
                            </div>
                        </div>
                                        </div>
            </div>

    </section>
  );
};

export default PreLoader;