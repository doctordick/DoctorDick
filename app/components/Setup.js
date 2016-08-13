import React, { Component } from 'react'

import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Navigator
} from 'react-native'

import Next from './Next'
import Header from './Header'
import appColors from './_appColors'

class Setup extends Component {

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

  render() {
    return (
      <Navigator renderScene={this.renderScene.bind(this)} />
    );
  }

  renderScene(){
    return (
      <View style={styles.mainContainer}>
        <Header value="Setup" navigator={this.props.navigator}/>
        <View style={styles.container}>
          {this.inputGenerator()}
          <Text style={styles.infoText}>
            &nbsp; Dr. Dick is HIPAA compliant and secures your &nbsp; &nbsp;
            data with encryption.
          </Text>
        </View>
        <View style={styles.nextButton}>
          <Next nextRoute={this.props.nextRoute}
              nextRouteInfo={{id: 'Menu', title: 'New Session'}}
              navigator={this.props.navigator}
          />
        </View>
      </View>
    );
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

export default Setup
