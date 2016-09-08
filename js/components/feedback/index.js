'use strict';

import React, { Component } from 'react';
import { Linking } from 'react-native';
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

class Feedback extends Component {

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

    pushNewRoute(route) {
        let context = this;
        setTimeout(() => context.props.pushNewRoute(route), 0);
    }

    openLink(url) {
        Linking.openURL(url).catch(err => console.error('An error occurred', err));
    }

    render() {
        return (
            <Container theme={theme}>
                <Header style={styles.header}>
                    <Button transparent onPress={() => this.popRoute()}>
                        <Icon name='ios-arrow-back' style={{color: '#000', fontSize: 30, lineHeight: 32}} />
                    </Button>
                    <Title style={{color: '#000'}}>Share Your Feedback</Title>
                </Header>
                <View style={styles.question}>
                    <Text style={styles.questionText}>
                        Please tell us how we can improve Doctor Dick to benefit you and the gay community even more!
                    </Text>
                    <Button block style={styles.buttonBlock} onPress={this.openLink.bind(this, 'https://goo.gl/forms/iV5gbDpXfAts2axR2')}>
                        <Text>
                            Share Feedback
                        </Text>
                    </Button>
                </View>
            </Container>
        )
    }
}



function bindActions(dispatch){
    return {
        pushNewRoute:(route)=>dispatch(pushNewRoute(route)),
        popRoute: () => dispatch(popRoute())
    }
}

export default connect(null, bindActions)(Feedback);
