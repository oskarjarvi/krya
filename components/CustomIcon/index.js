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
import { Icon } from 'expo';
import { Ionicons } from '@expo/vector-icons';

export default class CustomIcon extends React.Component {
  render() {
    return (
      <View style={styles.iconcontainer}>
        <Image source={{ uri: '' + this.props.iconUrl }}
          style={styles.icon} />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  iconcontainer: {
    paddingTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 100,
    height: 90,
  }
})
