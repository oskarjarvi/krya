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
import Logo from '../../components/Logo';
import { WebBrowser } from 'expo';
import DayCounter from '../../components/DayCounter'
import CustomButton from '../../components/CustomButton'
import ProgressBar from '../../components/ProgressBar'
import CustomHeader from '../../components/CustomHeader'
import { NavigationActions } from 'react-navigation'
import * as firebase from 'firebase';
import CustomIcon from '../../components/CustomIcon'


export default class vabTwo extends React.Component {
  static navigationOptions = {
    header:null,
  };
state = {
  text: ''
}

confirm()
{
  const days = this.props.navigation.getParam('Days', 0)
  currentDate= new Date().toDateString()
    firebase.database().ref('reports/vabanmälan').push({
      ExpectedSickDays:days,
      Reason:this.state.text,
      Created: currentDate
    })
    .then(
      this.props.navigation.navigate('VabThree')
    )
}

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

        <ProgressBar width={'66%'} />
          <CustomIcon iconName="baby-buggy"/>

        <ScrollView contentContainerStyle={styles.container} scrollEnabled={false}>
          <Text style={styles.title}>Varför är du hemma?</Text>
          <View style={[styles.text, {borderColor:'#dd5f5f'}]}>
            <TextInput
              multiline={true}
              numberOfLines={4}
              onChangeText={(text) => this.setState({text})}
              placeholder={'Beskriv varför du är hemma'}
              value={this.state.text} />
          </View>
          <CustomButton text="Bekräfta" color="#dd5f5f" route={() => this.confirm()}/>
        </ScrollView>
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
    alignItems:'center',
    justifyContent:'center',
    padding:20,
  },
  title: {
    fontSize:25,
    fontWeight:'500',
    margin:30,
  },
  subtitle: {
    fontSize:15,
    fontStyle:'italic'
  },
  text: {
    backgroundColor:'#ffdddd',
    alignItems:'flex-start',
    width:250,
    borderRadius:25,
    borderWidth:1,
    height:150,
    paddingLeft:10,
    paddingRight:10,
    fontSize:30,
    margin:50,
  }


});
