import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import Config from './constants/Config';
import TokenService from './services/TokenService_js'
import AppNavigator from './navigation/AppNavigator';
import { YellowBox } from 'react-native';
import _ from 'lodash';

YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};
export default class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      loading: true,
      authenticated:false,
    };
  }
  render() {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <AppNavigator />
        </View>
      );
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
