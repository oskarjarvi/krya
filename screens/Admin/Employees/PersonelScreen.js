import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    FlatList
} from 'react-native';
import { WebBrowser } from 'expo';
import { ListItem, SearchBar } from 'react-native-elements'
import { getData } from '../../../services/ApiService'
import TokenService from '../../../services/TokenService_js';

export default class HomeScreen extends React.Component {
    static navigationOptions =
    {
        header:null,
    }
    state = {
        employees: false,
        arrayholder:false,
        searchtext: '',
    }
    componentDidMount() {
        //Fetch all active reports 
        getData('User/GetAllMembers')
            .then(res => this.setState({ employees: res.data, arrayholder: res.data}))
    }

    renderItem = ({ item }) => (
        <ListItem
            title={item.Name}
            friction={90}
            tension={100}
            activeScale={0.95}
            containerStyle={{ margin: 10, }}
            chevronColor="black"
            onPress={() => this.props.navigation.navigate('Details', { Id: item.Id })} />
    )
    renderUserList() {
        if (this.state.employees) {
            return <View>
                <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    data={this.state.employees}
                    renderItem={this.renderItem}
                />
            </View>
        }
    }
    handleSearch(text) {
        const newData = this.state.arrayholder.filter((item) => {
            const itemData = item.Name ? item.Name.toUpperCase() : ''.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
        })
        this.setState({ employees: newData })
    }
    render() {

        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headertitle}>Din personal</Text>
                </View>
                <View>
                <SearchBar
                    round
                    lightTheme
                    containerStyle={{backgroundColor:'transparent',borderWidth:0,}}
                    onChangeText={searchtext => this.handleSearch(searchtext)}
                    placeholder='Type Here...' />
                    </View>
                <ScrollView>
                    {this.renderUserList()}
                </ScrollView>
                <TouchableOpacity onPress={() => TokenService.remove()}><Text>LOG OUT</Text></TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        padding: 20,
    },
    header:
    {
        margin:20,
        alignItems: 'center',
    },
    headertitle:
    {
        fontSize: 30,
        fontWeight: '700'
    }
})