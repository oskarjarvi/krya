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
      <View style={styles.logo}>
        <Image
          source={require('../../assets/images/kryaLogga.png')}
          style={{width: 120, height:90}}
          />
      </View>

    );
  }
}
const styles = StyleSheet.create({
  logo :{
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    padding:30

  }
})
