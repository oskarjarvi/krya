import React from 'react';
import { Icon } from 'expo';
import { Ionicons} from '@expo/vector-icons';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  TouchableHighlight,
  Button
} from 'react-native';


export default class MenuButton extends React.Component
{
render(){
  return(
    <View style={styles.MenuButton}>
      <TouchableOpacity
      onPress={this.props.route}>
      <Icon.MaterialCommunityIcons
        name={this.props.iconName}
        size={50}
        style={styles.icon}
        />
    <Text>{this.props.text} </Text>
    </TouchableOpacity>
  </View>
  )
}
}
const styles = StyleSheet.create({
  MenuButton:
  {
    marginTop:10,
    height:120,
    width:'48%',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'pink',
  },
  icon: {
    textAlign:'center'
  }
})
