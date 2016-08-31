'use strict';

import React, { Component } from 'react';

import {Switch} from 'react-native';

import {Text, View } from 'native-base';

import styles from './styles';

class RecommendationCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reminder: false,
        }
    }

    render() {
        return (
          <View padder style={styles.card}>
            <Text style={styles.title}>STD check every 3 - 6 months</Text>
            <View style={styles.reminderContainer}>
              <Text style={styles.reminderLabel}>Get reminder:</Text>
              <Switch style={styles.reminderSwitch}
                onValueChange={value => this.setState({reminder: value})}
                value={this.state.reminder}
              />
            </View>
          </View>
        )
    }
}

export default RecommendationCard;
