import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Switch
} from 'react-native';
import ProgressBar from '../ProgressBar'
export default class DayCounter extends React.Component {




  render() {
    return (
      <View style={styles.daycontainer}>
        <View style={[styles.counter, this.props.toggled ? styles.toggledBox : null]}>

          {this.props.daycount>0?
            <TouchableOpacity
              onPress={() => this.props.updateDay('down')}
              style={[styles.box, styles.updateBox, {borderColor:this.props.color}]}>
              <Text style= {{color:this.props.color, fontSize:30}}>-</Text>
            </TouchableOpacity>
            : <View></View>}
            <Text style={[styles.box, styles.countBox,{color:this.props.color, borderColor:this.props.color}]}> {this.props.daycount}</Text>

            <TouchableOpacity
              onPress={() => this.props.updateDay('up')}
              style={[styles.box, styles.updateBox, {borderColor:this.props.color}]}>
              <Text style= {{color:this.props.color, fontSize:30}}>+</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.switchbox}>
            <Text>Ingen aning</Text>
            <Switch
              onValueChange={() => this.props.handleToggle()}
              value={this.props.toggled}/>

          </View>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    daycontainer:{

    },
    counter: {
      flexDirection:'row'
    },
    box: {
      margin:5,
      borderWidth:2,
      justifyContent:'center',
      alignItems:'center',
      textAlign:'center',
      textAlignVertical:'center',
      fontSize:30,
      fontWeight:'400',
    },
    updateBox: {
      width:80,
      height:70,

    },
    countBox: {
      width:100,
      height:70,
    },
    switchbox: {
      flexDirection:'row',
      justifyContent:'space-between',
      margin:10
    },
    toggledBox:
    {
      opacity:0.2,
    }



  });
