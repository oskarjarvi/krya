import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    KeyboardAvoidingView

} from 'react-native';

import TokenService from '../../services/TokenService_js';
import CustomButton from '../../components/CustomButton';
import { FormLabel, FormInput } from 'react-native-elements';
import { getData } from '../../services/ApiService';

export default class LoginScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };
    state =
        {
            username: '',
            password: '',
        }

    componentDidMount() {
        TokenService.init().then(userData => {
            userData ? this.checkLoggedInType() : null;
        })
    }
    checkLoggedInType = async () => {
            getData('User/GetLoggedInMember')
            .then(res => this.setState({ loggedInMember: res }))
    }
    componentDidUpdate() {
        if (this.state.loggedInMember && this.state.loggedInMember.ContentTypeAlias == "Employer") 
        {
            this.props.navigation.navigate('Admin')
        }
        else if ( this.state.loggedInMember && this.state.loggedInMember.ContentTypeAlias == "Employee") 
        {
            this.props.navigation.navigate('Main')
        }
    }

    onSubmit() {
        const data =
        {
            grant_type: 'password',
            username: this.state.username,
            password: this.state.password
        }
        const formData = Object.keys(data)
            .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])).join('&')
        fetch('https://krya-websites.s1.umbraco.io/oauth/token',
            {
                method: 'POST',
                headers:
                {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                    'Accept': 'application/json'
                },
                body: formData
            })
            .then(async (response) => {
                const respData = await response.json();
                TokenService.set(respData)
            })
            .then(
                this.checkLoggedInType()
            )
            .catch(error => console.error('Error:', error))

    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={require('../../assets/images/krya.png')}
                    style={styles.logo}
                />
                <KeyboardAvoidingView contentContainerStyle={styles.forms}
                    behavior="padding">
                    <FormLabel>Username</FormLabel>
                    <FormInput
                        value={this.state.username}
                        inputStyle={styles.inputfield}
                        onChangeText={username => this.setState({ username })}
                    />
                    <FormLabel>Password</FormLabel>
                    <FormInput
                        value={this.state.password}
                        inputStyle={styles.inputfield}
                        onChangeText={password => this.setState({ password })}
                    />
                    <View style={styles.confirmButton}>
                        <CustomButton text="Login" route={() => this.onSubmit()} width={350} />
                    </View>
                </KeyboardAvoidingView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F0F0F1',
        flex: 1,
        paddingTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 300,
        height: 230,
    },
    forms:
    {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30,
    },
    inputfield: {
        backgroundColor: '#fff',
        borderRadius: 25,
        width: 350,
        marginTop: 10,
        paddingLeft: 20,
        borderColor: '#e5e5e5',
        borderWidth: 2,
    },
    confirmButton:
    {
        justifyContent: 'center',
        alignItems: 'center'
    }





});
