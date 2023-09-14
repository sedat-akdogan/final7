import * as React from 'react';
import { View } from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {Myplace, Home} from '../../component';

const Logout1 = ({navigation}) => {
  navigation.goBack();
};

function CustomDrawerContent(props) {
  const [update, setUpdate] = React.useState(false);
  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          backgroundColor: 'pink',
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
        <DrawerItemList {...props} />

        <DrawerItem
          label={'logout'}
          onPress={() => {
            Logout1();
            console.log('bye!');
          }}
        />
        <DrawerItem
          style={{backgroundColor: 'green', alignSelf: 'bottom'}}
          label={'language'}
          onPress={()=>{}}
        />
      </View>
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name={'Home'}
        component={Home}
        options={{headerShown: false}}
      />
      <Drawer.Screen name={'My place'} component={Myplace} />
    </Drawer.Navigator>
  );
};

export default App;