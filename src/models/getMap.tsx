import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = () => {
  const center = [51.505, -0.09];


  return (
    <MapContainer  zoom={13} style={{ height: '400px', width: '100%' }}>
     
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
 

  );
};

export default Map; 
