'use strict';

import React, { Component } from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';

import { popRoute, replaceOrPushRoute, pushNewRoute } from '../../actions/route';


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
    pushNewRoute(route) {
         this.props.pushNewRoute(route);
    }

    render() {
        const recommendations = this.props.recommendations;
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
                        {recommendations.HIV.RecommendationCode &&
                        <View padder>
                            <Text>Based on your questionnaire answers, the CDC recommends:</Text>
                             <RecommendationCard recommendationCode={recommendations.HIV.RecommendationCode}/>
                        </View>}
                        <View padder>
                          <Text>
                            Here is the medical history you have not filled out yet:
                          </Text>
                          {Object.keys(recommendations)
                            .filter(key => !recommendations[key].RecommendationCode)
                            .map(key => (
                              key === 'HIV' ? 
                                <Button rounded block onPress={() => this.pushNewRoute('survey')} style={{marginTop: 20, marginHorizontal: 10, marginBottom: 10}} textStyle={{color: '#eee'}} key={key}>{key}</Button>
                              : <Button disabled rounded block style={{marginTop: 20, marginHorizontal: 10, marginBottom: 10}} textStyle={{color: '#eee'}} key={key}>{key+' - Coming Soon...'}</Button>  
                            ))
                          }
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
        pushNewRoute:(route)=>dispatch(pushNewRoute(route)),
        replaceOrPushRoute:(route)=>dispatch(replaceOrPushRoute(route))
    }
}

function mapStateToProps(state) {
  return {
    recommendations: state.recommendations
  }
}

export default connect(mapStateToProps, bindAction)(RecommendationPage);
