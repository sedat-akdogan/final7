import Toast from 'react-native-simple-toast';
import {request, check, PERMISSIONS, RESULTS} from 'react-native-permissions';

const checkPermission = permission => {
  check(permission)
    .then(result => {
      switch (result) {
        case RESULTS.UNAVAILABLE:
          console.log(
            'This feature is not available (on this device / in this context)',
          );
          Toast.show(
            'This feature is not available (on this device / in this context)',
            Toast.SHORT,
          );
          break;
        case RESULTS.DENIED:
          console.log(
            'The permission has not been requested / is denied but requestable',
          );
          Toast.show(
            'The permission has not been requested / is denied but requestable',
            Toast.SHORT,
          );
          break;
        case RESULTS.LIMITED:
          console.log('The permission is limited: some actions are possible');
          Toast.show(
            'The permission is limited: some actions are possible',
            Toast.SHORT,
          );
          break;
        case RESULTS.GRANTED:
          console.log('The permission is granted');
          Toast.show('The permission is granted', Toast.SHORT);
          break;
        case RESULTS.BLOCKED:
          console.log('The permission is denied and not requestable anymore');
          Toast.show(
            'The permission is denied and not requestable anymore',
            Toast.SHORT,
          );
          break;
      }
    })
    .catch(error => {
      Toast.show(error, Toast.SHORT);
    });
};

const requestPermission = permission => {
  request(permission).then(result => {
    Toast.show(result, Toast.SHORT);
  });
};
export {checkPermission, requestPermission};