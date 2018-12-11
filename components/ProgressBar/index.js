import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Switch
} from 'react-native';

export default class ProgressBar extends React.Component
{

  render(){
    return(
      <View>
      <View style={[styles.bar, {width:this.props.width}]} />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  bar:{
    height:10,
    backgroundColor:'blue'
  }
})
