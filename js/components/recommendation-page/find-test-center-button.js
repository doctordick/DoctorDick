'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { popRoute, replaceOrPushRoute } from '../../actions/route';

import {Button} from 'native-base';


class FindTestingCenterButton extends Component {

  navigateTo(route) {
      this.props.replaceOrPushRoute(route);
  }

  render() {
    return (
      <Button rounded block style={{marginTop: 20, marginHorizontal: 10, marginBottom: 10}} textStyle={{color: '#eee'}}
      onPress={() => {
        this.navigateTo('careLocator')}
      }>
      Find Test Centers
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
