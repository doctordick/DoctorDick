'use strict';

import React, { Component } from 'react';
import { Image, Platform, Linking } from 'react-native';
import { connect } from 'react-redux';
import { pushNewRoute, replaceRoute, popRoute, pushNewRouteParams } from '../../actions/route';
import { Container,
         Content,
         Text,
         Header,
         Title,
         Button,
         Icon,
         textStyle,
         View,
         Footer } from 'native-base';
import FooterComponent from './../footer';
import theme from '../../themes/base-theme';
import styles from './styles';

class Home extends Component {

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

    pushNewRouteParams(route, params) {
         this.props.pushNewRouteParams(route, params);
    }

    render() {
        return (
            <Container theme={theme}>
                <Header style={styles.header}>
                    <Title style={{color: '#000'}}>Home</Title>
                </Header>
                <View style={styles.content}>
                    <Text style={{ color:'#000', textAlign:'center'}}>
                        Getting started is easy!
                        {"\n\n"}
                        First, take a quick survey so Doctor D can make recommendations about HIV survey for you.
                    </Text>
                    <View style={styles.buttonBlock}>
                        <Button rounded textStyle={{color: '#fff', fontWeight: '500'}} style={styles.button} onPress={() => this.pushNewRoute('survey')}>
                            Take Survey
                        </Button>
                    </View>
                    <Text style={styles.linkText} onPress={() => this.pushNewRouteParams('survey', { question: 4 })}>
                        Or tap here if you're HIV-positive
                    </Text>
                </View>
                <Footer>
                    <FooterComponent navigator={this.props.navigator} currentPage='home' />
                </Footer>
            </Container>
        )
    }
}



function bindActions(dispatch){
    return {
        replaceRoute:(route)=>dispatch(replaceRoute(route)),
        pushNewRouteParams:(route, params)=>dispatch(pushNewRouteParams(route, params)),
        pushNewRoute:(route)=>dispatch(pushNewRoute(route)),
        popRoute: () => dispatch(popRoute())
    }
}

export default connect(null, bindActions)(Home);
