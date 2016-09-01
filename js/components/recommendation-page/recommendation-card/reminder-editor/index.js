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
        <Text style={{color: 'black'}}>Next reminder:</Text>
        <TouchableOpacity onPress={()=>this.openModal()}>
          <Text style={styles.nextDatePicker}>{ this.props.date.toString().substr(4,12) }</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default ReminderEditor;