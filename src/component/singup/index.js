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
        <View style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center"
        }}>
            <Text
                style={{
                    color: "black",
                    fontSize: 30, alignContent: "center",
                    justifyContent: "center"
                }}
            >This is Sign Up page</Text>
            <TouchableOpacity 
            style={[styles.button, {backgroundColor: 'yellow'}]}
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

export default signup;