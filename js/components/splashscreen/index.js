'use strict';

import React, { Component } from 'react';
import { Image, View, Text } from 'react-native';
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
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Image source={require('../../../images/banana.png')} style={{height: 150, width: 150}} />
                <Text>
                    Doctor Dick
                </Text>
            </View>
        );
    }
}
