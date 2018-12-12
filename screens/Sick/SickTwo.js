import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  FlatList,
} from 'react-native';
import Logo from '../../components/Logo';
import { WebBrowser } from 'expo';
import DayCounter from '../../components/DayCounter'
import CustomButton from '../../components/CustomButton'
import ProgressBar from '../../components/ProgressBar'
import CustomHeader from '../../components/CustomHeader'
import * as firebase from 'firebase';
import { NavigationActions } from 'react-navigation'
import {CheckBox} from 'react-native-elements'
import CustomIcon from '../../components/CustomIcon'

export default class sickTwo extends React.Component {
  static navigationOptions = {
    header:null,
  };
  state =
  {
    checkedBoxes : [],
    reasons:
    [
      'Förkylning',
      'Feber',
      'Influensa',
      'Magbesvär',
      'Magsjuk',
      'Migrän',
      'Annat'
    ],
  }

  toggle(item)
  {
    const {checkedBoxes} = this.state
    if (!checkedBoxes.includes(item)) {
      this.setState({ checkedBoxes: [...checkedBoxes, item] });
    } else {
      this.setState({ checkedBoxes: checkedBoxes.filter(a => a !== item) });
    }
  }
  confirm()
  {
    const days = this.props.navigation.getParam('Days', 0)
    currentDate= new Date().toDateString()
      firebase.database().ref('reports/sjukanmälan').push({
        ExpectedSickDays:days,
        Reasons:this.state.checkedBoxes,
        Created: currentDate
      })
      .then(
        this.props.navigation.navigate('SickThree')
      )
  }

  render() {
    return (
      <ScrollView style={styles.wrapper}>
        <CustomHeader>
          <TouchableOpacity onPress={()=> this.props.navigation.dispatch(NavigationActions.back())}>
            <Text>Tillbaka</Text>
          </TouchableOpacity>
          <Logo></Logo>
          <View style={{width:50}}></View>
        </CustomHeader>
        <ProgressBar width={'66%'} />
          <CustomIcon iconName="heart-outline"/>

        <View style={styles.container}>
          <Text style={styles.title}>Varför är du hemma?</Text>
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={this.state.reasons}
            extraData= {this.state}
            renderItem={({item, index}) => (
              <View style={styles.item}>
                <Text>{item}</Text>
                <CheckBox
                  center
                  checked={this.state.checkedBoxes.includes(item)}
                  onPress={() => this.toggle(item)}
                  wrapperStyle={styles.checkbox}
                  containerStyle={styles.checkbox}
                  />
              </View>
            )}
            />
          <CustomButton text="Bekräfta" color="teal" route={()=>this.confirm()}width={200}/>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper:
  {
    flex:1,
    backgroundColor: '#fff',
  },
  container:
  {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    padding:20,
  },
  title:
  {
    fontSize:25,
    fontWeight:'500',
    margin:30,
  },
  subtitle:
  {
    fontSize:15,
    fontStyle:'italic'
  },
  item:
  {
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    minWidth:270,
    width:'100%',
    alignSelf:'stretch',
    padding:10,
    fontSize:18,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'black'
  },
  checkbox:{
    borderWidth:0,
    backgroundColor:'transparent',
    alignSelf:'center',
  }


});
