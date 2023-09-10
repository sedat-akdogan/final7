import { NavigationContainer } from '@react-navigation/native';
import {Home, User} from './src/stack';
import React, { useState, useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import { localisation } from './src/helpers';

function App() {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    localisation.locale = 'en' // to change the language
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;
  return (
    <NavigationContainer>
      {user ? <User/> : <Home /> }
    </NavigationContainer>
  );
}

export default App;