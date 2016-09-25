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
      <View>
        <Text style={{textAlign: 'center', fontSize: 16, color: '#696969', fontWeight: 'bold'}}>Your next reminder is on { this.props.date.toString().substr(4,12).toUpperCase() }</Text>
        <Button block style={{ alignSelf: 'center', width: 250, marginTop: 30, marginBottom: 30,backgroundColor: '#517aa3', borderRadius: 30}} textStyle={{color: '#FFF', fontSize: 14}} onPress={()=>this.openModal()}>
          CHANGE REMINDER DATE
        </Button>
      </View>
    )
  }
}

export default ReminderEditor;
