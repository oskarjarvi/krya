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

import { getData } from '../../../services/ApiService'
import ProfileLink from '../../../components/ProfileLink';
export default class DetailInfoScreen extends React.Component {

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
                    <ProfileLink text={'Se statistik'}/>
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
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
    },
    detailContainer:
    {
        alignItems: 'center',
    },
    header:
    {
        marginBottom:80,
    },
    headertitle:
    {
        fontSize: 40,
        fontWeight: '700',
    },

})