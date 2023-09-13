import { useRef, useEffect, useState } from 'react';
import {
  View,
  Button,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  ToastAndroid,
} from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import firestore from '@react-native-firebase/firestore';
import { useSelector } from 'react-redux';
import { getCurrentPosition } from '../../helpers/geolocation';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

import mapMarkers from './markers';
import { Marker } from 'react-native-maps';

const postdata = (data, user) => {
  firestore()
    .collection('UserMyPlaces')
    .add({
      userID: user?.uid,
      userName: user?.email,
      longitude: data.lng,
      latitude: data.lat,
      placeName: data.main_text,
    })
    .then(() => {
      ToastAndroid.show(
        'Place added successfully',
        ToastAndroid.LONG,
      );
      console.log('User added!');
    });
};

function HomeScreen({ navigation }) {
  const user = JSON.parse(useSelector(state => state?.userR?.userID));
  const [position, setPosition] = useState(null);
  // console.log('heo', user?.uid);
  const [location, setLocation] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  });
  const load = useRef(null);
  const ref = useRef();

  useEffect(() => {
    const subscriber = firestore()
      .collection('UsersPosition')
      .onSnapshot(querySnapshot => {
        const positions = [];

        querySnapshot.forEach(documentSnapshot => {
          positions.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });
        setPosition(positions);
        console.log('=======>', positions);
      });

    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);

  useEffect(() => {
    ref.current?.setAddressText('');
    const echo = setInterval(() => {
      getCurrentPosition(user?.uid);
    }, 10000);
    return () => {
      clearInterval(echo);
    };
    // getCurrentPosition();
    // getCurrentPosition().then(position => {
    //   setLocation({
    //     latitude: position.coords.latitude,
    //     longitude: position.coords.longitude,
    //     latitudeDelta: 0.015,
    //     longitudeDelta: 0.0121,
    //   });
    // });
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <MapView provider={PROVIDER_GOOGLE} style={styles.map} region={location}>
        {position ? mapMarkers(position) : mapMarkers()}
      </MapView>
      <View style={styles.organizer}>
        <View style={{ flexDirection: 'row', backgroundColor: 'black' }}>
          <TouchableOpacity
            style={{
              backgroundColor: 'red',
              height: 44,
              borderRadius: 5,
              paddingVertical: 5,
              width: 30,
              position: 'relative',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => navigation.openDrawer()}>
            <Text style={{ color: 'white' }}>!</Text>
          </TouchableOpacity>
          <GooglePlacesAutocomplete
            ref={ref}
            textInputProps={{
              placeholderTextColor: 'black',
            }}
            placeholder={'Enter location'}
            minLength={2}
            autoFocus={false}
            returnKeyType={'default'}
            fetchDetails={true}
            styles={{
              container: {
                flexGrow: 1,
                position: 'absolute',
                backgroundColor: 'black',
                position: 'relative',
              },
              textInputContainer: {
                flexDirection: 'row',
              },
              textInput: {
                color: 'black',
                backgroundColor: '#FFFFFF',
                height: 44,
                borderRadius: 5,
                paddingVertical: 5,
                paddingHorizontal: 10,
                fontSize: 15,
                flex: 1,
              },
              poweredContainer: {
                justifyContent: 'flex-end',
                alignItems: 'center',
                borderBottomRightRadius: 5,
                borderBottomLeftRadius: 5,
                borderColor: '#c8c7cc',
                borderTopWidth: 0.5,
              },
              powered: {},
              listView: {},
              row: {
                backgroundColor: '#FFFFFF',
                padding: 13,
                height: 44,
                flexDirection: 'row',
              },
              separator: {
                height: 0.5,
                backgroundColor: '#c8c7cc',
              },
              description: { color: 'black' },
              loader: {
                flexDirection: 'row',
                justifyContent: 'flex-end',
                height: 20,
              },
            }}
            onPress={(data, details = null) => {
              // 'details' is provided when fetchDetails = true
              // console.log(data);
              setLocation({
                latitude: details.geometry.location.lat,
                longitude: details.geometry.location.lng,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
              });
              load.current = {
                ...details.geometry.location,
                ...data.structured_formatting,
              };
              // console.log(load.current);
            }}
            query={{
              key: 'AIzaSyAeBJiT24f1_1dKNL32nL_Cg-bWs22vQoA',
              language: 'en',
            }}
          />
        </View>
        <TouchableOpacity
          style={styles.add}
          onPress={() => {
            if (load.current === null) {
              ToastAndroid.show(
                "please select a location",
                ToastAndroid.SHORT,
              );
              // alert('please enter a location');
            } else {
              postdata(load.current, user);
              navigation.navigate('myplace');
            }
            // postdata(load);
          }}>
          <Text style={styles.text}>{'additem'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  add: {
    backgroundColor: 'green',
    height: 50,
    width: 200,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    elevation: 20,
    borderRadius: 10,
  },

  Button: {
    backgroundColor: 'red',
    height: 50,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
  },
  container: {
    // opacity: 0,
    flexGrow: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  organizer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});

export default HomeScreen;