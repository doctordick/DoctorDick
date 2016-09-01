'use strict';

import React, { Component } from 'react';

import {Switch} from 'react-native';

import {Text, Content, View, Container } from 'native-base';

import styles from './styles';

import Modal from 'react-native-modalbox';
var CalendarPicker = require('react-native-calendar-picker'), CalendarPicker2;


class CalendarModalPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        }
    }

    render() {
      return (
        <Text style={{color: 'black'}}>Henry is a boss</Text>
      )
    }
}

export default CalendarModalPicker;
