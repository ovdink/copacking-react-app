import React from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps';

import mapStyles from './mapStyles';
import mapArrow from './icons/map-marker.png';

const GooMap = () => {
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

const WrappedMap = withScriptjs(withGoogleMap(GooMap));

const Map = () => {
  const googleApiUrl =
    'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=';
  const googleApiKey = 'AIzaSyCxPeeTRCWUADyEmwwAaDHUIITmgQiR61w';

  return (
    <WrappedMap
      googleMapURL={googleApiUrl + googleApiKey}
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `100%` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  );
};

export default Map;
