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


export default class PopUp extends React.Component
{
  
  render(){
    return(
      <View style={[styles.popup, { color: this.props.textcolor }]}>
        <Image
        source={{uri:''+this.props.iconUrl}}
                  style={styles.icon}
                />
        <View style={styles.text}>
          <Text style={styles.title}>{this.props.title}</Text>
          <Text style={styles.subtitle}>{this.props.subtitle}</Text>
        </View>
        <View style={styles.buttons}>
          {this.props.children}
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  popup:{
    flex:1,
    padding:40,
    justifyContent:'center',
    alignItems:'center',
  },
  buttons:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
  },
  title: {
    textAlign:'center',
    fontSize:25,
    fontWeight:'500',
    marginBottom:20,
    marginTop:10,
  },
  subtitle: {
    textAlign:'center',
    fontSize:15,
    fontStyle:'italic'
  },
  text: {
      padding:10,
  },
  icon:
  {
    width:80,
    height:80,
  }
})
