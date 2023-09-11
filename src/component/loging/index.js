import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  TextInput } from 'react-native';
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
        placeholderTextColor={'white'}
        placeholder={'enter your email'}
        style={styles.textInput}
      />
      <TextInput
        onChange={setPassword}
        placeholderTextColor={'white'}
        placeholder={'enter your password'}
        style={styles.textInput}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={SignupApi}
      >
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Signup')}
      >
        <Text style={styles.text}>Signup</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    width: '80%',
    height: 40,
    padding: 10,
    margin: 10,
    borderRadius: 10,
    backgroundColor: 'green',
    color: 'white',
  },
  text: {
    color: "green",
    fontSize: 16,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  button: {
    width: '60%',
    height: 40,
    padding: 10,
    margin: 10,
    color: "green",
    backgroundColor: 'white',
    borderRadius: 25,
  },
});

export default login;