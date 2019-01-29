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
import { ListItem } from 'react-native-elements'
import { getData } from '../../services/ApiService'
import ProfileLink from '../../components/ProfileLink';
export default class DetailInfoScreen extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'Min Profil',
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
  })

  state = {
    MemberData: false
  }
  async componentDidMount() {
    let params = await this.getParams();
    let res = await getData(`User/GetMemberById/${params}`);
    this.setState({ MemberData: res })
  }
  async getParams() {
    return Id = this.props.navigation.getParam('Id', 'Unknown Id')
  }
  renderUserData = () => {
    if (this.state.MemberData) {
      return <View style={styles.detailContainer}>
        <View style={styles.header}>
          <Text style={styles.headertitle}>{this.state.MemberData.Name}</Text>
        </View>
        <View>
          <ProfileLink text={'0703556618'} />
          <ProfileLink text={this.state.MemberData.Email} />
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('EmployeStats')}>
            <ProfileLink text={'Se statistik'} />
          </TouchableOpacity>
        </View>
      </View>
    }
  }

  render() {

    return (
      <View style={styles.container}>
        {this.renderUserData()}
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container:
  {
    backgroundColor:'#F0F0F1',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailContainer:
  {
    alignItems: 'center',
  },
  header:
  {
    marginBottom: 80,
  },
  headertitle:
  {
    fontSize: 40,
    fontWeight: '700',
  },

})