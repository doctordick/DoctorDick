'use strict';

import React, { Component } from 'react';
import { Image, NativeAppEventEmitter } from 'react-native';
import { connect } from 'react-redux';

import { popRoute, replaceOrPushRoute, pushNewRoute } from '../../actions/route';
import { toggleReminder, setReminderDate, createNewIOSReminder } from '../../actions/recommendations';


import {Container, Title, Content, Text, Button, Icon, InputGroup, Input, View, Footer, Card, CardItem } from 'native-base';

import RecommendationCard from './recommendation-card';

import FooterComponent from './../footer';
import theme from '../../themes/base-theme';
import styles from './styles';

import CustomHeader from '../custom-header';

class RecommendationPage extends Component {
    popRoute() {
        this.props.popRoute();
    }
    navigateTo(route) {
        this.props.replaceOrPushRoute(route);
    }
    pushNewRoute(route) {
         this.props.pushNewRoute(route);
    }

    render() {
        const recommendations = this.props.recommendations;
        return (
            <Container theme={theme} style={styles.container} >
                <Image source={require('../../../images/glow2.png')} style={styles.container} >
                    <CustomHeader title={"HIV RECOMMENDATIONS"} showBackButton={true} />
                    <Content padder>
                        {recommendations.HIV.RecommendationCode &&
                        <View padder>
                            <RecommendationCard
                              recommendationFor={'HIV'}
                              recommendationCode={recommendations.HIV.RecommendationCode}
                            />
                        </View>}
                    </Content>
                </Image>
                <Footer>
                    <FooterComponent navigator={this.props.navigator} currentPage='recommendationPage' />
                </Footer>
            </Container>
        )
    }
}

function mapActionsToProps(dispatch) {
    return {
        popRoute: () => dispatch(popRoute()),
        pushNewRoute: (route) => dispatch(pushNewRoute(route)),
        replaceOrPushRoute: (route) => dispatch(replaceOrPushRoute(route)),
        setReminderDate: (date, questionnaireType) => dispatch(setReminderDate(date, questionnaireType)),
        createNewIOSReminder: (reminderID, questionnaireType) => dispatch(createNewIOSReminder(reminderID, questionnaireType)),
    }
}

function mapStateToProps(state) {
  return {
    recommendations: state.recommendations
  }
}

export default connect(mapStateToProps, mapActionsToProps)(RecommendationPage);
