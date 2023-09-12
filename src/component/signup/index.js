import {useState} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {signup as signupapi} from '../../api';

function generateRandomCredentials() {
  const randomIndex = Math.floor(Math.random() * 1000000000); // Generate a random number between 0 and 999999
  const email = `user${randomIndex}@example.com`;
  const password = `password${randomIndex}`;
  return {email, password};
}

const Signup = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>This is Signup Page</Text>
      <TextInput
        placeholderTextColor={'black'}
        placeholder={'enter email'}
        style={styles.textinput}
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
          const x = generateRandomCredentials();
          console.log(x.email, x.password);
          signupapi(x.email, x.password);
        }}>
        <Text style={styles.text}>
          Signup
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
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

export default Signup;