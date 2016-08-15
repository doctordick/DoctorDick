import React, { Component } from 'react'

import {
  Text,
  StyleSheet,
  TouchableHighlight,
  View
} from 'react-native'

import appColors from './_appColors'
import appStyles from './_appStyles'

class Header extends Component {

  goBack() {
    if(this.props.navigator){
      this.props.navigator.pop();
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          underlayColor={"'rgba(255, 255, 255, 0.05)'"}
          onPress={this.goBack.bind(this)}>
          <View style={styles.backButton}>
            <Text style={styles.backButtonText}>
              &lsaquo;
            </Text>
          </View>
        </TouchableHighlight>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            {this.props.value}
          </Text>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({

  container: {
    marginTop: 15,
    flexDirection: 'row',
    height: 60,
    borderBottomWidth: 1,
    borderColor: appColors.borderColorHeader
  },

  backButton: {
    alignItems: 'flex-start',
    marginLeft: 5
  },

  backButtonText: {
    color: appColors.defaultTextColor,
    fontSize: 48
  },

  titleContainer: {
    marginTop: 16,
    marginBottom: 15,
    flex: 1,
    alignItems: 'center',

  },

  title: {
    fontSize: appStyles.fontSizeHeader,
    color: appColors.defaultTextColor
  }

});

export default Header
