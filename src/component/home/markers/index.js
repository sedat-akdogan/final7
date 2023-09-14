import {Marker} from 'react-native-maps';


const mapMarkers = (
  markers = [
    {
      lat: 48.858844,
      lng: 2.294351, // Eiffel Tower
      title: 'Eiffel Tower',
      description: 'A famous monument in Paris, France',
    },
    {
      lat: 40.431908,
      lng: 116.570375, // Great Wall of China
      title: 'Great Wall of China',
      description: 'An iconic wall in China',
    },
    {
      lat: 27.175015,
      lng: 78.042155, // Taj Mahal
      title: 'Taj Mahal',
      description: 'A beautiful mausoleum in India',
    },
  ],
) => {
  return markers.map((marker, index) => (
    <Marker
      // style={{width: 100, height: 100, backgroundColor: 'red'}}
      key={index}
      coordinate={{latitude: marker.lat, longitude: marker.lng}}
      title={marker.title}
      description={marker.description}>
    </Marker>
  ));
};

export default mapMarkers;