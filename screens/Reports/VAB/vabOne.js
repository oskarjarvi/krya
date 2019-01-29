import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput
} from 'react-native';
import { WebBrowser } from 'expo';
import CustomButton from '../../../components/CustomButton'
import ProgressBar from '../../../components/ProgressBar'


export default class vabOne extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: (
      <ProgressBar width={"33%"} count={"1/3"} />
    ),
    headerStyle: {
      shadowColor: 'transparent',
      height: 60,
      elevation: 0,
      shadowOpacity: 0,
    },
    headerTitleStyle: {
      flex: 1,
      textAlign: 'center',
      alignSelf: 'center',
      justifyContent: 'center',
    },
    headerLeft: (
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={{ marginLeft: 20, }}>
        <Image
          source={require('../../../assets/images/left.png')}
          style={{ width: 20, height: 20, }}
        />
      </TouchableOpacity>
    ),
    headerRight: (
      <View style={{ marginRight: 20, }}><Text>1/3</Text></View>
    )
  })
  state = {
    text: ''
  }

  confirm() {
    this.props.navigation.navigate('VabTwo')
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.title}>Vab</Text>
        <Text style={styles.subtitle}>Varför är du hemma?</Text>
        <View style={styles.container}>
          <View style={styles.text}>
            <TextInput
              multiline={true}
              numberOfLines={4}
              onChangeText={(text) => this.setState({ text })}
              placeholder={'Beskriv varför du är hemma'}
              value={this.state.text} />
          </View>
        </View>
        <View style={styles.confirmButton}>
          <CustomButton text="Bekräfta" route={() => this.confirm()} width={330} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#F0F0F1',
    padding: 20,
    justifyContent: 'space-between'
  },
  container:
  {
    flex: 1,
  },
  title:
  {
    marginTop: 20,
    fontSize: 40,
    fontWeight: '500',
  },
  subtitle:
  {
    marginTop: 10,
    marginBottom: 70,
    fontSize: 25,
    fontWeight: '500',
    color: 'gray',
  },
  text: {
    backgroundColor: '#fff',
    width: 350,
    borderRadius: 10,
    borderColor: '#e5e5e5',
    borderWidth: 1,
    height: 100,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 30,
    color: 'black'
  },
  confirmButton:
  {
    justifyContent: 'flex-end',
    alignItems: 'center'
  }

});
