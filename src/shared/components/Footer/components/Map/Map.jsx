import React from 'react';

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps';
import mapStyles from './mapStyles';

import mapArrow from './icons/map-marker.png';

const Map = () => {
  return (
    <GoogleMap
      defaultOptions={{ styles: mapStyles }}
      defaultZoom={17}
      defaultCenter={{ lat: 55.664131, lng: 37.600388 }}
    >
      <Marker
        position={{ lat: 55.664137, lng: 37.598696 }}
        icon={{
          url: mapArrow
        }}
      />
    </GoogleMap>
  );
};

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default WrappedMap;
