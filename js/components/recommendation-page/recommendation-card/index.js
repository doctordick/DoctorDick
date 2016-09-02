'use strict';

import React, { Component } from 'react';

import {Switch} from 'react-native';

import {Text, Content, View } from 'native-base';

import styles from './styles';
import recommendations from './recommendations.js';
import FindTestingCenterButton from '../find-test-center-button';
import Collapsible from 'react-native-collapsible';
import ReminderEditor from './reminder-editor';

class RecommendationCard extends Component {
    render() {
      const {text, findTestingCenter, setReminders, orderHomeKit} = recommendations[this.props.recommendationCode]

      return (
        <View padder style={styles.card}>
          <Text style={styles.title}>{text}</Text>

          { setReminders &&
            <View style={styles.reminderContainer}>
              <Text style={styles.reminderLabel}>SET REMINDERS:</Text>
              <Switch style={styles.reminderSwitch}
                onValueChange={() => this.props.toggleReminder()}
                value={this.props.reminder}
              />
            </View>
          }

          <Collapsible collapsed={!this.props.reminder}>
            <ReminderEditor modal={this.props.modal} date={this.props.date}/>
          </Collapsible>

          { findTestingCenter && <FindTestingCenterButton />}
        </View>
      )
    }
}

export default RecommendationCard;
