'use strict';

import React, { Component } from 'react';
import { Image, Platform } from 'react-native';
import { connect } from 'react-redux';
import { pushNewRoute, replaceRoute, popRoute } from '../../actions/route';
import { Container,
         Content,
         Text,
         Title,
         Button,
         Icon,
         View } from 'native-base';
import theme from '../../themes/base-theme';
import styles from './styles';
import CustomHeader from '../custom-header'

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
                <View>
                    <CustomHeader title={"DISCLAIMER"} showBackButton={true} />
                    <View style={styles.question}>
                        <Text style={styles.questionText}>
                            Doctor D is meant only for people who are not having any current symptoms of a sexually transmitted disease, HIV infection, or any other illness. If you're currently experiencing symptoms of a sexually transmitted disease, HIV infection, or any other illness, including rash, sores on skin or in mouth, anal, or genital area, fever, chills, discharge from penis, pain with urination, rectal pain or discharge, you should contact your doctor or other healthcare provider for help with your symptoms. If you are having a medical or psychiatric emergency, call 911 or go to the nearest emergency room.
                        </Text>
                        <View style={{ flex: 0, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                        <Button rounded textStyle={{ color: '#fff', fontSize: 12, fontWeight: '600' }} style={styles.buttonBlock} onPress={() => this.pushNewRoute('home')}>
                            I AGREE
                        </Button>
                        </View>
                    </View>
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
