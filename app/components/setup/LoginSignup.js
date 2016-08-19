import React, { Component } from 'react'

import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Navigator,
  Image
} from 'react-native'

import colors from '../_colors'
import appColors from '../_appColors'
import appStyles from '../_appStyles'
import routes from '../../../routes'

export default class LoginSignup extends Component {

  render() {
    return (
      <Navigator 
        renderScene={this.navigatorRenderScene.bind(this)} />
    );
  }

  navigatorRenderScene(route, navigator){
    return (
      <View style={styles.container}>

        <Text style={styles.title}>
          Doctor Dick
        </Text>
        <Text style={styles.subtitle}>
          Our Dick Helps Keep Yours Healthy
        </Text>
        <TouchableHighlight underlayColor={colors.white}
          onPress={this.props.onForward.bind(this,  {title: 'Setup', id: 'setup'})}>
          <View style={styles.button}>
            <Text style={styles.buttonText} >
              Get Started
            </Text>
          </View>
        </TouchableHighlight>
        <Text style={styles.text}>
          Already have an account?
        </Text>
        <Text style={styles.textLogin}>
          Login
        </Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: appColors.backgroundColorMain,
  },
  icon: {
    height: 150,
    width: 150,
    overflow: 'visible'
  },
  title: {
    fontSize: 50,
    textAlign: 'center',
    margin: 10,
  },
  subtitle: {
    textAlign: 'center',
    color: appColors.textGrey,
    marginBottom: 30,
    marginLeft: 10,
    marginRight: 10,
    fontSize: 18
  },
  button: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 40,
    paddingRight: 40,
    alignItems: 'center',
    backgroundColor: appColors.buttonColorMain,
    borderRadius: 50,
  },
  buttonText: {
    color: appColors.defaultTextColor,
    fontSize: appStyles.fontSizeButton
  },
  text: {
    fontSize: appStyles.fontSizeRegular,
    paddingTop: 20,
    color: appColors.textGrey
  },
  textLogin: {
    fontSize: appStyles.fontSizeRegular,
    paddingTop: 5,
    color: 'blue'
  },
});
