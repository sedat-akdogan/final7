import {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ToastAndroid,
} from 'react-native';
import {login as loginapi} from '../../api';
import {useSelector} from 'react-redux';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('biendou@example.com'); //
  const [password, setPassword] = useState('SuperSecretPassword!'); //'SuperSecretPassword!'

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>this is the login page</Text>
      <TextInput
        value={email}
        placeholderTextColor={'black'}
        placeholder={Localization.t('enteremail')}
        style={styles.textinput}
        onChange={setEmail}
        autoCapitalize="false"
        // clearTextOnFocus="true"
      />
      <TextInput
        value={password}
        placeholderTextColor={'black'}
        placeholder={'enter password'}
        style={styles.textInput}
        onChange={setPassword}
        autoCapitalize="false"
        secureTextEntry={true}
        // clearTextOnFocus="true"
      />
      <TouchableOpacity
        style={[styles.button, {backgroundColor: 'yellow'}]}
        onPress={() => {
          if (!email || !password) {
            ToastAndroid.show(
              'Email and  Password is required.',
              ToastAndroid.SHORT,
            );
            // errors.email = 'Email is required.';
          } else if (!/\S+@\S+\.\S+/.test(email) || password.length < 6) {
            // errors.email = 'Email is invalid.';
            ToastAndroid.show(
              'Email or password is invalid, Please check your entries.',
              ToastAndroid.SHORT,
            );
          } else {
            loginapi(email, password);
          }
        }}>
        <Text style={[styles.text, {fontSize: 20}]}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('signup')}>
        <Text style={[styles.text, {fontSize: 20}]}>
          go to signup
        </Text>
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