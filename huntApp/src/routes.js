import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import 'react-native-gesture-handler';

import Main from './pages/main';
import Product from './pages/product';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main: Main,
      Product: Product
    },
    {
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#DA552F',
        },
        headerTintColor: '#FFF',
      },
    },
    {
      initialRouteName: 'Main',
    },
  ),
);

export default Routes;
