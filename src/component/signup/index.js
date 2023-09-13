import {useState} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Signup as SignupApi} from '../../api';
import Toast from 'react-native-simple-toast';


const Signup = ({navigation}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>This is Signup Page</Text>
      <TextInput
        placeholderTextColor={'black'}
        placeholder={'enter email'}
        style={styles.textInput}
        onChange={setEmail}
        autoCapitalize="none"
      />
      <TextInput
        placeholderTextColor={'black'}
        placeholder={'enter password'}
        style={styles.textInput}
        onChange={setPassword}
        autoCapitalize="none"
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          if (!email || !password) {
            Toast.show(
              'Email and  Password is required.',
              Toast.SHORT,
            );
            // errors.email = 'Email is required.';
          } else if (password.length < 6) {
            // errors.email = 'Email is invalid.';
            Toast.show(
              'Email or password is invalid, Please check your entries.',
              Toast.SHORT,
            );
          } else {
            SignupApi(email, password);
          }
        }}>
        <Text style={styles.text}>Signup</Text>
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
      fontSize: 20,
      textAlign: 'center',
    textAlignVertical: 'center',
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