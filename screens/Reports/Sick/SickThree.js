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
import CustomButton from '../../../components/CustomButton'
import ProgressBar from '../../../components/ProgressBar'
import { getData } from '../../../services/ApiService'


export default class sickThree extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: (
      <ProgressBar width={"100%"} />
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
        onPress={() => navigation.goBack()}
        style={{ marginLeft: 20, }}>
        <Image
          source={require('../../../assets/images/left.png')}
          style={{ width: 20, height: 20, }}
        />
      </TouchableOpacity>
    ),
    headerRight: (
      <View style={{ marginRight: 20, }}><Text>3/3</Text></View>
    )
  })
  state = {
    data: false,
  }
  componentDidMount() {
    getData('SickReport/getAllContent')
      .then(res => this.setState({ data: res[1] }))

  }
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <Image
            source={{ uri: '' + this.state.data.iconUrl }}
            style={styles.icon}
          />
          <View style={styles.text}>
            <Text style={styles.title}>{this.state.data && this.state.data.title} </Text>
            <Text style={styles.subtitle}> {this.state.data && this.state.data.content}</Text>
          </View>

          <CustomButton text="Se Anmälningar" width={350} route={() => this.props.navigation.navigate('1100')} />
          <CustomButton text="Tillbaka hem" route={() => this.props.navigation.navigate('Home')} width={350} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 35,
    fontWeight: '500',
    marginBottom: 15
  },
  subtitle: {
    fontSize: 20,
    padding: 30,
    fontStyle: 'italic',
    opacity: 0.5,
  },
  text: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  icon: {
    resizeMode: 'contain',
    width: 160,
    height: 180,
  },


});
