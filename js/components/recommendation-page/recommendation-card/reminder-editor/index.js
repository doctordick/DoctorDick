'use strict';

import React, {Component} from 'react';

import {View, Text} from 'native-base';
import CalendarModal from './calendar-modal';
import {
  Select,
  Option,
  OptionList,
  updatePosition
} from 'react-native-dropdown';

import styles from './styles';

class ReminderEditor extends Component {

  constructor(props) {
    super(props);

    this.state = {
      frequency: ''
    };
  }

  componentDidMount() {
    updatePosition(this.refs['SELECT1']);
    updatePosition(this.refs['OPTIONLIST']);
  }

  _getOptionList() {
    return this.refs['OPTIONLIST'];
  }

  setFrequency(frequency) {
    this.setState({
      frequency,
    });
  }

  render() {
    return (
      <View>
        <Text style={{color: 'black'}}>Next reminder:</Text>
        <Text style={styles.nextDatePicker}>12/25/2016</Text>

        { /*  FrequencyDropdown */ }
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Select
            width={250}
            ref="SELECT1"
            optionListRef={this._getOptionList.bind(this)}
            defaultValue="& every 3 months after"
            onSelect={this.setFrequency.bind(this)}>
            <Option>& every 3 months after</Option>
            <Option>& every 6 months after</Option>
            <Option>& every 9 months after</Option>
            <Option>& every 12 months after</Option>
          </Select>

          <OptionList style={{height: 150}} ref="OPTIONLIST"/>
        </View>
      </View>
    )
  }
}

export default ReminderEditor;
