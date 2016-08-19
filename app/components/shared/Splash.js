import React, { Component } from 'react'

import {
  Text,
  View,
  StyleSheet
} from 'react-native'

import appColors from '../_appColors'

export default class Splash extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          asdf
        </Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: appColors.backgroundColorPrimary,
    alignItems: 'center',
    justifyContent: 'center'
  },

  text: {
    color: appColors.defaultTextColor,
    fontSize: 32,
  },

});
