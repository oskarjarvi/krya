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


export default class SickOne extends React.Component {
  static navigationOptions = {
  header:null,
};
state= {
  daycount:0,

}
updateDay =(placeholder) =>
{
  if(this.state.toggled)
  {
    return;
  }

  if(placeholder == 'up')
  {
    this.setState({
      daycount: this.state.daycount+1
    })
  }
  if(placeholder == 'down')
  {
    this.setState({
      daycount: this.state.daycount-1
    })
  }
}
handleToggle =() =>
{
  this.setState({toggled: !this.state.toggled})
  console.log(this.state.toggled)
  if(!this.state.toggled)
  {
    this.setState({daycount: 0})
  }
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
      <ProgressBar width={120} />
      <CustomIcon iconName="heart-outline"/>
      <View style={styles.container}>
        <View style={styles.text}>
        <Text style={styles.title}>Hur många dagar tror du att du stannar hemma? </Text>
        <Text style={styles.subtitle}> Detta är bara en uppskattning för att underlätta för din arbetsledare</Text>
        </View>
        <DayCounter color='teal' daycount={this.state.daycount} updateDay={this.updateDay} handleToggle={this.handleToggle} toggled={this.state.toggled}
          />
        <CustomButton text="Nästa" color="teal" route={() => this.props.navigation.navigate('SickTwo', {Days: this.state.daycount})} width={200}/>
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
    alignItems:'center',
    justifyContent:'center',
    padding:20,
  },
  title: {
    fontSize:25,
    fontWeight:'500',
    marginBottom:10
  },
  subtitle: {
    fontSize:15,
    fontStyle:'italic'
  },
  text: {
    padding:40,
    fontSize:30,
    marginBottom:25,
  }


});
