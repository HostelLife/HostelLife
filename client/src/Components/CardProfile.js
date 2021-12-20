import React from "react";

// import { Link } from "react-router-dom";

function CardsProfile({ event }) {
  const { title, description, imagefilename, starttime } = event;

  return (
    <div>
      <div>{imagefilename}
    
  
      </div>
      <div> {title}</div>
      <div>{starttime}</div>
      <div>{description}</div>
      <div>
        <img
          className="google-map-img my-3"
          src="https://comunicandolonuevo.files.wordpress.com/2015/01/google-maps-new-interface1.jpg"
          mb-2
          alt="map"
        />
      </div> 
      
    </div>
    
  );
}

export default CardsProfile;
