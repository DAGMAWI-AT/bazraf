import React, { useEffect } from 'react';
import './App.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import video from './video.mp4';
import Pages from './components/page/Pages';
import Zendesk from './ZendeskConfig';

const ZENDESK_KEY = "b9c1711c-e9a9-4577-80e4-8705aca15977";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  const videoContainerStyle = {
    // position: 'relative',
    width: '100%',
    height: 'auto', 
    overflow: 'hidden',
    backgroundColor: "#000000e7",
  };

  const videoStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    // transform: "translate(-50%, -50%)",
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
    display: "hidden",
    zIndex: -1,
  };

  const overlayStyle = {
  };

  return (
    <div style={videoContainerStyle}>
      <video autoPlay loop muted style={videoStyle}>
        <source src={video} type="video/mp4" />
      </video>
      <div style={overlayStyle}></div>
      <Zendesk defer zendeskKey={ZENDESK_KEY} />
      <Pages />
    </div>
  );
}

export default App;
