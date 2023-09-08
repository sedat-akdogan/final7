import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {Home, User} from './src/stack';


const App = () => {
  return (
    <NavigationContainer>
        <Home />
    </NavigationContainer>
  );
}

export default App;