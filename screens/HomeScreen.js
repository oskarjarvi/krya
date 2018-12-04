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

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    headerTitle:(<View style={{flex:1, flexDirection:'row', justifyContent:'center', heigth:90, padding:30}}>
    <Logo />
  </View>),
  headerStyle : {height: 75, backgroundColor:'#fff'}

};


render() {
  return (
    <View style={styles.container}>
    <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Hur är läget?</Text>
    </View>
    <View style={styles.menucontainer}>

      <MenuButton route={() => this.props.navigation.navigate("Links")} iconName="logout" text="Sjukanmälan"/>
      <MenuButton route={() => this.props.navigation.navigate("Links")} iconName="logout" text="Vab-anmälan"/>
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
    backgroundColor: '#fff'
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
    flex:1,
    marginTop:80,
    marginBottom:60,
    justifyContent:'center',
    alignItems:'center',
  },
  titleText:
  {
    fontSize:30,
    fontWeight:'700',
  }


});
