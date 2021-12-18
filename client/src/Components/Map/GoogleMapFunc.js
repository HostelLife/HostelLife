import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const secretApiKey = require('./apiKey_secret.json');

const containerStyle = {
  width: '100%',
  height: '300px',
  margin: '10px'
};

const onLoad = marker => {
    console.log('marker: ', marker)
  }

const position = {
  lat: 41.385063,
  lng: 2.173404
};

function GoogleMapFunc() {
  return (
    <LoadScript
      googleMapsApiKey={secretApiKey.apiKey}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={position}
        zoom={10}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        
      <Marker
      onLoad={onLoad}
      position={position}
      />
    
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(GoogleMapFunc)