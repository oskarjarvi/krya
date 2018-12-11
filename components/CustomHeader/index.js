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
import Logo from '../Logo'
export default class CustomHeader extends React.Component {

  render() {
    return (
      <View style={styles.header}>
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
header:{
flexDirection:'row',
justifyContent:'space-between',
alignItems:'center',
width:'100%',
height:130,
padding:10,
marginTop:10,
borderBottomWidth: StyleSheet.hairlineWidth,
borderBottomColor: 'black'
}
});
