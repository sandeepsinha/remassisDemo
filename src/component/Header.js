import React, { Component } from 'react';

import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

export default class Header extends Component {
    render() {
        return (
            <View style={ styles.header }>
                <Image source={ require('../../resource/banner.png') }
                       style={ styles.image }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        height:20,
        width:80
    },
    header: {
        width:'100%',
        height:30,
        backgroundColor: 'black'
    }

});