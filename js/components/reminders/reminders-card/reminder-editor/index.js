'use strict';

import React, { Component } from 'react';

import { View, Text, Button } from 'native-base';

import { TouchableOpacity } from 'react-native';
import styles from './styles';

class ReminderEditor extends Component {

  openModal() {
    this.props.modal.open();
  }

  render() {
    return (
      <View>
        <Text style={{marginTop: 25, textAlign: 'center', fontSize: 16, color: 'black', fontWeight: 'bold'}}>Your next reminder is { this.props.date.toString().substr(4,12) }</Text>
        <Button block style={{ marginTop: 15, marginBottom: 35,backgroundColor: '#000'}} textStyle={{color: '#FFF'}} onPress={()=>this.openModal()}>
          Change Reminder Date
        </Button>
      </View>
    )
  }
}

export default ReminderEditor;