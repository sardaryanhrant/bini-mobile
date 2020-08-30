import { createStackNavigator } from 'react-navigation-stack';
import { createSwitchNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen/HomeScreen';

const MainNavigator = createStackNavigator({
    HomeScreen
});

const RootSwitch = createSwitchNavigator(
  {
    HomeScreen,
    MainNavigator
  },
  { initialRouteName: 'MainNavigator' }
);

export default RootSwitch;
