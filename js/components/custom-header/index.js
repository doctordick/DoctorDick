'use strict';

import React, { Component } from 'react';
import { View, Header, Button, Title, Icon } from 'native-base';
import { popRoute } from '../../actions/route';
import { connect } from 'react-redux';

class CustomHeader extends Component {
    popRoute() {
        this.props.popRoute();
    }

    renderBackButton () {
        if(this.props.showBackButton) {
            return (
                <Header>
                    <Button transparent onPress={() => this.popRoute()}>
                        <Icon name='ios-arrow-back' style={{fontSize: 30, lineHeight: 32}} />
                    </Button>
                    <Title style={{paddingTop: 10}}>{ this.props.title }</Title>
                </Header>
            )
        } else {
            return (
                <Header>
                <Title style={{paddingTop: 10}}>{ this.props.title }</Title>
            </Header>
            )
        }
    }

    render() {
        return (
        <View style={{flex: 0}}>
            { this.renderBackButton() }
        </View>
        )
    }
}

function mapActionsToProps(dispatch){
    return {
        popRoute: () => dispatch(popRoute())
    }
}

export default connect(null, mapActionsToProps)(CustomHeader);