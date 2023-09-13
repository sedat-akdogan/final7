import {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {login as loginapi} from '../../api';
import Toast from 'react-native-simple-toast';


const Login = ({navigation}) => {
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState(''); 

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>this is the login page</Text>
      <TextInput
        value={email}
        placeholderTextColor={'white'}
        placeholder={'enter email'}
        style={styles.textInput}
        onChange={setEmail}
        autoCapitalize="none"
      />
      <TextInput
        value={password}
        placeholderTextColor={'white'}
        placeholder={'enter password'}
        style={styles.textInput}
        onChange={setPassword}
        secureTextEntry={true}
        autoCapitalize="none"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          if (!email || !password) {
            Toast.show(
              'Email and  Password is required.',
              Toast.SHORT,
            );
          } else if (!/\S+@\S+\.\S+/.test(email) || password.length < 6) {
            Toast.show(
              'Email or password is invalid, Please check your entries.',
              Toast.SHORT,
            );
          } else {
            loginapi(email, password);
          }
        }}>
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.text}>Signup</Text>
      </TouchableOpacity>
    </SafeAreaView>
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

export default Login;