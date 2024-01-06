import React, { useState } from 'react';
import YouTube from 'react-youtube';
import videoSource from '../../../Lada Vesta Cross.mp4';

const WhoWeAre = () => {
  const [isVideoPlaying, setVideoPlaying] = useState(false);
  const [hideVideoPoster, setHideVideoPoster] = useState(false);

  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const handleButtonClick = () => {
    setVideoPlaying(true);
    setHideVideoPoster(true);
  };

  const onVideoReady = (event) => {
    // You can add additional logic here if needed
  };

  return (
    <div className="video_area">
      <div className="video-left">
        <div className="video-inner">
          <div className="title-four">
            <h2 className='heading'>Who We Are</h2>
          </div>
          <p>
            Since its establishment in "YEARS", BAZRA has strived to be the
            nation’s leading manufacturing, IT, agriculture import-export
            company and through the years it has worked as the main enterprise
            solutions provider in Ethiopia. Its partnership with world-renowned
            companies such as LADA, CAR, and CAR has allowed it to provide the
            best products and services at the highest standards with
            international certification making it a world-class company operating
            in the African continent.
          </p>

          <button className="Btn" onClick={handleButtonClick}>
            Watch A Video
          </button>
        </div>
      </div>
      <div className="video-right">
        <div className="videoWrapper videoWrapper169 js-videoWrapper">
          {/* {isVideoPlaying && (
            <YouTube className='videoIframe'
              videoId="LLTWcdq52ew"
              opts={opts}
              onReady={onVideoReady}
            />
          )} */}

        {isVideoPlaying && (
          <video className="videoIframe" width="100%" height="100%" controls  opts={opts}
              onReady={onVideoReady}>
            <source src={videoSource} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
          {!hideVideoPoster && <button className="videoPoster js-videoPoster"></button>}
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
