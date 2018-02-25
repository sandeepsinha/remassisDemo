
import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

import { Header, Body, Title, Content, Left, Icon, Right } from 'native-base'

class CustomHeader extends Component {
    render() {
        return (<View style={ styles.header }><Icon name="menu" style={ styles.hamburger }onPress={() => this.props.drawerOpen()} /></View>
        );
    }
}

const styles = StyleSheet.create({
    hamburger: {
        color: 'white',
        paddingLeft: 10,
        paddingTop: 10
    },
    header: {
        width:'100%',
        height:50,
        backgroundColor: 'rgba(30,144,255,0.8)'
    }

});

export default CustomHeader;