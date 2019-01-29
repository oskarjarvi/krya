import React from 'react';
import { createSwitchNavigator } from 'react-navigation';
import LoginScreen from '../screens/Auth/LoginScreen';
import MainTabNavigator from './MainTabNavigator';
import AdminNavigator from './AdminNavigator';
export default createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Login: LoginScreen,
  Main: MainTabNavigator,
  Admin: AdminNavigator,
});