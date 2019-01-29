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

export default class ActiveReport extends React.Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.datecontainer}>
                    <Text>Du är just nu {this.props.title} mellan</Text>
                    <Text style={styles.date}>{this.props.startDate}</Text>
                    <Image
                        source={require('../../assets/images/down.png')}
                        style={styles.icon} />
                    <Text style={styles.date}>{this.props.endDate}</Text>
                </View>
                <View styles={styles.linkcontainer}>
                    <TouchableOpacity
                        onPress={this.props.back}
                        style={styles.Link}>
                        <Text style={styles.linkText}>Tillbaka på jobbet</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this.props.extend}
                        style={styles.Link}>
                        <Text style={styles.linkText}>Förläng</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this.props.close}
                        style={styles.Link}>
                        <Text style={styles.linkText}>Stäng</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const IMAGE_SIZE = 120;
const styles = StyleSheet.create({
    wrapper:
    {
        flex: 1,
    },
    datecontainer:
    {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    linkcontainer:
    {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    date:
    {
        fontSize: 30,
        fontWeight:'500',
        margin:20,
    },
    icon: {
        width: 20,
        height: 20,
        opacity: 0.5,
    },
    Link: {
        justifyContent:'center',
        alignItems:'center',
        width: '100%',
        height: 80,
        borderTopWidth: 1,
        borderColor: 'black',
    },
    linkText:
    {
        textAlign: 'center',
    },

})
