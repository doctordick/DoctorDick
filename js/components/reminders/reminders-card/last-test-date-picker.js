'use strict';

import React, { Component } from 'react';

import { View, Text, Button } from 'native-base';

import { TouchableOpacity } from 'react-native';

class LastTestDatePicker extends Component {

  openModal() {
    this.props.modal.open();
  }

  render() {
    return (
      <View style={{borderTopWidth: 0.5, borderColor: '#999'}}>
        <Text style={{marginTop: 20, textAlign: 'center', fontSize: 16, color: '#696969', fontWeight: 'bold'}}>My Last HIV Test was on: { this.props.date ? this.props.date.toString().substr(4,12).toUpperCase() : 'NOT SURE' }</Text>
        <Button block style={{ alignSelf: 'center', width: 250, marginTop: 30, marginBottom: 30, backgroundColor: '#517aa3', borderRadius: 30}} textStyle={{color: 'white', fontSize: 14}} onPress={()=>this.openModal()}>
          CHANGE LAST TEST DATE
        </Button>
      </View>
    )
  }
}

export default LastTestDatePicker;
