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

export default class Report extends React.Component {
    state={
        visible: true
    }
    icons = {
        'up' : require('../../assets/images/up.png'),
        'down': require('../../assets/images/down.png'),
    }
    handlePress = () =>
    {
        this.setState({visible: !this.state.visible})
    }
    render() {
        let icon = this.icons['down'];

        if(!this.state.visible) 
        {
            icon = this.icons['up'];
        }
        return (
            <View style={styles.Wrapper}>
                <View style={styles.ReportContainer}>
                <Image
                    source={{ uri: 'https://via.placeholder.com/150' }}
                    style={styles.profileImage} />
                <View style={styles.detailContainer}>
                <Text style={styles.ReportTitle}>{this.props.type}</Text>
                <Text style={styles.ReportSubTitle}>{this.props.startDate}</Text>
                </View>
                <TouchableOpacity
                onPress={() => this.handlePress()}
                style={styles.icon}>
                   <Image
                    source={icon}
                    style={styles.expandIcon} />
                </TouchableOpacity>
                </View>
                {!this.state.visible ? this.props.children: null}
                
                </View>


        );
    }
}
const IMAGE_SIZE = 60;
const EXPAND_ICON_SIZE= 70;
const styles = StyleSheet.create({
    Wrapper:
    {
        minHeight:120,
        borderBottomWidth:StyleSheet.hairlineWidth,
        borderBottomColor:"black"
    },
    ReportContainer:
    {
        flexDirection:'row'
    },
    detailContainer:
    {
        flexDirection:'column'
    },
    profileImage:
    {
        margin:20,
        width: IMAGE_SIZE,
        height: IMAGE_SIZE,
    },
    
    ReportTitle: 
    {
        marginTop:12,
        marginBottom:5,
        fontWeight:'500',
        fontSize:20,
    },
    icon:
    {
        marginLeft:100,
    },
    expandIcon: 
    {
        opacity:0.5,
        margin:20,
        width:EXPAND_ICON_SIZE,
        height:EXPAND_ICON_SIZE,
    }

})
