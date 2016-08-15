import React, { Component } from 'react'

import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Navigator
} from 'react-native'

import colors from './_colors'
import appColors from './_appColors'
import appStyles from './_appStyles'

class Next extends Component {
  render() {
    return (
      <View style={styles.container}>
          <TouchableHighlight
            underlayColor={colors.blue_4}
            onPress={this.props.nextRoute.bind(this, this.props.nextRouteInfo)}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Next</Text>
            </View>
          </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1
  },

  button: {
    borderTopWidth: 2,
    borderColor: appColors.borderColorNext,
    marginTop: 30,
    paddingTop: 15,
    paddingBottom: 20,
    paddingLeft: 45,
    paddingRight: 45,
    alignItems: 'center',
    backgroundColor: appColors.buttonColorNext,
  },

  buttonText: {
    color: appColors.defaultTextColor,
    fontSize: appStyles.fontSizeButton
  },

});

export default Next
