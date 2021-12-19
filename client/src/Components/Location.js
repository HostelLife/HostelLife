import React from "react";
import GoogleMapFunc from "./Map/GoogleMapFunc";

function Location({ props }) {
  const { latitude, longitude } = props;
  const position = {
    lat: latitude,
    lng: longitude,
  };
  return (
    <div>
      <GoogleMapFunc position={position} />
    </div>
  );
}

export default Location;
