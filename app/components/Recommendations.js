import React, { Component } from 'react'

import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Navigator
} from 'react-native'

import Header from "./Header"
import Card from "./Card"
import appColors from "./_appColors"
import appStyles from "./_appStyles"

class Recommendations extends Component {

  viewMap(){
    this.props.nextRoute({id:'Map', title: 'Map View'});
  }

  recGenerator() {
    let context = this;
    const recommendations = [{
        std: 'HIV/STD Tests',
        procedures: [
          'Blood Test',
          'Oral Swab Test',
          'Urine Test'
        ],
        testCenters: 'Find a Testing Center'
      }, {
        std: 'Gonorrhea Tests',
        procedures: [
          'Urine Test',
          'Nucleic acid amplification tests',
          'Gonorrhea culture'
        ],
        testCenters: 'Find a Testing Center'
      }, {
        std: 'Hepatitis B Test',
        procedures: ['Blood Test'],
        testCenters: 'Find a Testing Center'
      }];

    return recommendations.map(function(rec, index) {
      return <Card
        viewMap={context.viewMap.bind(context)}
        std={rec.std}
        key={index}
        procedures={rec.procedures}
        testCenters={rec.testCenters} />;
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
          <Header value="Recommendations" navigator={this.props.navigator} />
          <View style={styles.textContainer}>
            <Text style={styles.text}>
              Dr. Dick recommends the following tests based on your responses.
            </Text>
            {this.recGenerator()}
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: appColors.backgroundColorPrimary,
    flex:1
  },
  textContainer: {
    flex: 11,
    alignItems: 'center',
    backgroundColor: appColors.backgroundColorPrimary
  },
  text: {
    width: 300,
    fontSize: appStyles.fontSizeRegular,
    textAlign: 'center',
    marginBottom: 15,
    marginTop: 15,
    color: appColors.defaultTextColor
  },
});

export default Recommendations
