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
import { LinearGradient } from 'expo'


export default class ProgressBar extends React.Component
{

  render(){
    return(
      <View style={styles.wrapper}>
      
      <LinearGradient
      colors={['#78B5FA', '#9586FD']}
      start={[0.01,0.51]}
      end={[1,0.51]} 
      style={[styles.bar, {width:this.props.width}]}/>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  wrapper:{
    marginLeft:40,
    borderRadius:30,
    width:200,
    backgroundColor:'#F0F0F1',
  },
  bar:{
    height:6,
    borderRadius:30,
  }
})
