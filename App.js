/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import TabContent from './src/component/TabContent'
import Header from './src/component/Header'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
        <View style={{ flex: 1, marginTop: 20 }}>
        <Header/>
        <TabContent/>
        </View>
    );
  }
}
