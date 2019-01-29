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
import TokenService from '../../services/TokenService_js';

export default class ModalScreen extends React.Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.modalHeader}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Image
                            source={require('../../assets/images/close.png')}
                            style={{ width: 20, height: 20, }}
                        />
                    </TouchableOpacity>
                    <Image
                        source={require('../../assets/images/krya.png')}
                        style={[styles.profileImage, { width: 90, height: 70 }]}
                    />
                    <View style={{ width: 50 }}></View>
                </View>
                <View style={styles.ModalContent}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                        <Text style={styles.ModalText}>Hem</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('1101')}>
                        <Text style={styles.ModalText}>Profil</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('1100')}>
                        <Text style={styles.ModalText}>Anmälningar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => TokenService.remove()}>
                        <Text style={styles.ModalText}>Logga ut</Text>
                    </TouchableOpacity>

                </View>
            </View>
        );
    }
}
const IMAGE_SIZE = 120;
const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        marginTop: 50,
    },
    ModalContent:
    {
        flex: 1,
        alignItems: 'center',
    },
    modalHeader:
    {
        flexDirection: 'row',
        marginLeft: 20,
        marginBottom: 50,
    },
    profileImage:
    {
        padding: 20,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    ModalText:
    {
        margin: 30,
        fontSize: 30,
    },


})
