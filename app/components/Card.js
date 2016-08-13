import React, { Component } from 'react'

import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native'

import Recommendations from './Recommendations'
import Map from './Map'
import colors from './_colors'
import appColors from './_appColors'
import appStyles from './_appStyles'

class Card extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View>
            <Text style={styles.title}>
              {this.props.std.toUpperCase()}
            </Text>
          </View>
          {this.props.procedures.map((procedure, index) => {
            return (
              <Text style={styles.text} key={index}>
                { procedure }
              </Text>
            );
          })}
        </View>
        <TouchableHighlight
          underlayColor={colors.blue_4}
          onPress={this.props.viewMap}>
            <View style={styles.locationButton}>
              <Text style={styles.locationText}>
              {this.props.testCenters}
              </Text>
              <Text style={styles.locationArrow}>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &rsaquo;
              </Text>
            </View>
        </TouchableHighlight>
      </View>
    );
  }

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    margin: 10,
    paddingTop: 10,
    backgroundColor: appColors.backgroundColorCard,
    width: 350,
    shadowColor: colors.black,
    shadowOpacity: 0.3,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    },
  },

  topContainer: {
    flex: 2
  },

  title: {
    color: appColors.defaultTextColor,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 5
  },

  text: {
    color: appColors.defaultTextColor,
    textAlign: 'center',
    marginTop: 3,
    marginBottom: 3
  },

  locationButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    borderTopWidth: 1,
    borderColor: appColors.borderColorLocationButton,
    paddingLeft: 80,
    alignItems: 'center',
  },

  locationText: {
    color: appColors.defaultTextColor,
    fontSize: appStyles.fontSizeRegular
  },

  locationArrow: {
    fontSize: 30,
    color: appColors.defaultTextColor
  }

});

export default Card
