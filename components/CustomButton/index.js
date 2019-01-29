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

export default class CustomButton extends React.Component {

  state = {
  }
  render() {
    return (
      <TouchableOpacity
      onPress={this.props.route}>
      <LinearGradient
      colors={['#78B5FA', '#9586FD']}
      start={[0.01,0.51]}
      end={[1,0.51]}
      style={[styles.button, { width: this.props.width}]}>
       
          <Text style={{color:'white'}}>{this.props.text}</Text>
       
        </LinearGradient>
        </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
button:{
justifyContent:'center',
alignItems:'center',
height:50,
borderRadius:30,
marginTop:30,
}
});
