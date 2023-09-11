import React from 'react';
import auth from '@react-native-firebase/auth';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


const SignupApi = () => {
    auth()
        .createUserWithEmailAndPassword('doe@example.com', 'SuperSecretPassword!')
        .then(() => {
            console.log('User account created & signed in!');
        })
        .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
                console.log('That email address is already in use!');
            }

            if (error.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
            }

            console.error(error);
        });
}

const signup = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>This is Sign Up page</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={SignupApi}
            >
            <Text style={[styles.text, { fontSize: 20 }]}>Login</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    textInput: {
      width: '80%',
      height: 40,
      padding: 10,
      margin: 10,
      backgroundColor: 'green',
      color: 'white',
    },
    text: {
      width: '80%',
      color: "black",
      color: "green",
      fontSize: 30,
    },
    button: {
      width: '80%',
      height: 50,
      padding: 10,
      margin: 10,
      color: "green",
      backgroundColor: 'white',
    },
  });

export default signup;