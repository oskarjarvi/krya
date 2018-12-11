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

export default class vabTwo extends React.Component {
  static navigationOptions = {
    header:null,
  };
state = {
  text: 'Yo'
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
        <View style={styles.container}>
          <Text style={styles.title}>Varför är du hemma?</Text>
          <View style={[styles.text, {borderColor:'#dd5f5f'}]}>
            <TextInput
              multiline={true}
              numberOfLines={4}
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}/>
          </View>
          <CustomButton text="Bekräfta" color="#dd5f5f" route={()=> this.props.navigation.navigate('VabThree')}/>
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
    margin:30,
  },
  subtitle: {
    fontSize:15,
    fontStyle:'italic'
  },
  text: {
    backgroundColor:'#ffdddd',
    width:250,
    borderRadius:25,
    borderWidth:1,
    padding:40,
    fontSize:30,
    margin:50,
    justifyContent:'flex-start'
  }


});
