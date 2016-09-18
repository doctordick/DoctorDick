'use strict';

import React, { Component } from 'react';

import {Switch, Linking} from 'react-native';

import {Text, Content, View, Button } from 'native-base';

import styles from './styles';
import recommendations from '../../recommendation-page/recommendation-card/recommendations.js';
import Collapsible from 'react-native-collapsible';
import ReminderEditor from './reminder-editor';

class RemindersCard extends Component {
    openLink(url) {
        Linking.openURL(url).catch(err => console.error('An error occurred', err));
    }

    render() {
      const {text, setReminders, orderHomeKit} = recommendations[this.props.recommendationCode]

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

          <Button transparent textStyle={{color: '#0000EE', fontSize: 14}} style={{alignSelf: 'center'}} onPress={this.openLink.bind(this, 'https://www.aids.gov/hiv-aids-basics')}>
              More Information About HIV
          </Button>
        </View>
      )
    }
}

export default RemindersCard;
