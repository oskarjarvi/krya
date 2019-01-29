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
import Modal from "react-native-modalbox";
import MenuButton from '../components/MenuButtons'
import CustomButton from '../components/CustomButton';
import PopUp from '../components/PopUp';
import { getData } from '../services/ApiService';
import ActiveReport from '../components/ActiveReportModal'

export default class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Hur är läget?',
    headerStyle: {
      shadowColor: 'transparent',
      elevation: 0,
      shadowOpacity: 0,
      backgroundColor: '#F0F0F1',
      marginTop: 10,
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
          source={require('../assets/images/menu.png')}
          style={{ width: 20, height: 20, }}
        />
      </TouchableOpacity>
    ),
    headerRight: (
      <View></View>
    )


  })
  state =
    {
      modalVisible: false,
      popUpType: '',
      data: false,
      modalData: false,
    }
  componentWillMount() 
  {
    getData('home/locked')
      .then(res => this.setState({ data: res }))
    getData('modal/locked')
      .then(res => this.setState({ modalData: res }))
  }
  componentWillUnmount()
  {
    this.closeModal()
  }
  renderMenu() 
  {
    if (this.state.data) {
      return this.state.data.map((item, i) => {
        const id = item.id.toString()
        return (
          <MenuButton route={() => this.handlePress(id)} iconUrl={item.iconUrl} text={item.title} key={i} />
        )
      })
    }
    else 
    {
      console.log('FAILED')
    }
  }
  handlePress(route) 
  {
    if (route == '1092') 
    {
      this.setState({ modalVisible: true, popUpType: 'Work' })
    }
    if (route == '1090') 
    {
      this.setState({ modalVisible: true, popUpType: 'Phone' })
    }
    if(route == 'active')
    {
      this.setState({modalVisible:true, popUpType:'Active'})
    }
    else 
    {
      this.props.navigation.navigate(route)
    }

  }
  closeModal() 
  {
    this.setState({ modalVisible: false })
  }
  modalcontentRender() 
  {
    if(this.state.popUpType == 'Active')
    {
      return <ActiveReport title={'sjukanmäld'}startDate={'2018-01-20'} endDate={'2018-01-22'} close={() => this.closeModal()} back={() => this.props.navigation.navigate('Confirm')}/>
    }
    if (this.state.modalData) {
      const { modalData } = this.state

      if (this.state.popUpType == 'Phone') {
        return <PopUp iconUrl={modalData[0].iconUrl} title={modalData[0].title} subtitle={modalData[0].subtitle} textcolor={'#' + modalData[0].textColor}>
          <CustomButton text="Nej" color={'#' + modalData[0].buttonColor} route={() => this.closeModal()} width={120} />
          <CustomButton text="Ja" color={'#' + modalData[0].buttonColor} route={() => this.handlePress('PhoneNext')} width={120} />
        </PopUp>
      }
      if (this.state.popUpType == 'Work') {
        return <PopUp iconUrl={modalData[1].iconUrl} title={modalData[1].title} subtitle={modalData[1].subtitle} textcolor={'#' + modalData[1].textColor}>
          <CustomButton text="Nej" color={'#' + modalData[1].buttonColor} route={() => this.closeModal()} width={120} />
          <CustomButton text="Ja" color={'#' + modalData[1].buttonColor} route={() => this.handlePress('WorkNext')} width={120} />
        </PopUp>
      }
      if (this.state.popUpType == 'WorkNext') {
        return <PopUp iconUrl='briefcase' title='Sådär!' subtitle='Din arbetsledare har blivit noterad. Ha en bra dag på jobbet!'>
          <CustomButton text="Ok" color="teal" route={() => this.closeModal()} width={120} />
        </PopUp>
      }
    }
  }
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.menucontainer}>
          {this.renderMenu()}
        </View>
        <Modal
          isOpen={this.state.modalVisible}
          style={styles.modalcontainer}
        >
          {this.modalcontentRender()}
          <View></View>
        </Modal>
        <View style={styles.activeReport}>
          <TouchableOpacity
            onPress={() => this.handlePress('active')}>
            <Text>Sjukanmäld sedan 2018-01-20</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0F0F1',
    flex: 1,
  },
  DrawerModal:
  {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  menucontainer:
  {
    flex: 1,
    padding: 10,
    paddingTop: 25,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleContainer:
  {
    marginTop: 40,
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText:
  {
    fontSize: 30,
    fontWeight: '900',
  },
  modalcontainer:
  {
    height: 500,
    width: 330,
    borderRadius:15,
  },
  activeReport: 
  {
    height:80,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'gold'
  }
});
