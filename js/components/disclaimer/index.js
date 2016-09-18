'use strict';

import React, { Component } from 'react';
import { Image, Platform } from 'react-native';
import { connect } from 'react-redux';
import { pushNewRoute, replaceRoute, popRoute } from '../../actions/route';
import { Container,
         Content,
         Text,
         Header,
         Title,
         Button,
         Icon,
         View } from 'native-base';
import theme from '../../themes/base-theme';
import styles from './styles';

class Disclaimer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            swipeToClose: true,
            selected: false
        };
    }

    popRoute() {
        this.props.popRoute();
    }

    replaceRoute(route) {
        this.props.replaceRoute(route);
    }

    pushNewRoute(route) {
         this.props.pushNewRoute(route);
    }

    render() {
        return (
            <Container theme={theme}>
                <Header style={styles.header}>
                    <Button transparent onPress={() => this.popRoute()}>
                        <Icon name='ios-arrow-back' style={{color: '#000', fontSize: 30, lineHeight: 32}} />
                    </Button>
                    <Title style={{color: '#000'}}>Disclaimer</Title>
                </Header>
                <View style={styles.question}>
                    <Text style={styles.questionText}>
                        Doctor Dick is meant only for people who are not having any current symptoms of a sexually transmitted disease, HIV infection, or any other illness.
                    </Text>
                    <Text style={styles.questionText}>
                        If you're currently experiencing symptoms of a sexually transmitted disease, HIV infection, or any other illness, including rash, sores on skin or in mouth, anal, or genital area, fever, chills, discharge from penis, pain with urination, rectal pain or discharge, you should contact your doctor or other healthcare provider for help with your symptoms. If you are having a medical or psychiatric emergency, call 911 or go to the nearest emergency room.
                    </Text>
                    <Button block style={styles.buttonBlock} onPress={() => this.pushNewRoute('home')}>
                        <Text>
                            I Agree
                        </Text>
                    </Button>
                </View>
            </Container>
        )
    }
}



function bindActions(dispatch){
    return {
        replaceRoute:(route)=>dispatch(replaceRoute(route)),
        pushNewRoute:(route)=>dispatch(pushNewRoute(route)),
        popRoute: () => dispatch(popRoute())
    }
}

export default connect(null, bindActions)(Disclaimer);
