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
import Report from '../../components/Report'
import ReportDetails from '../../components/ReportDetails'
import {getData} from '../../services/ApiService'
export default class HistoryScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Mina Anmälningar',
    headerStyle: {
      shadowColor: 'transparent',
      elevation: 0,
      shadowOpacity: 0,
      backgroundColor: '#F0F0F1',
    },
    headerTitleStyle: {
      flex: 1,
      textAlign: 'center',
      alignSelf: 'center'
    },
    headerLeft: (
      <TouchableOpacity
        onPress={() => navigation.navigate('Modal')}
        style={{ marginTop: 20, marginLeft: 20, width: 40, height: 40, }}>
        <Image
          source={require('../../assets/images/menu.png')}
          style={{ width: 20, height: 20, }}
        />
      </TouchableOpacity>
    ),
    headerRight: (
      <View></View>
    )

  });
  state =
    {
      data: false,
    }

  componentDidMount() {
    let id= 1107
    getData(`Post/GetReportsByUser`)
    .then(res => this.setState({ data: res }))
  }
  renderMenu() 
  {
    if (this.state.data) {
      return this.state.data.map((item, i) => {
        let newDate = moment(this.state.data.startDate).format("LL")
        this.setState({ correctStartDate: newDate })
        const id = item.id.toString()
        return (
          <Report type={item.type} startDate={item.startDate}><ReportDetails time="08:02" duration="4" date="2018-01-05" reason="feber" comment="40 graders feber" /></Report>
          
        )
      })
    }
    else 
    {
      console.log('FAILED')
    }
  }

  render() {
    console.log(this.state.data)
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.menucontainer}>
          <Text style={styles.titleText}>Aktiva:</Text>

          <View>
            <Text style={styles.titleText}>Tidigare anmälningar:</Text>
            <Report type="Vad-anmälan" startDate="15 april 2018"><ReportDetails time="12:43" duration="4" date="2018-01-05" reason="feber" comment="40 graders feber" /></Report>
            <Report type="Sjukanmälan" startDate="3 maj 2018"><ReportDetails time="08:02" duration="4" date="2018-01-05" reason="feber" comment="40 graders feber" /></Report>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0F0F1',
    flexGrow: 1,
  },
  menucontainer:
  {
    flex: 1,
  },
  titleText:
  {
    marginTop: 60,
    marginBottom: 60,
    textAlign: 'center',
    fontSize: 25,
    fontWeight: '700',
  }


});
