import * as React from 'react';
import { Button, View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import auth from '@react-native-firebase/auth';

const logoutApi = () => {
  auth()
  .signOut()
  .then(() => console.log('User signed out!'));
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
      <TouchableOpacity 
            style={[styles.button, {backgroundColor: 'yellow'}]}
            onPress={logoutApi}
            >
            <Text style={[styles.text, { fontSize: 20 }]}>Logout</Text>
            </TouchableOpacity>
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

function App() {
  return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
  },
  textInput: {
      width: 200,
      height: 50,
      marginBottom: 10,
      backgroundColor: 'green',
      color: 'black',
  },
  text: {
      color: "black",
      fontSize: 30,
  },
  button: {
      backgroundColor: 'red',
      weidth: 100,
      height: 50,
  },
});

export default App; 