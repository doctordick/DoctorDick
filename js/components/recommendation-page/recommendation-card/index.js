'use strict';

import React, { Component } from 'react';

import {Switch, Linking} from 'react-native';

import {Container, Text, Content, View, Button, Card, CardItem } from 'native-base';

import styles from './styles';
import prepRecommendations from './prepRecommendations.js';
import recommendations from './recommendations.js';
import FindTestingCenterButton from '../find-test-center-button';
import Collapsible from 'react-native-collapsible';
import { connect } from 'react-redux';


import { pushNewRoute } from '../../../actions/route';

class RecommendationCard extends Component {
    openLink(url) {
        Linking.openURL(url).catch(err => console.error('An error occurred', err));
    }

    pushNewRoute(route) {
        this.props.pushNewRoute(route);
    }

    renderHIVCard() {
        const {text, summary, reminderText, buttonTitle, setRemindersFirst, findTestingCenter, setReminders, orderHomeKit} = recommendations[this.props.recommendationCode]
        return (
              <Card style={{width: 350, marginLeft: -5}}>
                <CardItem style={{backgroundColor: '#517aa3', justifyContent:'center'}} header>
                  <Text style={{color: '#FFF', fontWeight: '300'}}>HIV TESTING RECS</Text>
                </CardItem>
                <CardItem>
                  <Text style={{color: '#696969', fontWeight: '300'}}>Based on your most recent answers, here are Doctor D's recommendations for you:</Text>
                </CardItem>
                <CardItem>
                  <Text style={{ color: '#696969', fontWeight: 'bold', fontSize: 18}}>{summary}</Text>
                </CardItem>
                { setRemindersFirst && setReminders &&
                  <CardItem>
                    <Text style={{color: '#696969', fontWeight: '300'}}>{reminderText}</Text>
                    <Button block style={styles.setReminderButton} textStyle={{fontSize: 16, color: '#eee', fontWeight: '300'}}
                    onPress={() => {
                      this.pushNewRoute('remindersPage')}
                    }>
                    Set Reminder
                    </Button>
                  </CardItem>
                }
                <CardItem>
                  <Text style={{color: '#696969',fontWeight: '300'}}>{text}</Text>
                  { findTestingCenter && <FindTestingCenterButton title={buttonTitle} />}
                  <Button transparent textStyle={{color: '#0000EE', fontSize: 14}} style={{alignSelf: 'center'}} onPress={this.openLink.bind(this, 'https://www.aids.gov/hiv-aids-basics')}>
                      More Information About HIV
                  </Button>
                </CardItem>
                { !setRemindersFirst && setReminders &&
                  <CardItem>
                    <Text style={{color: '#696969',fontWeight: '300'}}>{reminderText}</Text>
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

    renderPrEPCard() {
        const {text, summary, findPrEP} = prepRecommendations[this.props.recommendationCode]
        return (
          <Card style={{width: 350, marginLeft: -5}}>
            <CardItem style={{backgroundColor: '#517aa3', justifyContent:'center'}} header>
              <Text style={{color: '#FFF', fontWeight: '300'}}>PrEP RECS</Text>
            </CardItem>
            <CardItem>
              <Text style={{color: '#696969', fontWeight: '300'}}>Based on your most recent answers, here are Doctor D's recommendations for you:</Text>
            </CardItem>
            <CardItem>
              <Text style={{ color: '#696969', fontWeight: 'bold', fontSize: 18}}>{summary}</Text>
            </CardItem>
            <CardItem>
              <Text style={{color: '#696969',fontWeight: '300'}}>{text}</Text>
              { findPrEP && <FindTestingCenterButton title={'Find PrEP Services'} />}
              <Button transparent textStyle={{color: '#0000EE', fontSize: 14}} style={{alignSelf: 'center'}} onPress={this.openLink.bind(this, 'https://www.aids.gov/hiv-aids-basics')}>
                  More Information About HIV
              </Button>
            </CardItem>
            <CardItem style={{alignItems:'center'}}>
              <Text onPress={() => this.pushNewRoute('prepSurvey')} style={{fontSize: 13, color: '#0000EE', textDecorationLine: 'underline'}}>RETAKE PrEP SURVEY</Text>
            </CardItem>
          </Card>
        )
    }

    render() {
      if(this.props.recommendationFor === 'HIV') {
        return this.renderHIVCard();
      }

      if(this.props.recommendationFor === 'PrEP') {
        return this.renderPrEPCard();
      }
    }
}
function mapActionsToProps(dispatch) {
  return {
    pushNewRoute: (route) => dispatch(pushNewRoute(route))
  }
}

export default connect(null, mapActionsToProps)(RecommendationCard);
