const mapStyles = [
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

export default mapStyles;
