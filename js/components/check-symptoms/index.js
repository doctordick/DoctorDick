'use strict';

import React, { Component } from 'react';
import { Image, Platform } from 'react-native';
import { connect } from 'react-redux';
import { pushNewRoute, replaceRoute, popRoute, replaceOrPushRoute } from '../../actions/route';
// import {  } from '../../actions/route';
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

class CheckSymptoms extends Component {

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
    navigateTo(route) {
        // this.props.closeDrawer(); 
        this.props.pushNewRoute(route);
    }
    render() {
        return (
            <Container theme={theme}>
                <Header style={{backgroundColor: '#800080'}}>
                    <Button transparent onPress={() => this.popRoute()}>
                        <Icon name='ios-arrow-back' style={{fontSize: 30, lineHeight: 32}} />
                    </Button>
                    <Title></Title>
                </Header>
                <View style={styles.question}>
                    <Text style={styles.questionText}>
                        Are you currently experiencing symptoms of a sexually transmitted disease, HIV infection, or any other illness, including rash, sores on skin or in mouth, anal, or genital area, fever, chills, discharge from penis, pain with urination, rectal pain or discharge?
                    </Text>
                    <Button block style={{backgroundColor: '#800080', marginBottom: 20, marginTop: 20, paddingBottom:10, borderRadius: 0 }} onPress={() => this.navigateTo('dashboard')}>
                        <Text>
                            No, I'm not.
                        </Text>
                    </Button>
                    <Button block style={{backgroundColor: '#800080', marginBottom: 20, paddingBottom:10, borderRadius: 0 }} onPress={() => this.navigateTo('emergency')}>
                        <Text>
                            Yes, I am.
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
        popRoute: () => dispatch(popRoute()),
        replaceOrPushRoute:(route)=>dispatch(replaceOrPushRoute(route))
    }
}

export default connect(null, bindActions)(CheckSymptoms);
