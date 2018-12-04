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

export default class Logo extends React.Component
{
  render(){
    return(
      <Image
        source={require('../../assets/images/kryaLogga.png')}
        style={{width: 120, height:80}}
        />
    );
  }
}
