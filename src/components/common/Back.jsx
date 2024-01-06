import React from "react";

const Back = ({ name, title, cover, desc }) => {
  const containerStyle = {
    position: "relative",
    width: "100%",
    height: "100%",
    overflow: "hidden",
    backgroundColor:"#fff",
    zIndex:1,
  };

  const videoStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover", // This ensures the video covers the entire container
  };

  const contentStyle = {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: "50%",
    left: "50%",
    backgroundColor: "#0000006c",
    transform: "translate(-50%, -50%)",
    color: "#000", // Customize text color
    zIndex: 5,
    margin: "0",
    objectFit: "cover", // This ensures the video covers the entire container
    overflow: "hidden",
    background:"cover"
     // Ensure the content appears above the video
  };

  return (
    <div className='back' style={containerStyle}>
      
    <img src={cover} alt='' />
     
      <div className='container' style={contentStyle}>
        <span className="heading">{name}</span>
        <h1 className="heading">{title}</h1>

        <div className="BackDesc"> 
           <p> {desc} </p>
        </div>
      </div>
    </div>
  );
}

export default Back;
