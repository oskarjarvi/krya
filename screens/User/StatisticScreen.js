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
import { WebBrowser } from 'expo';
import { NavigationActions } from 'react-navigation'

export default class HomeScreen extends React.Component {
  static navigationOptions = {

};


render() {
  return (
    <View style={styles.container}>

  </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
  menucontainer:
  {
    flex:1,
    padding:10,
    justifyContent:'space-around',
    flexDirection:'row',
    paddingTop:25,
    flexWrap: 'wrap',
  },
  titleContainer :
  {
    flex:1,
    marginTop:80,
    marginBottom:60,
    justifyContent:'center',
    alignItems:'center',
  },
  titleText:
  {
    fontSize:30,
    fontWeight:'700',
  }


});
