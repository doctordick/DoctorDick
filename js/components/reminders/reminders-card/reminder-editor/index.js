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
        <Text style={{textAlign: 'center', fontSize: 20, color: 'black', fontWeight: 'bold'}}>Your next reminder: { this.props.date.toString().substr(4,12) }</Text>
        <Button block style={{ marginTop: 10, backgroundColor: '#000'}} textStyle={{color: '#FFF'}} onPress={()=>this.openModal()}>
          Change Reminder Date
        </Button>
      </View>
    )
  }
}

export default ReminderEditor;