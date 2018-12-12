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
import Modal from "react-native-modal";
import Logo from '../components/Logo';
import { WebBrowser } from 'expo';
import MenuButton from '../components/MenuButtons'
import { MonoText } from '../components/StyledText';
import CustomHeader from '../components/CustomHeader'
import CustomButton from '../components/CustomButton'
import PopUp from '../components/PopUp'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header:null,

  };
  state= {
    modalVisible:false,
    popUpType: '',
  }


  handlePress(route)
  {
    this.setState({modalVisible: true, popUpType: route})

  }
  closeModal() {
    this.setState({modalVisible:false})
  }
  modalcontentRender()
  {
    if(this.state.popUpType == 'Phone')
    {
      return <PopUp iconName='phone' title='Vill du bli uppringd?' subtitle='Din arbetsledare får en notis om att kontakta dig'>
        <CustomButton text="Nej" color="#f7be2e" route={()=> this.closeModal()} width={120}/>
        <CustomButton text="Ja" color="#f7be2e" route={()=> this.handlePress('PhoneNext')} width={120}/>
      </PopUp>
    }
    if(this.state.popUpType == 'Work')
    {
      return <PopUp iconName='briefcase' title='Är du tillbaka på jobbet?' subtitle='Genom att bekräfta får din arbetsledare en notis att du är frisk'>
        <CustomButton text="Nej" color="teal" route={()=> this.closeModal()} width={120}/>
        <CustomButton text="Ja" color="teal" route={()=> this.handlePress('WorkNext')} width={120}/>
      </PopUp>
    }
    if(this.state.popUpType == 'PhoneNext')
    {
      return <PopUp iconName='phone' title='Håll telefonen nära!' subtitle='Din arbetsledare får en notis om att kontakta dig'>
        <CustomButton text="Ok" color="#f7be2e" route={()=> this.closeModal()} width={120}/>
      </PopUp>
    }
    if(this.state.popUpType == 'WorkNext')
    {
      return <PopUp iconName='briefcase' title='Sådär!' subtitle='Din arbetsledare har blivit noterad. Ha en bra dag på jobbet!'>
        <CustomButton text="Ok" color="teal" route={()=> this.closeModal()} width={120}/>
      </PopUp>
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <CustomHeader>
          <Logo></Logo>
        </CustomHeader>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Hur är läget?</Text>
        </View>
        <View style={styles.menucontainer}>
          <MenuButton route={() => this.props.navigation.navigate("Sick")} iconName="heart-outline" text="Sjukanmälan"/>
          <MenuButton route={() => this.props.navigation.navigate("Vab")} iconName="baby-buggy" text="Vab-anmälan"/>
          <MenuButton route={() => this.handlePress('Phone')} iconName="phone" text="Ring upp mig"/>
          <MenuButton route={() => this.handlePress('Work')} iconName="briefcase" text="Tillbaka i arbete"/>
          <MenuButton route={() => this.props.navigation.navigate("Links")} iconName="file-document" text="Mina anmälningar"/>
          <MenuButton route={() => this.props.navigation.navigate("Links")} iconName="account" text="Min profil"/>

        </View>
        <Modal
          isVisible={this.state.modalVisible}
          style={styles.modalcontainer}
          >
          {this.modalcontentRender()}<View></View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  menucontainer:
  {
    flex:1,
    padding:10,
    justifyContent:'space-around',
    flexDirection:'row',
    paddingTop:25,
    flexWrap: 'wrap',
  },
  titleContainer :
  {
    marginTop:40,
    marginBottom:50,
    justifyContent:'center',
    alignItems:'center',
  },
  titleText:
  {
    fontSize:30,
    fontWeight:'700',
  },
  modalcontainer:
  {
    flex:0,
    height:380,
    marginTop:'auto',
    marginBottom:'auto',
    backgroundColor:'#ffd8d6'

  }


});
