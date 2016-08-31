'use strict';

import React, { Component } from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';

import { popRoute, replaceOrPushRoute } from '../../actions/route';


import {Container, Header, Title, Content, Text, Button, Icon, InputGroup, Input, View, Footer } from 'native-base';

import RecommendationCard from './recommendation-card';

import FooterComponent from './../footer';
import theme from '../../themes/base-theme';
import styles from './styles';

class RecommendationPage extends Component {

    popRoute() {
        this.props.popRoute();
    }
    navigateTo(route) {
        this.props.replaceOrPushRoute(route);
    }

    render() {
        return (
            <Container theme={theme} style={{backgroundColor:'#384850'}}>
                <Image source={require('../../../images/glow2.png')} style={styles.container} >
                    <Header>
                        <Button transparent onPress={() => this.popRoute()}>
                            <Icon name='ios-arrow-back' style={{fontSize: 30, lineHeight: 32}} />
                        </Button>

                        <Title>Recommendations</Title>
                    </Header>

                    <Content padder style={{backgroundColor: 'transparent'}}>
                        <View padder>
                            <Text>Based on your questionnaire answers, the CDC recommends:</Text>
                            <RecommendationCard />
                            <Button rounded block style={{backgroundColor: '#fff', marginTop: 20}} textStyle={{color: '#00c497'}}
                                onPress={() => {
                                    this.navigateTo('careLocator')}
                                }>
                                Find Test Centers
                            </Button>
                        </View>
                    </Content>
                </Image>
                <Footer>
                    <FooterComponent navigator={this.props.navigator} currentPage='recommendationPage' />
                </Footer>
            </Container>
        )
    }
}

function bindAction(dispatch) {
    return {
        popRoute: () => dispatch(popRoute()),
        replaceOrPushRoute:(route)=>dispatch(replaceOrPushRoute(route))
    }
}

export default connect(null, bindAction)(RecommendationPage);
