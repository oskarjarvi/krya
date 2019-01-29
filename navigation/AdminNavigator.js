import React from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { createStackNavigator, createBottomTabNavigator, NavigationActions, createDrawerNavigator, DrawerItems } from 'react-navigation';
import PersonelScreen from '../screens/Admin/Employees/PersonelScreen';
import ReportScreen from '../screens/Admin/Reports/ReportScreen';
import DetailInfoScreen from '../screens/Admin/Employees/DetailInfoScreen';

const AdminStack = createStackNavigator({
Personel: PersonelScreen,
Reports: ReportScreen,
Details: DetailInfoScreen
})
AdminStack.navigationOptions = {
  header: null
}

export default AdminStack
