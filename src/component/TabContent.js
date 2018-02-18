import React from 'react';
import { TabNavigator } from 'react-navigation';

import Login from './Login'
import Register from './Register'
import Call from './Call'

import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

export default TabNavigator({
            Login: {
                screen: Login,
                selected: false
            },
            Register: {
                screen: Register,
            }
})

