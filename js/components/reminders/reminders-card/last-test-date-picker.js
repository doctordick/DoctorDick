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
      <View>
        <Text style={{marginTop: 25, textAlign: 'center', fontSize: 16, color: 'black', fontWeight: 'bold'}}>My last HIV Test was on { this.props.date ? this.props.date.toString().substr(4,12) : 'never' }</Text>
        <Button block style={{ marginTop: 15, marginBottom: 75,backgroundColor: '#000'}} textStyle={{color: '#FFF'}} onPress={()=>this.openModal()}>
          Change Last Test Date
        </Button>
      </View>
    )
  }
}

export default LastTestDatePicker;