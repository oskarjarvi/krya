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
import Logo from '../../components/Logo';
import { WebBrowser } from 'expo';
import DayCounter from '../../components/DayCounter'
import CustomButton from '../../components/CustomButton'
import ProgressBar from '../../components/ProgressBar'
import CustomHeader from '../../components/CustomHeader'
import { NavigationActions } from 'react-navigation'
import CustomIcon from '../../components/CustomIcon'


export default class SickThree extends React.Component {
  static navigationOptions = {
  header:null,
};

  render() {
    return (
      <View style={styles.wrapper}>
        <CustomHeader>
          <TouchableOpacity onPress={()=> this.props.navigation.dispatch(NavigationActions.back())}>
            <Text>Tillbaka</Text>
          </TouchableOpacity>
          <Logo></Logo>
          <View style={{width:50}}></View>
        </CustomHeader>
        <ProgressBar width={'100%'} />
        <View style={styles.container}>
          <CustomIcon iconName="heart-outline"/>

          <View style={styles.text}>
            <Text style={styles.title}>Kom snart tillbaka! </Text>
            <Text style={styles.subtitle}> Din arbetsledare har fått en notis och du kommer att bli meddelad vid varje steg under hanteringen</Text>
          </View>

          <CustomButton text="Se Anmälningar" color="teal" route={() => this.props.navigation.navigate('SickTwo')} width={200}/>
          <CustomButton text="Tillbaka" color="teal" route={() => this.props.navigation.navigate('Home')} width={200}/>
        </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex:1,
    backgroundColor: '#fff',
  },
  container: {
    backgroundColor:'#ffd8d6',
    alignItems:'center',
    justifyContent:'center',
    padding:20,
  },
  title: {
    fontSize:35,
    fontWeight:'500',
    marginBottom:25
  },
  subtitle: {
    fontSize:20,
    padding:40,
    fontStyle:'italic'
  },
  text: {
    padding:30,
  }

});
