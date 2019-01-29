import React from 'react';
import { Icon } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  TouchableHighlight,
  Button
} from 'react-native';


export default class MenuButton extends React.Component {

  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={this.props.route}
          style={styles.MenuButton}>
          <Image
            source={{ uri: '' + this.props.iconUrl }}
            style={styles.icon}
          />
          <Text style={styles.text}>{this.props.text} </Text>
        </TouchableOpacity>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  MenuButton:
  {
    borderRadius: 15,
    padding: 20,
    marginTop: 10,
    height: 130,
    width: 320,
    alignItems: 'center',
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  icon:
  {
    resizeMode: 'contain',
    width: 80,
    height: 80,
  },
  text: {
    textAlign: 'center',
    margin: 10,
    fontSize: 20,
    fontWeight: '500',
  }
})
