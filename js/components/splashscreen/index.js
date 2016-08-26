'use strict';

import React, { Component } from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';

export default class SplashPage extends Component {

    componentWillMount () {
        var navigator = this.props.navigator;
        setTimeout (() => {
            navigator.replace({
                id: 'login',
            });
        }, 1500);
    }
    
    render () {
        return (
            <Image source={require('../../../images/launchscreen.png')} style={{flex: 1, height: null, width: null}} />
        );
    }
}
