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


export default class ProfileLink extends React.Component {

  render() {
    return (
      <View style={styles.linkwrapper}>
          <Image
            source={{ uri: 'https://via.placeholder.com/150' }}
            style={styles.linkIcon} />
          <Text style={styles.linkText}>{this.props.text}</Text>
      </View>

    )
  }
}
const styles = StyleSheet.create({
  linkwrapper: {
    flexDirection: 'row',
    alignItems:'center',
    padding:20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'black',
    height: 100,
    width:300,
  },
  linkIcon: {
    justifyContent:'flex-start',
    width: 50,
    height: 50,
  },
  linkText: {
    marginLeft:20,
    fontSize: 20,
    color:'black',
  }
})
