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
import { WebBrowser } from 'expo';
import CustomButton from '../../../components/CustomButton'
import ProgressBar from '../../../components/ProgressBar'
import CustomDatePicker from '../../../components/CustomDatePicker'
import moment from 'moment-with-locales-es6';


export default class SickTwo extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: (
      <ProgressBar width={"66%"} />
    ),
    headerStyle: {
      shadowColor: 'transparent',
      elevation: 0,
      shadowOpacity: 0,
      backgroundColor: '#F0F0F1',
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
      <View style={{ marginRight: 20, }}><Text>2/3</Text></View>
    )
  })
  state = {
    daycount: 0,
    data: false,
    isEndDatePickerVisible: false,
    isStartDatePickerVisible: false,
    startMonth: 'Start datum',
    endDate: 'Slut datum',
  }
  componentDidMount() {
    moment.locale('sv')
  }
  confirm() {
    this.props.navigation.navigate('VabThree')
  }
  showDateTimePicker(picker) {
    if (picker === 'Start') {
      this.setState({ isStartDatePickerVisible: true });
    }
    if (picker === 'End') {
      this.setState({ isEndDatePickerVisible: true });

    }
  }
  hideDateTimePicker(picker) {
    if (picker === 'Start') {
      this.setState({ isStartDatePickerVisible: false });
    }
    if (picker === 'End') {
      this.setState({ isEndDatePickerVisible: false });
    }
  }
  handleDatePicked = (date) => {

    let newDate = moment(date).format("Do MMMM")
    let words = newDate.split(' ')
    let correctDate = words[0].slice(0, words[0].length - 1)
    this.setState({ startMonth: words[1], startDay: correctDate })
    this.hideDateTimePicker('Start');
  };
  handleEndDate = (date) => {
    let newDate = moment(date).format("Do MMMM")
    let words = newDate.split(' ')
    let correctDate = words[0].slice(0, words[0].length - 1)
    this.setState({ endDate: words[1], endDay: correctDate })
    this.hideDateTimePicker('End');
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.title}>Vab</Text>
        <Text style={styles.subtitle}>Hur länge är du hemma?</Text>
        <View style={styles.container}>
          <View style={styles.buttons}>
            <View style={styles.datePicker}>
              <CustomDatePicker
                Color={'#00C279'}
                day={this.state.startDay}
                date={this.state.startMonth}
                active={this.state.startDay}
                showDateTimePicker={() => this.showDateTimePicker('Start')}
                isVisible={this.state.isStartDatePickerVisible}
                onConfirm={this.handleDatePicked}
                onCancel={() => this.hideDateTimePicker('Start')}
              />
            </View>
            <Image
              source={require('../../../assets/images/down.png')}
              style={styles.icon} />
            <View style={styles.datePicker}>
              <CustomDatePicker
                Color={'#F86968'}
                day={this.state.endDay}
                date={this.state.endDate}
                active={this.state.endDay}
                showDateTimePicker={() => this.showDateTimePicker('End')}
                isVisible={this.state.isEndDatePickerVisible}
                onConfirm={this.handleEndDate}
                onCancel={() => this.hideDateTimePicker('End')}
              />
            </View>
          </View>
        </View>

        <CustomButton text="Bekräfta" route={() => this.confirm()} width={330} />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#F0F0F1',
    paddingLeft: 40,
    paddingRight: 40,
    paddingBottom: 40,
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
    marginBottom: 70,
    fontSize: 25,
    fontWeight: '500',
    color: 'gray',
  },
  text: {
    padding: 40,
    fontSize: 30,
    marginBottom: 25,
  },
  buttons: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon:
  {
    margin: 10,
    alignSelf: 'center',
    width: 60,
    height: 60,
    opacity: 0.8,
  }


});
