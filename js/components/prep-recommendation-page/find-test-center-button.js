'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { popRoute, replaceOrPushRoute } from '../../actions/route';

import {Button} from 'native-base';
import styles from './styles';


class FindTestingCenterButton extends Component {

  navigateTo(route) {
      this.props.replaceOrPushRoute(route);
  }

  render() {
    let destination = this.props.destination;
    return (
      <Button block style={styles.findTestingCenterButton} textStyle={{color: '#eee'}}
      onPress={() => {
        this.navigateTo(destination)}
      }>
      {this.props.title}
      </Button>
    )
  }
}

function bindAction(dispatch) {
    return {
        replaceOrPushRoute:(route)=>dispatch(replaceOrPushRoute(route))
    }
}

export default connect(null, bindAction)(FindTestingCenterButton);
