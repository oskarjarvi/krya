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

import { WebBrowser } from 'expo';
import CustomButton from '../../../components/CustomButton'
import ProgressBar from '../../../components/ProgressBar'
import { CheckBox } from 'react-native-elements'
import { getData } from '../../../services/ApiService';

export default class SickOne extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: (
      <ProgressBar width={"33%"} count={"1/3"} />
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
        onPress={() => navigation.navigate('Home')}
        style={{ marginLeft: 20, }}>

        <Image
          source={require('../../../assets/images/left.png')}
          style={{ resizeMode: 'contain', width: 20, height: 20, }}
        />
      </TouchableOpacity>
    ),
    headerRight: (
      <View style={{ marginRight: 20, }}><Text>1/3</Text></View>
    )


  })
  state =
    {
      checkedBoxes: [],
      reasons: false,
    }

  componentDidMount() {
    getData('SickReport/CheckBoxList')
      .then(res => this.setState({ reasons: res }))
  }
  confirm() {
    this.props.navigation.navigate('SickTwo', { reasons: this.state.checkedBoxes })
  }
  toggle(item) {
    const { checkedBoxes } = this.state
    if (!checkedBoxes.includes(item)) {
      this.setState({ checkedBoxes: [...checkedBoxes, item] });
    } else {
      this.setState({ checkedBoxes: checkedBoxes.filter(a => a !== item) });
    }
  }


  render() {

    return (
      <View style={styles.wrapper}>
        <View style={styles.wrapperheader}>
          <Text style={styles.title}>{this.state.reasons && this.state.reasons[0].title}</Text>
          <Text style={styles.subtitle}>{this.state.reasons && this.state.reasons[0].subtitle}</Text>
        </View>

        <View style={styles.container}>
          <ScrollView>
            <FlatList
              keyExtractor={(item, index) => index.toString()}
              data={this.state.reasons && this.state.reasons[0].CheckBoxArray[0]}
              extraData={this.state}
              renderItem={({ item, index }) => (
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
          </ScrollView>
        </View>
        <View style={styles.confirmButton}>
          <CustomButton text="Bekräfta" route={() => this.confirm()} width={400} />
        </View>

      </View >
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'space-between'
  },
  wrapperheader:
  {
    padding: 20,
    backgroundColor: '#FFF'
  },
  container:
  {
    backgroundColor: '#F0F0F1',
    flex: 1,
    padding: 20,
  },
  title:
  {
    marginTop: 20,
    fontSize: 40,
    fontWeight: '500',
  },
  subtitle:
  {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 25,
    fontWeight: '500',
    color: 'gray',
  },
  text: {
    padding: 40,
    fontSize: 30,
    marginBottom: 25,
  },
  item:
  {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    minWidth: 270,
    width: '100%',
    alignSelf: 'stretch',
    padding: 10,
    fontSize: 18,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'black'
  },
  checkbox: {
    borderWidth: 0,
    backgroundColor: 'transparent',
    alignSelf: 'center',
  },
  confirmButton: {
    paddingBottom: 40,
    padding: 5,
    backgroundColor: '#F0F0F1'
  }


});
