'use strict';

import React, { Component } from 'react';
import { WebView } from 'react-native';
import { connect } from 'react-redux';
import { Container, View } from 'native-base';
import theme from '../../themes/base-theme';
import CustomHeader from '../custom-header';

export default class PrepLocator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            url: 'https://preplocator.org/prep-widget/'
        };
    }

    render() {
        return (
            <Container theme={theme}>
                <View>
                    <CustomHeader title={'PrEP LOCATOR'} showBackButton={true}/>
                    <WebView
                        source={{uri: this.state.url}}
                        scalesPageToFit={true}
                    />
                </View>
            </Container>
        )
    }
}
