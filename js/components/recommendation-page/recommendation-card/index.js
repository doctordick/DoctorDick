'use strict';

import React, { Component } from 'react';

import {Switch, Linking} from 'react-native';

import {Text, Content, View, Button, Card, CardItem } from 'native-base';

import styles from './styles';
import recommendations from './recommendations.js';
import FindTestingCenterButton from '../find-test-center-button';
import Collapsible from 'react-native-collapsible';
import ReminderEditor from './reminder-editor';
import { connect } from 'react-redux';


import { pushNewRoute } from '../../../actions/route';

class RecommendationCard extends Component {
    openLink(url) {
        Linking.openURL(url).catch(err => console.error('An error occurred', err));
    }

    pushNewRoute(route) {
        this.props.pushNewRoute(route);
    }

    render() {
      const {text, summary, reminderText, buttonTitle, setRemindersFirst, findTestingCenter, setReminders, orderHomeKit} = recommendations[this.props.recommendationCode]

      return (
          <Card style={{width: 350, marginLeft: -5}}>
            <CardItem style={{justifyContent:'center'}} header>
              <Text>HIV TESTING</Text>
            </CardItem>
            <CardItem>
              <Text>Based on your most recent answers, here are Doctor D's recommendations for you</Text>
            </CardItem>
            <CardItem>
              <Text style={{ fontWeight: 'bold'}}>{summary}</Text>
            </CardItem>
            { setRemindersFirst && setReminders &&
              <CardItem>
                <Text>{reminderText}</Text>
                <Button block style={styles.setReminderButton} textStyle={{fontSize: 16, color: '#eee'}}
                onPress={() => {
                  this.pushNewRoute('remindersPage')}
                }>
                Set Reminder
                </Button>
              </CardItem>
            }
            <CardItem>
              <Text>{text}</Text>
              { findTestingCenter && <FindTestingCenterButton title={buttonTitle} />}
              <Button transparent textStyle={{color: '#0000EE', fontSize: 14}} style={{alignSelf: 'center'}} onPress={this.openLink.bind(this, 'https://www.aids.gov/hiv-aids-basics')}>
                  More Information About HIV
              </Button>
            </CardItem>
            { !setRemindersFirst && setReminders &&
              <CardItem>
                <Text>{reminderText}</Text>
                <Button block style={styles.setReminderButton} textStyle={{fontSize: 16, color: '#eee'}}
                onPress={() => {
                  this.pushNewRoute('remindersPage')}
                }>
                Set Reminder
                </Button>
              </CardItem>
            }
            <CardItem style={{alignItems:'center'}}>
              <Text onPress={() => this.pushNewRoute('survey')} style={{fontSize: 13, color: '#0000EE', textDecorationLine: 'underline'}}>RETAKE HIV TESTING SURVEY</Text>
            </CardItem>
          </Card>
      )
    }
}
function mapActionsToProps(dispatch) {
  return {
    pushNewRoute: (route) => dispatch(pushNewRoute(route))
  }
}

export default connect(null, mapActionsToProps)(RecommendationCard);
