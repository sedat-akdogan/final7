import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, Signup } from '../../component';
import {Localization} from '../../helpers';


const Stack = createNativeStackNavigator();

const Home = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Localization.t('Login')} component={Login} />
      <Stack.Screen name={Localization.t('Signup')} component={Signup} />
    </Stack.Navigator>
  );
}

export default Home;