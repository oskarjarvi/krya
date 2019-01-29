import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';

export default class Drawer extends Component {
    render() {
      return (
        <View style = { styles.container }>
          <Text> Drawer </Text>
        </View>
      )
    }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 22,
    backgroundColor: 'white',
    width: Dimensions.get("window").width * 0.8
  }
});