import React from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { createStackNavigator, createBottomTabNavigator, NavigationActions, createDrawerNavigator, DrawerItems } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import HistoryScreen from '../screens/User/HistoryScreen'
import ProfileScreen from '../screens/User/ProfileScreen'
import StatisticScreen from '../screens/User/StatisticScreen'
import SickOne from '../screens/Reports/Sick/SickOne';
import SickTwo from '../screens/Reports/Sick/SickTwo';
import SickThree from '../screens/Reports/Sick/SickThree';
import vabOne from '../screens/Reports/VAB/vabOne';
import vabTwo from '../screens/Reports/VAB/vabTwo';
import vabThree from '../screens/Reports/VAB/vabThree';
import ModalScreen from '../components/ModalScreen';
import ConfirmationScreen from '../screens/ConfirmationScreen'
const SickStack = createStackNavigator({
  '1083': SickOne,
  SickTwo: SickTwo,
  SickThree: SickThree,
})
SickStack.navigationOptions = {
  header: null
}
const VabStack = createStackNavigator({
  '1084': vabOne,
  VabTwo: vabTwo,
  VabThree: vabThree
})
VabStack.navigationOptions = {
  header: null,
}
const UserStack = createStackNavigator({

  '1101': ProfileScreen,
  '1100': HistoryScreen,
  Stats: StatisticScreen,
})
UserStack.navigationOptions = {
  header: null
}
const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Sick: SickStack,
  Vab: VabStack,
  User: UserStack,
  Confirm: ConfirmationScreen
});


const TabNavigator = createStackNavigator({
  Home: HomeStack,
  Modal: ModalScreen
},
  {
    mode: 'modal',
    headerMode: 'none',
  }
);


export default TabNavigator
