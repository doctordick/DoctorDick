'use strict';

import React, { Component } from 'react';

import {Switch, Linking} from 'react-native';

import {Text, Content, View, Button, Card, CardItem} from 'native-base';

import styles from './styles';
import recommendations from '../../recommendation-page/recommendation-card/recommendations.js';
import Collapsible from 'react-native-collapsible';
import ReminderEditor from './reminder-editor';

class RemindersCard extends Component {
    constructor(props) {
      super(props)
      this.state = {
        editingMode: true,
      }
    }

    toggleEditingMode() {
      this.setState({
        editingMode: !this.state.editingMode,
      })
    }

    openLink(url) {
        Linking.openURL(url).catch(err => console.error('An error occurred', err));
    }

    render() {
      const {editingMode} = this.state
      const {text, reminderText, setReminders, orderHomeKit} = recommendations[this.props.recommendationCode]

      return (
        <View style={{marginTop: 20}}>
          <View style={styles.cardHeader}>
            <Text style={styles.headerText}>{this.props.label} Testing Reminder</Text>
          </View>
          { editingMode ?
            <View>
              <View padder style={styles.card}>
                <Text style={styles.title}>
                Ask your doctor if you have any questions about how often you should get a test. Talk to your doctor immediately if you have had a <Text style={[styles.title, {fontWeight: 'bold'}]}>high-risk exposure</Text> to HIV.
                </Text>

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
              </View>
              <Button style={styles.saveButton} textStyle={{color: 'white', fontSize: 14}} onPress={this.toggleEditingMode.bind(this)}>Save Reminder</Button>
            </View>
          : <View>
              <View padder style={styles.card}>
                <Text style={styles.title}>{reminderText}</Text>

                <Text style={{color: 'red', marginTop: 10}}>Next reminder: {this.props.reminder ? this.props.date.toString().substr(4,12) : 'No reminder set.'}</Text>

                <Text style={{color: 'red', marginBottom: 30}}>My last {this.props.label} test was on: { false ? '' : 'Not Sure.'}</Text>

              </View>
              <Button style={[styles.saveButton, {backgroundColor: '#689acc'}]} textStyle={{color: 'white', fontSize: 14}} onPress={this.toggleEditingMode.bind(this)}>Manage</Button>
            </View>}
          <Button transparent textStyle={{color: '#0000EE', fontSize: 14}} style={{alignSelf: 'center'}} onPress={this.openLink.bind(this, 'https://www.aids.gov/hiv-aids-basics')}>
              More Information About HIV
          </Button>
        </View>
      )
    }
}

export default RemindersCard;
