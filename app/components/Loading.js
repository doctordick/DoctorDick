import React, { Component } from 'react'

import {
  Text,
  View,
  StyleSheet
} from 'react-native'

import appColors from './_appColors'

class Loading extends Component {

  findPreviousState() {
    let previousState = this.props.navigator.state.routeStack;
    return previousState[previousState.length - 2].id;
  }

  generateText(){
    let previousState = this.findPreviousState(),
        text;
    if(previousState === 'Menu'){
      text = 'Hi! Dr. Dick has more questions for you...';
    } else if(previousState === 'Questionnaire') {
      text = 'Generating recommendations...';
    }

    return text;
  }

  componentWillMount() {
    let previousState = this.findPreviousState(),
        nextRouteId;

    if(previousState === 'Menu'){
      nextRouteId = 'Questionnaire';
    } else if(previousState === 'Questionnaire') {
      nextRouteId = 'Menu';
    }

    const navigator = this.props.navigator;

    setTimeout(() => {
      navigator.replace({
        id: nextRouteId,
      });
    }, 1500);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          { this.generateText() }
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

export default Loading
