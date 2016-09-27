'use strict';

import React, { Component } from 'react';

import {Switch, Linking} from 'react-native';

import {Container, Text, Content, View, Button, Card, CardItem } from 'native-base';

import styles from './styles';
import recommendations from './recommendations.js';
import FindTestingCenterButton from '../find-test-center-button';
import Collapsible from 'react-native-collapsible';
import { connect } from 'react-redux';


import { pushNewRoute } from '../../../actions/route';

class RecommendationCard extends Component {

    constructor(props) {
      super(props)
      this.state = {
        navFrom: null,
      }
    }
    openLink(url) {
        Linking.openURL(url).catch(err => console.error('An error occurred', err));
    }

    pushNewRoute(route, navFrom) {
        this.props.pushNewRoute(route);
        this.setState({
          navFrom: navFrom
        })
    }

    renderHIVCard() {
        const {text, summary, reminderText, buttonTitle, setRemindersFirst, findTestingCenter, setReminders, orderHomeKit} = recommendations[this.props.recommendationCode]
        return (
            <Card style={{width: 350, marginLeft: -5}}>
              <CardItem style={{backgroundColor: '#FFF', justifyContent:'center'}} header>
                <Text style={{fontSize: 18, color: '#517aa3', fontWeight: '500'}}>HIV TESTING RECS</Text>
              </CardItem>
              <CardItem style={{borderColor: '#e9e9e9'}}>
                <Text style={{color: '#696969', fontWeight: '300'}}>Based on your most recent answers, here are Doctor D's recommendations for you:</Text>
              </CardItem>
              <CardItem style={{borderColor: '#e9e9e9'}}>
                <Text style={{color:'#517aa3', alignSelf: 'center', fontWeight: '800', fontSize: 14}}>{summary}</Text>
              </CardItem>
              { setRemindersFirst && setReminders &&
                <CardItem style={{borderColor: '#e9e9e9'}}>
                  <Text style={{color: '#696969', fontWeight: '300'}}>{reminderText}</Text>
                  <Button block style={styles.setReminderButton} textStyle={{fontSize: 14, color: '#eee', fontWeight: '300'}}
                  onPress={() => {
                    this.pushNewRoute('remindersPage')}
                  }>
                  SET REMINDER
                  </Button>
                </CardItem>
              }
              <CardItem style={{borderColor: '#e9e9e9'}}>
                <Text style={{color: '#696969',fontWeight: '300'}}>{text}</Text>
                { findTestingCenter && <FindTestingCenterButton destination={'careLocator'} title={buttonTitle.toUpperCase()} />}
                <Button transparent textStyle={{color: '#0000EE', fontSize: 14}} style={{alignSelf: 'center'}} onPress={this.openLink.bind(this, 'https://www.aids.gov/hiv-aids-basics')}>
                    More Information About HIV
                </Button>
              </CardItem>
              { !setRemindersFirst && setReminders &&
                <CardItem style={{borderColor: '#e9e9e9'}}>
                  <Text style={{color: '#696969',fontWeight: '300'}}>{reminderText}</Text>
                  <Button block style={styles.setReminderButton} textStyle={{fontSize: 14, color: '#eee'}}
                  onPress={() => {
                    this.pushNewRoute('remindersPage')}
                  }>
                  SET REMINDER
                  </Button>
                </CardItem>
              }
              <CardItem style={{alignItems:'center', borderColor: '#e9e9e9'}}>
                <Text onPress={() => this.pushNewRoute('survey')} style={{fontSize: 13, color: '#0000EE', textDecorationLine: 'underline'}}>RETAKE HIV TESTING SURVEY</Text>
              </CardItem>
            </Card>
        )
    }

    render() {
      if(this.props.recommendationFor === 'HIV') {
        return this.renderHIVCard();
      }
    }
}
function mapActionsToProps(dispatch) {
  return {
    pushNewRoute: (route) => dispatch(pushNewRoute(route))
  }
}

export default connect(null, mapActionsToProps)(RecommendationCard);
