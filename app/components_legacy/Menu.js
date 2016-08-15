import React, { Component } from 'react'

import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Navigator
} from 'react-native'

import Header from './Header'
import colors from './_colors'
import appColors from './_appColors'
import appStyles from './_appStyles'

class Menu extends Component {

  findPreviousState() {
    let previousState = this.props.navigator.state.routeStack;
    return previousState[previousState.length - 2].id;
  }

  generateMenuItems() {
    let previousState = this.findPreviousState(),
        inputs = [],
        context = this;

    if(previousState === 'Setup') {
      inputs = [{
          label: "Update Info"
      }, {
          label: "Get Recommendations",
          nextRouteId: 'Loading',
          title: ''
      }, {
          label: "Set Reminders"
      }, {
          label: "Get Tested"
      }];
    } else if(previousState === 'Questionnaire') {
      inputs = [{
          label: "Recommended Tests",
          nextRouteId: 'Recommendations',
          title: ''
      }, {
          label: "Recommended Vaccinations"
      }, {
          label: "Start Over"
      }]
    }

  return inputs.map(function(input, index) {
    if(input.nextRouteId){
      return (
        <TouchableHighlight
          underlayColor={colors.white}
          key={index}
          onPress= {
           context.props.nextRoute.bind(context, { id: input.nextRouteId , title:'' })
          }
        >
          <View>
            <Text style={styles.menuItem}>
              {input.label}
            </Text>
          </View>
        </TouchableHighlight>
      );
    } else {
      return (
        <TouchableHighlight
          underlayColor={colors.white}
          key={index}
          >
          <View>
            <Text style={styles.menuItem}>
              {input.label}
            </Text>
          </View>
        </TouchableHighlight>
      );
    }
  });

  }

  generateText() {
    let previousState = this.findPreviousState(),
        text = {};
    if(previousState === 'Setup') {
      text.header = 'New Session';
      text.message = (
        <View>
          <Text style={styles.text}>
            Welcome John, Dr. Dick is happy to see you! What would you like to do?
          </Text>
        </View>
      )
    } else if(previousState === 'Questionnaire') {
      text.header = 'Recommendations';
      text.message = (
        <View>
          <Text style={styles.text}>
            Here are Dr. Dick's recommendations:
          </Text>
        </View>
      )
    }
    return text;
  }
  render() {
    return (
        <Navigator renderScene={this.renderScene.bind(this)} />
    );
  }
  renderScene(){
    return (
      <View style={styles.mainContainer}>
        <Header navigator={this.props.navigator} value={this.generateText().header} />
        <View style={styles.container}>
          {this.generateText().message}
          {this.generateMenuItems()}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: appColors.backgroundColorPrimary,
    flex: 1
  },
  container: {
    flex: 11,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuItem: {
    paddingTop: 20,
    paddingBottom: 20,
    textAlign: 'center',
    backgroundColor: appColors.backgroundColorMenuItem,
    margin: 5,
    width: 300,
    color: appColors.defaultTextColor,
    fontSize: appStyles.fontSizeRegular
  },
  text: {
    width: 300,
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 15,
    color: appColors.defaultTextColor
  }
});
export default Menu
