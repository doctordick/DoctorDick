import React, { Component } from 'react'

import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Navigator
} from 'react-native'

import Button from '../shared/Button'
import NavigationBar from '../shared/NavigationBar'
import appColors from '../_appColors'

export default class Setup extends Component {

  render() {
    return (
      <Navigator 
        renderScene={this.navigatorRenderScene.bind(this)} 
        configureScene={(route, routeStack) =>
          Navigator.SceneConfigs.FloatFromBottom} />
    );
  }

  navigatorRenderScene(){
    return (
      <View style={styles.mainContainer}>
        <NavigationBar 
          value="Setup"
          navigator={this.props.navigator}
          onBack={this.props.onBack} />
        <View style={styles.container}>
          {this.inputGenerator()}
          <Text style={styles.infoText}>
            &nbsp; Dr. Dick is HIPAA compliant and secures your &nbsp; &nbsp;
            data with encryption.
          </Text>
        </View>
        <View style={styles.nextButton}>
          <Button onForward={this.props.onForward}
              nextRouteInfo={{id: 'Menu', title: 'New Session'}}
          />
        </View>
      </View>
    );
  }

  inputGenerator() {
    let inputs = [
      {
        label: "First Name",
        value: ""
      },
      {
        label: "Last Name",
        value: ""
      },
      {
        label: "Email",
        value: ""
      },
      {
        label: "Password",
        value: "",
        secure: true
      }
    ];

    return inputs.map(function(input) {
      return (
        <View key={input.label} style={styles.input}>
          <TextInput style={styles.textInput}
            placeholder={input.label}
            placeholderTextColor={appColors.defaultTextColor}
            secureTextEntry={input.secure}
            autocorrect={false}
             />
         </View>
        )
    });
  }

}

const styles = StyleSheet.create({

  mainContainer: {
    backgroundColor: appColors.backgroundColorPrimary,
    flex: 2
  },

  container: {
    flex: 11,
    justifyContent: 'center',
    alignItems: 'center',
  },

  nextButton: {
    flex: 2,
    flexDirection: 'column'
  },

  input: {
    borderColor: appColors.borderColorSetup,
    borderBottomWidth: 2,
    marginBottom: 20
  },

  infoText: {
    marginLeft: 20,
    marginRight: 20,
    textAlign: 'center',
    color: appColors.defaultTextColor
  },

  textInput:{
    height: 35,
    color: appColors.defaultTextColor,
    width: 300
  },

});
