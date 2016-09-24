'use strict';

import React, { Component } from 'react';

import { View, Text, Button } from 'native-base';

import { TouchableOpacity } from 'react-native';

class ReminderEditor extends Component {

  openModal() {
    this.props.modal.open();
  }

  render() {
    return (
      <View style={{borderTopWidth: 0.5, borderColor: '#999'}}>
        <Text style={{marginTop: 25, textAlign: 'center', fontSize: 16, color: 'black', fontWeight: 'bold'}}>Your next reminder is { this.props.date.toString().substr(4,12) }</Text>
        <Button block style={{ marginTop: 15, marginBottom: 35,backgroundColor: '#517aa3', borderRadius: 30}} textStyle={{color: '#FFF', fontSize: 15}} onPress={()=>this.openModal()}>
          CHANGE REMINDER DATE
        </Button>
      </View>
    )
  }
}

export default ReminderEditor;
