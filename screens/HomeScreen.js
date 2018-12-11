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
import Logo from '../components/Logo';
import { WebBrowser } from 'expo';
import MenuButton from '../components/MenuButtons'
import { MonoText } from '../components/StyledText';
import CustomHeader from '../components/CustomHeader'


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header:null,
};
handlePress() {
  console.log('you pressed me')
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
      <MenuButton route={() => this.props.navigation.navigate("Sick")} iconName="logout" text="Sjukanmälan"/>
      <MenuButton route={() => this.props.navigation.navigate("Vab")} iconName="logout" text="Vab-anmälan"/>
      <MenuButton route={() => this.props.navigation.navigate("Links")} iconName="logout" text="Ring upp mig"/>
      <MenuButton route={() => this.props.navigation.navigate("Links")} iconName="logout" text="Tillbaka i arbete"/>
      <MenuButton route={() => this.props.navigation.navigate("Links")} iconName="logout" text="Mina anmälningar"/>
      <MenuButton route={() => this.props.navigation.navigate("Links")} iconName="logout" text="Min profil"/>

    </View>
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
    marginTop:80,
    marginBottom:30,
    justifyContent:'center',
    alignItems:'center',
  },
  titleText:
  {
    fontSize:30,
    fontWeight:'700',
  }


});
