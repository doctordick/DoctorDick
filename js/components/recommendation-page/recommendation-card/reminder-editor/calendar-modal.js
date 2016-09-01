'use strict';

import React, { Component } from 'react';

import {Text} from 'native-base';

// import Modal from 'react-native-modalbox';
// import CalendarPicker from 'react-native-calendar-picker';

class CalendarModal extends Component {
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

export default CalendarModal;
