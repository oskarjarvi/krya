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


export default class vabThree extends React.Component {
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


  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <View style={styles.text}>
            <Text style={styles.title}>Kom snart tillbaka! </Text>
            <Text style={styles.subtitle}> Din arbetsledare har fått en notis och du kommer att bli meddelad vid varje steg under hanteringen</Text>
          </View>

          <CustomButton text="Se Anmälningar" width={200} route={() => this.props.navigation.navigate('1100')} />
          <CustomButton text="Tillbaka hem" route={() => this.props.navigation.navigate('Home')} width={200} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 35,
    fontWeight: '500',
    marginBottom: 15
  },
  subtitle: {
    fontSize: 20,
    padding: 40,
    fontStyle: 'italic'
  },
  text: {
    padding: 30,
  }


});
