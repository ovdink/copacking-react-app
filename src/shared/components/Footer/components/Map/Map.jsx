import React from 'react';

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps';

import mapArrow from './icons/map-marker.png';

const Map = () => {
  //   const googleApiUrl =
  //     'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=';
  //   const googleApiKey = 'AIzaSyCxPeeTRCWUADyEmwwAaDHUIITmgQiR61w';
  const exampleMapStyles = [
    {
      featureType: 'all',
      elementType: 'all',
      stylers: [
        {
          hue: '#008eff'
        }
      ]
    },
    {
      featureType: 'poi',
      elementType: 'all',
      stylers: [
        {
          visibility: 'off'
        }
      ]
    },
    {
      featureType: 'road',
      elementType: 'all',
      stylers: [
        {
          saturation: '0'
        },
        {
          lightness: '0'
        }
      ]
    },
    {
      featureType: 'transit',
      elementType: 'all',
      stylers: [
        {
          visibility: 'off'
        }
      ]
    },
    {
      featureType: 'water',
      elementType: 'all',
      stylers: [
        {
          visibility: 'simplified'
        },
        {
          saturation: '-60'
        },
        {
          lightness: '-20'
        }
      ]
    }
  ];
  return (
    <GoogleMap
      defaultOptions={{ styles: exampleMapStyles }}
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
