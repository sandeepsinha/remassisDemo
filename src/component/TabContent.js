import React from 'react';
import { TabNavigator, TabBarBottom } from 'react-navigation';

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
            },
            Call: {
                screen: Call,
            }

},
{
    tabBarOptions: {
      activeBackgroundColor: 'rgba(30,144,255,0.8)',
      inactiveBackgroundColor: 'rgba(30,144,255,0.7)',
      activeTintColor: 'white',
      inactiveTintColor: 'white',
      showIcon: false,
      labelStyle: {
        fontSize: 15
      },
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true,
  })

