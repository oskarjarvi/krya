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
import DateTimePicker from 'react-native-modal-datetime-picker';



export default class CustomDatePicker extends React.Component {

    state =
        {
            checkedBoxes: [],
            reasons: false,
        }

    render() {

        return (
            <View style={styles.container}>
            <TouchableOpacity onPress={() => this.props.showDateTimePicker('start')}>
            <View style={[styles.wrapper,{borderTopColor:this.props.Color}]}>
                
                    {this.props.active ?
                    <Text style={styles.buttonDayText}>{this.props.day}</Text> :
                    null}
                    <Text style={styles.buttonText}>{this.props.date}</Text>
                <DateTimePicker
                minimumDate ={new Date()}
                    isVisible={this.props.isVisible}
                    onConfirm={this.props.onConfirm}
                    onCancel={this.props.onCancel}
                    datePickerModeAndroid="spinner"
                    mode="date"
                />
            </View>
            </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    wrapper:
    {
        borderTopWidth:15,
        height: 120,
        width: 250,
        padding: 10,
        borderRadius:15,
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        zIndex: 1,
        margin:20,
    }
    ,
    buttonDayText:
    {
        textAlign: 'center',
        fontWeight:'900',
        fontSize: 30,
        margin:10
    },
    buttonText:
    {
        fontSize:20,
        textAlign: 'center'
    },

});
