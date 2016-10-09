'use strict';

import React, { Component } from 'react';
import { Image, NativeAppEventEmitter } from 'react-native';
import { connect } from 'react-redux';

import { popRoute, replaceOrPushRoute, pushNewRoute } from '../../actions/route';
import { toggleReminder, setReminderDate, setLastTestDate, setTestFrequency, createNewIOSReminder } from '../../actions/recommendations';


import {Container, Title, Content, Text, Button, Icon, InputGroup, Input, View, Footer, Card, CardItem } from 'native-base';

import Modal from 'react-native-modalbox';
import RemindersCard from './reminders-card';

import FooterComponent from './../footer';
import theme from '../../themes/base-theme';
import styles from './styles';
import Calendar from '../calendar';
import RNCalendarReminders from 'react-native-calendar-reminders';

import CustomHeader from '../custom-header';

class RemindersPage extends Component {
    constructor(props) {
      super(props);
      this.state = {
        nextModal: null,
        lastModal: null,
        defaultDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 90)
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
      this.setState({nextModal: this.refs.nextModal})
      this.setState({lastModal: this.refs.lastModal})
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

    closeNextModal() {
        this.refs.nextModal.close()
    }

    closeLastModal() {
        this.refs.lastModal.close()
    }

    toggleReminder() {
      RNCalendarReminders.authorizeEventStore((error, auth) => {
        console.log('authorized EventStore');
        if(!this.props.recommendations.HIV.reminderID && this.props.recommendations.HIV.ReminderEnabled && this.props.recommendations.HIV.RecommendationCode) {
          this.setDate(this.state.defaultDate);
        }
      });

      if (this.props.recommendations.HIV.ReminderID && this.props.recommendations.HIV.ReminderEnabled) {
        try {
          RNCalendarReminders.removeReminder(this.props.recommendations.HIV.ReminderID);
        } catch (err) {}

      }
      this.props.toggleReminder('HIV');
    }

    setDate(date) {
      this.props.setReminderDate(date, 'HIV');

      // check if we have IOS reminder already, if so edit it, if not create new.
      if (this.props.recommendations.HIV.ReminderID) {
        try {
          RNCalendarReminders.updateReminder(this.props.recommendations.HIV.ReminderID, {
            startDate: date.toISOString(),
            dueDate: new Date(date + 1).toISOString(),
            alarms: [{
              date: date.toISOString()
            }],
            recurrence: 'monthly',
            recurrenceInterval: this.props.recommendations.HIV.TestFrequency[0],
          });
        } catch (error) {
          console.error(error)
        }
      } else {
        RNCalendarReminders.saveReminder('Doctor D Reminder', {
          location: '',
          notes: 'Open the app and stay on top of your sexual health!',
          startDate: date.toISOString(),
          dueDate: new Date(date + 1).toISOString(),
          alarms: [{
            date: date.toISOString()
          }],
          recurrence: 'monthly',
          recurrenceInterval: this.props.recommendations.HIV.TestFrequency[0],
        });
      }
    }

    setLastTestDate(date) {
      this.props.setLastTestDate(date, 'HIV');
    }

    setTestFrequency(num){
      this.props.setTestFrequency(num, 'HIV');

      const date = this.props.recommendations.HIV.NextReminder

      // check if we have IOS reminder already, if so edit it, if not create new.
      if (this.props.recommendations.HIV.ReminderID) {
        RNCalendarReminders.updateReminder(this.props.recommendations.HIV.ReminderID, {
          startDate: date.toISOString(),
          dueDate: new Date(date + 1).toISOString(),
          alarms: [{
            date: date.toISOString()
          }],
          recurrence: 'monthly',
          recurrenceInterval: num[0],
        });
      } else {
        RNCalendarReminders.saveReminder('Doctor D Reminder', {
          location: '',
          notes: 'Open the app and stay on top of your sexual health!',
          startDate: date.toISOString(),
          dueDate: new Date(date + 1).toISOString(),
          alarms: [{
            date: date.toISOString()
          }],
          recurrence: 'monthly',
          recurrenceInterval: num[0],
        });
      }
    }

    render() {
        const recommendations = this.props.recommendations;
        return (
            <Container theme={theme} style={styles.container} >
                <Image source={require('../../../images/glow2.png')} style={styles.container} >
                    <CustomHeader title={"MY REMINDERS"} showBackButton={true} />

                    <Content padder>
                        {recommendations.HIV.RecommendationCode &&
                        <View style={{marginTop: -10}} padder>

                            <RemindersCard
                              label="HIV"
                              recommendationCode={recommendations.HIV.RecommendationCode}
                              reminder={recommendations.HIV.ReminderEnabled}
                              toggleReminder={this.toggleReminder.bind(this)}
                              nextDate={recommendations.HIV.nextDate || this.state.defaultDate}
                              testFrequency={recommendations.HIV.TestFrequency}
                              setTestFrequency={(val) => this.setTestFrequency(val)}
                              lastDate={recommendations.HIV.LastTestDate}
                              nextModal={this.state.nextModal}
                              lastModal={this.state.lastModal}
                            />
                        </View>}
                        <Modal
                          style={[styles.modal, styles.modal1]}
                          backdrop={false}
                          ref={'nextModal'}
                          swipeToClose={true} >
                              <View style={styles.space}>
                                  <Calendar
                                      date={recommendations.HIV.NextReminder || this.state.defaultDate }
                                      setDate={this.setDate.bind(this)}
                                  />
                                  <Text style={{marginTop: 20, textAlign: 'center'}}>
                                    { this.state.defaultDate.toString().substr(4,12).toUpperCase() } is 90 days from today.
                                  </Text>
                                  <Button textStyle={{color:'#fff'}} style={styles.saveButton} rounded onPress={this.closeNextModal.bind(this)} >
                                      SAVE
                                  </Button>
                              </View>
                         </Modal>
                         <Modal
                          style={[styles.modal, styles.modal1]}
                          backdrop={false}
                          ref={'lastModal'}
                          swipeToClose={true} >
                              <View style={styles.space}>
                                  <Calendar
                                      date={recommendations.HIV.LastTestDate}
                                      setDate={this.setLastTestDate.bind(this)}
                                  />

                                  <Button textStyle={{color:'#fff'}} style={styles.saveButton} rounded onPress={this.closeLastModal.bind(this)} >
                                      SAVE
                                  </Button>
                              </View>
                         </Modal>
                    </Content>
                </Image>
                <Footer>
                    <FooterComponent navigator={this.props.navigator} currentPage='remindersPage' />
                </Footer>
            </Container>
        )
    }
}

function mapActionsToProps(dispatch) {
    return {
        popRoute: () => dispatch(popRoute()),
        pushNewRoute: (route) => dispatch(pushNewRoute(route)),
        replaceOrPushRoute: (route) => dispatch(replaceOrPushRoute(route)),
        toggleReminder: (questionnaireType) => dispatch(toggleReminder(questionnaireType)),
        setReminderDate: (date, questionnaireType) => dispatch(setReminderDate(date, questionnaireType)),
        setLastTestDate: (date, questionnaireType) => dispatch(setLastTestDate(date, questionnaireType)),
        setTestFrequency: (date, questionnaireType) => dispatch(setTestFrequency(date, questionnaireType)),
        createNewIOSReminder: (reminderID, questionnaireType) => dispatch(createNewIOSReminder(reminderID, questionnaireType)),
    }
}

function mapStateToProps(state) {
  return {
    recommendations: state.recommendations
  }
}

export default connect(mapStateToProps, mapActionsToProps)(RemindersPage);
