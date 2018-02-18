/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import TabContent from './src/component/TabContent'
import Register from './src/component/Register'
import Login from './src/component/Login'
import Header from './src/component/Header'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import { DrawerNavigator, StackNavigator, DrawerItems, SafeAreaView } from 'react-navigation'
import { Icon, Button, Container, Content, Left } from 'native-base'

const MyApp = DrawerNavigator({

  // For each screen that you can navigate to, create a new entry like this:
  Account: {
    screen: TabContent,
  }
}, {
    initialRouteName: 'Account',
    drawerPosition: 'left',
    headerLeft: <Icon name="ios-menu" style={{ paddingLeft: 10 }} onPress={() => navigate('DrawerOpen')} />,
    drawerLabel: 'Notification',
  
  });



type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
        <View style={{ flex: 1, marginTop: 20 }}>
        <MyApp/>
        </View>
    );
  }
}
