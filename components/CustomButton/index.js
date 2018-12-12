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

export default class CustomButton extends React.Component {

  state = {
  }
  render() {
    return (
        <TouchableOpacity
          onPress={this.props.route}
          style={[styles.button, {backgroundColor: this.props.color, width: this.props.width}]}>
          <Text style={{color:'white'}}>{this.props.text}</Text>
        </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
button:{
justifyContent:'center',
alignItems:'center',
width:200,
height:50,
borderRadius:30,
marginTop:30,
margin:20,
}
});
