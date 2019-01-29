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
import Report from '../../../components/Report'
import ReportDetails from '../../../components/ReportDetails'
import { getData } from '../../../services/ApiService'
export default class HomeScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Hur är läget?',
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
                    source={require('../../../assets/images/menu.png')}
                    style={{ width: 20, height: 20, }}
                />
            </TouchableOpacity>
        ),
        headerRight: (
            <View></View>
        )

    });

    state = {
        reports: false,
    }

    componentDidMount() {
        //Fetch all active reports 
        getData('Post/GetAllActiveReports')
            .then(res => this.setState({ reports: res }))
    }
    renderDetails() {
        if (this.state.reports) {
            return <View>
                <ScrollView>
                <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    data={this.state.reports}
                    renderItem={({ item }) =>
                        <Report type={item.type}
                            startDate={item.startDate}>
                            <ReportDetails
                                duration="4"
                                date={item.startDate}
                                reason={item.reasons}
                                comment={item.comments} />
                        </Report>}
                />
                </ScrollView>
            </View>
            
        }
    }

    render() {
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.menucontainer}>
                    <Text style={styles.titleText}>Mina Anmälningar</Text>
                    {this.renderDetails()}
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
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
        fontSize: 30,
        fontWeight: '800',
    }


});
