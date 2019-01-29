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
import CustomButton from '../components/CustomButton'
import ProgressBar from '../components/ProgressBar'
import { getData } from '../services/ApiService'


export default class ConfirmationScreen extends React.Component {
    static navigationOptions = {
        header: null,
    }
    state = {
        data: false,
    }
    componentDidMount() 
    {
        
    }
    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.container}>
                    <Image
                        source={require('../assets/images/check.png')}
                        style={styles.icon}
                    />
                    <View style={styles.text}>
                        <Text style={styles.title}>Välkommen tillbaka! </Text>
                        <Text style={styles.subtitle}>Din arbetsledare har fått en notis om att du är tillbaka i arbetet.</Text>
                    </View>

                    <CustomButton text="Se Anmälningar" width={350} route={() => this.props.navigation.navigate('1100')}/>
                    <CustomButton text="Tillbaka hem" route={() => this.props.navigation.navigate('Home')} width={350} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon:
    {
        resizeMode: 'contain',
        width: 160,
        height: 180,
    },
    title: {
        fontSize: 35,
        fontWeight: '500',
        marginBottom: 15
    },
    subtitle: {
        fontSize: 20,
        padding: 30,
        fontStyle: 'italic',
        opacity: 0.5,
    },
    text: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
    }


});
