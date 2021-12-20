import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { process_params } from "express/lib/router";

const secretApiKey = require("./apiKey_secret.json");

const containerStyle = {
  width: "100%",
  height: "300px",
  margin: "10px",
};

const onLoad = (marker) => {
  console.log("marker: ", marker);
};

function GoogleMapFunc(props) {
  const { position } = props;

  return (
    <LoadScript googleMapsApiKey={secretApiKey.apiKey}>
      <GoogleMap mapContainerStyle={containerStyle} center={position} zoom={10}>
        {/* Child components, such as markers, info windows, etc. */}

        <Marker onLoad={onLoad} position={position} />
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(GoogleMapFunc);
