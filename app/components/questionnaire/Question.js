import React, { Component } from 'react'

import {
  Text,
  StyleSheet,
  View,
  TouchableHighlight,
  Navigator
} from 'react-native';

import NavigationBar from '../shared/NavigationBar';
import colors from '../_colors';
import appColors from '../_appColors';
import appStyles from '../_appStyles';

export default class Question extends Component {

  nextQuestion() {
    this.props.nextQuestion();
  }

  generateOptions() {
    let context = this;
    const options = [
      "Less than 1 month ago",
      "1 to 3 months ago",
      "3 to 6 months ago ",
      "More than 6 months ago"
    ];

    return options.map((option, index)=>{
      return (
        <TouchableHighlight
          underlayColor={colors.white}
          onPress={context.nextQuestion.bind(context)}
          key={index}
          activeOpacity= {4}
          >
          <View>
            <Text style={styles.option}>
              {option}
            </Text>
          </View>
        </TouchableHighlight>
      );
    });
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <NavigationBar
          navigator={this.props.navigator}
          value={this.props.header} />
        <View style={styles.container} >
          <Text style={styles.text}>
            {this.props.question}
          </Text>
          {this.generateOptions()}
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
    backgroundColor: appColors.backgroundColorPrimary,
  },

  option: {
    paddingTop: 20,
    paddingBottom: 20,
    textAlign: 'center',
    backgroundColor: appColors.backgroundColorQuestion,
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
