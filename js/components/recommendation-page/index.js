'use strict';

import React, { Component } from 'react';
import { Image, NativeAppEventEmitter } from 'react-native';
import { connect } from 'react-redux';

import { popRoute, replaceOrPushRoute, pushNewRoute } from '../../actions/route';
import { toggleReminder, setReminderDate, createNewIOSReminder } from '../../actions/recommendations';


import {Container, Header, Title, Content, Text, Button, Icon, InputGroup, Input, View, Footer } from 'native-base';

import Modal from 'react-native-modalbox';
import RecommendationCard from './recommendation-card';

import FooterComponent from './../footer';
import theme from '../../themes/base-theme';
import styles from './styles';
import Calendar from '../calendar';
import RNCalendarReminders from 'react-native-calendar-reminders';

class RecommendationPage extends Component {
    constructor(props) {
      super(props);
      this.state = {
        modal: null,
      }
    }

    componentWillMount() {
      this.remindersChangedListener = NativeAppEventEmitter.addListener('remindersChanged', reminders => {
        console.log('remindersChanged', reminders)
      });
      this.reminderSaveSuccessListener = NativeAppEventEmitter.addListener('reminderSaveSuccess', reminderID => {
        console.log('reminderSaveSuccess: ', reminderID)
        if (reminderID !== this.props.recommendations.HIV.ReminderID) {
          this.props.createNewIOSReminder(reminderID, 'HIV');
        }
      });
      this.reminderSaveErrorListener = NativeAppEventEmitter.addListener('reminderSaveError', error => {
        console.log('reminderSaveError: ', error)
      });
    }

    componentWillUnmount() {
      this.remindersChangedListener.remove()
      this.reminderSaveSuccessListener.remove()
      this.reminderSaveErrorListener.remove()
    }

    componentDidMount() {
      // this solves the race condition with this.refs.modal
      this.setState({modal: this.refs.modal})

      RNCalendarReminders.authorizeEventStore((error, auth) => {
        console.log('authorized EventStore');
      });
    }

    popRoute() {
        this.props.popRoute();
    }
    navigateTo(route) {
        this.props.replaceOrPushRoute(route);
    }
    pushNewRoute(route) {
         this.props.pushNewRoute(route);
    }

    closeModal() {
        this.refs.modal.close()
    }

    toggleReminder() {
      if (this.props.recommendations.HIV.ReminderID && this.props.recommendations.HIV.ReminderEnabled) {
        RNCalendarReminders.removeReminder(this.props.recommendations.HIV.ReminderID);
      }
      this.props.toggleReminder('HIV');
    }

    setDate(date) {
      this.props.setReminderDate(date, 'HIV');

      // check if we have IOS reminder already, if so edit it, if not create new.
      if (this.props.recommendations.HIV.ReminderID) {
        RNCalendarReminders.updateReminder(this.props.recommendations.HIV.ReminderID, {
          startDate: date,
          alarms: [{
            date: date
          }]
        });
      } else {
        RNCalendarReminders.saveReminder('Doctor Dick Reminder', {
          location: '',
          notes: 'Doctor Dick says: Open the App and stay Healthy!',
          startDate: date,
          alarms: [{
            date: date
          }]
        });
      }
    }

    render() {
        const recommendations = this.props.recommendations;
        return (
            <Container theme={theme} style={{backgroundColor:'#384850'}} >
                <Image source={require('../../../images/glow2.png')} style={styles.container} >
                    <Header>
                        <Button transparent onPress={() => this.popRoute()}>
                            <Icon name='ios-arrow-back' style={{fontSize: 30, lineHeight: 32}} />
                        </Button>

                        <Title>Recommendations</Title>
                    </Header>

                    <Content padder style={{backgroundColor: 'transparent'}}>
                        {recommendations.HIV.RecommendationCode &&
                        <View padder>
                            <Text>Based on your questionnaire answers, the CDC recommends:</Text>
                            <RecommendationCard
                              recommendationCode={recommendations.HIV.RecommendationCode}
                              reminder={recommendations.HIV.ReminderEnabled}
                              toggleReminder={this.toggleReminder.bind(this)}
                              date={recommendations.HIV.NextReminder || '    Pick a day'}
                              modal={this.state.modal}
                            />
                        </View>}
                        <View padder>
                          <Text>
                            Here is the medical history you have not filled out yet:
                          </Text>
                          {Object.keys(recommendations)
                            .filter(key => !recommendations[key].RecommendationCode)
                            .map(key => (
                              key === 'HIV' ?
                                <Button rounded block onPress={() => this.pushNewRoute('survey')} style={{marginTop: 20, marginHorizontal: 10, marginBottom: 10}} textStyle={{color: '#eee'}} key={key}>{key}</Button>
                              : <Button disabled rounded block style={{marginTop: 20, marginHorizontal: 10, marginBottom: 10}} key={key}>{key+' - Coming Soon...'}</Button>
                            ))
                          }
                        </View>
                        <Modal
                          style={[styles.modal, styles.modal1]}
                          backdrop={false}
                          ref={'modal'}
                          swipeToClose={true} >
                              <View style={styles.space}>
                                  <Calendar
                                      date={recommendations.HIV.NextReminder || new Date(Date.now() + 1000 * 60 * 60 * 24 * 90) }
                                      setDate={this.setDate.bind(this)}
                                  />
                                  <Button style={styles.saveButton} rounded onPress={this.closeModal.bind(this)} >
                                      Save
                                  </Button>
                              </View>
                         </Modal>
                    </Content>
                </Image>
                <Footer>
                    <FooterComponent navigator={this.props.navigator} currentPage='recommendationPage' />
                </Footer>
            </Container>
        )
    }
}

function bindAction(dispatch) {
    return {
        popRoute: () => dispatch(popRoute()),
        pushNewRoute: (route) => dispatch(pushNewRoute(route)),
        replaceOrPushRoute: (route) => dispatch(replaceOrPushRoute(route)),
        toggleReminder: (questionnaireType) => dispatch(toggleReminder(questionnaireType)),
        setReminderDate: (date, questionnaireType) => dispatch(setReminderDate(date, questionnaireType)),
        createNewIOSReminder: (reminderID, questionnaireType) => dispatch(createNewIOSReminder(reminderID, questionnaireType)),
    }
}

function mapStateToProps(state) {
  return {
    recommendations: state.recommendations
  }
}

export default connect(mapStateToProps, bindAction)(RecommendationPage);
