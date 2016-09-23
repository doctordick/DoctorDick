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
import CustomHeader from '../custom-header';

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
                <View>
                    <CustomHeader title={'SHARE FEEDBACK'} showBackButton={true}/>
                    <View style={styles.question}>
                        <Text style={styles.questionText}>
                            Please tell us how we can improve Doctor D to benefit you and the gay community even more!
                        </Text>
                        <Button rounded style={styles.buttonBlock} onPress={this.openLink.bind(this, 'https://goo.gl/forms/iV5gbDpXfAts2axR2')}>
                            <Text style={{fontSize: 13, fontWeight: '300', color: '#517aa3'}}>
                                SHARE FEEDBACK
                            </Text>
                        </Button>
                    </View>
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
