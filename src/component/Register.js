import { AppRegistry } from 'react-native';
import React, { Component } from 'react';
import CustomHeader from './CustomHeader'
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Image,
    TextInput,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import { Icon, Button, Container, Content, Left } from 'native-base'

export default class Register extends Component {
    render() {
      return (
        <ImageBackground source={require('../../resource/background.jpg')} style={styles.backgroundImage} imageStyle={{resizeMode: 'cover'}} blurRadius={5}  >
          <CustomHeader title="Register" drawerOpen={() => this.props.navigation.navigate('DrawerOpen')} />
            <View style={ styles.container}>
            <ScrollView>
            <View style={styles.inputWrapper}>
              <Icon style={styles.inputIcon} name="person" size={20} color="#000"/>
              <TextInput
                style={styles.input}
                placeholder="Name"
                onChangeText={(searchString) => {this.setState({searchString})}}
                underlineColorAndroid="transparent"
              />
            </View>

            <View style={styles.inputWrapper}>
              <Icon style={styles.inputIcon} name="person" size={20} color="#000"/>
              <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={(searchString) => {this.setState({searchString})}}
                underlineColorAndroid="transparent"
              />
            </View>

            <View style={styles.inputWrapper}>
              <Icon style={styles.inputIcon} name="person" size={20} color="#000"/>
              <TextInput
                style={styles.input}
                placeholder="Mobile"
                onChangeText={(searchString) => {this.setState({searchString})}}
                underlineColorAndroid="transparent"
              />
            </View>

            <View style={styles.inputWrapper}>
              <Icon style={styles.inputIcon} name="lock" size={20} color="#000"/>
              <TextInput
                style={styles.input}
                placeholder="Password"
                onChangeText={(searchString) => {this.setState({searchString})}}
                underlineColorAndroid="transparent"
              />
            </View>

            <View style={styles.inputWrapper}>
              <TouchableOpacity style={ styles.button }
                onPress={() => {}}
              >
              <Text>Register</Text>
              </TouchableOpacity>
            </View>
            
            </ScrollView>
            </View>
        </ImageBackground>
      );
    }
}

const styles = StyleSheet.create({
  backgroundImage : {
    flex:1

  },
  container : {
    margin: 'auto',
        paddingRight: 10,
    paddingLeft: 10,
    paddingTop: '30%',
  },
  inputWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.7)',
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: 'transparent',
    marginBottom: 10


  },
  inputIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0
  },
  button : {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    alignItems: 'center',
    backgroundColor: 'rgba(30,144,255,0.2)',
    borderColor: 'transparent',
    borderRadius: 20,
    borderWidth: 0.5,
    height: 40
  }
});