import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, NavigationActions } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import HistoryScreen from '../screens/User/HistoryScreen'
import ProfileScreen from '../screens/User/ProfileScreen'
import StatisticScreen from '../screens/User/StatisticScreen'

import SickOne from '../screens/Sick/SickOne';
import SickTwo from '../screens/Sick/SickTwo';
import SickThree from '../screens/Sick/SickThree';
import vabOne from '../screens/VAB/vabOne';
import vabTwo from '../screens/VAB/vabTwo';
import vabThree from '../screens/VAB/vabThree';

const SickStack = createStackNavigator({
  SickOne: SickOne,
  SickTwo: SickTwo,
  SickThree: SickThree,
})
SickStack.navigationOptions = {
  header:null
}
const VabStack = createStackNavigator({
VabOne: vabOne,
VabTwo: vabTwo,
VabThree: vabThree
})
VabStack.navigationOptions = {
  header:null,
}
const UserStack = createStackNavigator({
  PastReports: HistoryScreen,
  Profile: ProfileScreen,
  Stats: StatisticScreen,
})
const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Sick: SickStack,
  Vab: VabStack,
  User: UserStack

});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
        ? `ios-information-circle${focused ? '' : '-outline'}`
        : 'md-information-circle'
      }
      />
  ),
};

const ProfileStack = createStackNavigator({
  Profile: ProfileScreen,
});

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profil',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
      />
  ),
};

const PastReportStack = createStackNavigator({
  Reports: HistoryScreen,
});

PastReportStack.navigationOptions = {
  tabBarLabel: 'Anmälningar',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
      />
  ),
};

const TabNavigator = createBottomTabNavigator({
  ProfileStack,
  HomeStack,
  PastReportStack,
}, {initialRouteName:'HomeStack', header:null})


  export default TabNavigator
