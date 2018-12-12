import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Icon } from 'expo';
import { Ionicons} from '@expo/vector-icons';

export default class CustomIcon extends React.Component
{
  render(){
    return(
      <View style={styles.icon}>
        <Icon.MaterialCommunityIcons
          name={this.props.iconName}
          size={50}
          />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  icon: {
    paddingTop:20,
    justifyContent:'center',
    alignItems:'center',

  }
})
