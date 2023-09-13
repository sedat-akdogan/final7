import {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Home, User} from './src/stack';
import auth from '@react-native-firebase/auth';


import {Provider} from 'react-redux';
import {useDispatch, useSelector} from 'react-redux';

import {checkPermission, requestPermission} from './src/helpers/permissions';
import store from './src/app/store';
import { setUserID } from './src/feature/user/userSlice';

const App = () => {
  useEffect(() => {
    checkPermission('ios.permission.ACCESS_FINE_LOCATION');
    checkPermission('ios.permission.ACCESS_COARSE_LOCATION');
    requestPermission('ios.permission.ACCESS_FINE_LOCATION');
    requestPermission('ios.permission.ACCESS_COARSE_LOCATION');
  }, []);
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

const Main = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const dispatch = useDispatch();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    // console.log(user);
    dispatch(setUserID(JSON.stringify(user)));
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    // listen for authentication state to change
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  return (
    <NavigationContainer>{!user ? <Home /> : <User />}</NavigationContainer>
  );
};
export default App;