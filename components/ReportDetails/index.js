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

export default class ReportDetails extends React.Component {

    render() {
        return (
            <View style={styles.Wrapper}>
                <View></View>
                <Text style={[styles.subtitle, styles.content]}>Din anmälan:</Text>
                <View style={styles.details}>
                    <View style={styles.section}>
                        <Text style={[styles.subtitle, styles.content]}>Tid</Text>
                        <Text style={styles.content}>{this.props.time}</Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={[styles.subtitle, styles.content]}>Dagar</Text>
                        <Text style={styles.content}>{this.props.duration}</Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={[styles.subtitle, styles.content]}>Datum</Text>
                        <Text style={styles.content}>{this.props.date}</Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={[styles.subtitle, styles.content]}>Anledning</Text>
                        <Text style={styles.content}>{this.props.reason}</Text>
                    </View>

                    <View style={styles.section}>
                    <Text style={[styles.subtitle, styles.content]}>Kommentar</Text>
                    <Text style={styles.content}>{this.props.comment}</Text>
                </View>

                </View>

               
            </View>


        );
    }
}
const styles = StyleSheet.create({
    Wrapper:
    {
        padding: 50,
        marginBottom: 50,
    },
    subtitle:
    {
        fontWeight: '500',
        marginBottom: 5,
    },
    details:
    {
        
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
    },
    section:
    {
        flexDirection: 'column',
        width: '48%',
        marginTop: 10,
        flexGrow:1,
    },
    content:{
        fontSize:17,
    }


})
