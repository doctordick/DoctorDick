'use strict';

import React, { Component } from 'react';

import {Switch} from 'react-native';

import {Text, View } from 'native-base';

import styles from './styles';
import recommendations from './recommendations.js';
import FindTestingCenterButton from '../find-test-center-button';

class RecommendationCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reminder: false,
        }
    }

    render() {
      const {text, findTestingCenter, setReminders, orderHomeKit} = recommendations[this.props.recommendationCode]

      return (
        <View padder style={styles.card}>
          <Text style={styles.title}>{text}</Text>

          { setReminders &&
            <View style={styles.reminderContainer}>
              <Text style={styles.reminderLabel}>Get reminders:</Text>
              <Switch style={styles.reminderSwitch}
                onValueChange={value => this.setState({reminder: value})}
                value={this.state.reminder}
              />
            </View>
          }

          { findTestingCenter && <FindTestingCenterButton />}
        </View>
      )
    }
}

export default RecommendationCard;
