import {useState} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {login as loginapi} from '../../api';
import {useSelector} from 'react-redux';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>{'thi is the login page'}</Text>
      <TextInput
        placeholderTextColor={'black'}
        placeholder={'enteremail'}
        style={styles.textInput}
        onChange={setEmail}
      />
      <TextInput
        placeholderTextColor={'black'}
        placeholder={'enterpassword'}
        style={styles.textInput}
        onChange={setPassword}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          loginapi(email, password);
        }}>
        <Text style={styles.text}>
          Login
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('signup')}>
        <Text style={styles.text}>
          Go to Signup
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