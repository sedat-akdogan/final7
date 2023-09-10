import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { localisation } from '../../helpers';


const SignupApi = () => {
    auth()
  .signInWithEmailAndPassword('doe@example.com', 'SuperSecretPassword!')
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

const login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{localisation.t("thisistheloginpage")}</Text>
            <TextInput onChange={setEmail}
             placeholderTextColor={'black'}
            placeholder={'enter your email'}
            style={styles.textInput} 
            />
            <TextInput 
            onChange={setPassword} 
            placeholderTextColor={'black'} 
            placeholder={'enter your password'} 
            style={styles.textInput} 
            />
            <TouchableOpacity 
            style={[styles.button, {backgroundColor: 'yellow'}]}
            onPress={SignupApi}
            >
            <Text style={[styles.text, { fontSize: 20 }]}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={styles.button}
            onPress={() => navigation.navigate('Signup')}
            >
            <Text style={[styles.text, { fontSize: 20 }]}>Go to Signup</Text>
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

export default login;