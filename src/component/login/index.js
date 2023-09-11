import {useState} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {login as loginapi} from '../../api';
import {Localization} from '../../helpers';
import {useSelector} from 'react-redux';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>{Localization.t('thisistheloginpage')}</Text>
      <TextInput
        placeholderTextColor={'black'}
        placeholder={Localization.t('enteremail')}
        style={styles.textInput}
        onChange={setEmail}
      />
      <TextInput
        placeholderTextColor={'black'}
        placeholder={Localization.t('enterpassword')}
        style={styles.textInput}
        onChange={setPassword}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          loginapi(email, password);
        }}>
        <Text style={styles.text}>
          {Localization.t('login')}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate(Localization.t('signup'))}>
        <Text style={styles.text}>
          {Localization.t('gotosignup')}
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