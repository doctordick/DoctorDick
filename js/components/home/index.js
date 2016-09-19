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

    renderView() {
        if(this.props.recommendations.HIV.RecommendationCode) {
            return (
                <View style={styles.content}>
                    <Image style={{height: 250, width: 250}} source={require('../../../images/doctor.png')}>
                    </Image>
                    <Text style={{ color:'#000', textAlign:'center', fontSize: 20, fontWeight: '500', marginBottom: 20}}>
                        How can Doctor D help you today?
                    </Text>
                    <View style={styles.buttonBlockLong}>
                        <Button block textStyle={{color: '#fff', fontWeight: '500', fontSize: 12}} style={styles.buttonLong} onPress={() => this.pushNewRoute('survey')}>
                            HOW CAN I PROTECT MYSELF?
                        </Button>
                    </View>
                    <View style={styles.buttonBlockLong}>
                        <Button success block textStyle={{color: '#fff', fontWeight: '500', fontSize: 12}} style={styles.buttonLong} onPress={() => this.pushNewRoute('remindersPage')}>
                            REMIND ME TO GET TESTED
                        </Button>
                    </View>
                    <View style={styles.buttonBlockLong}>
                        <Button block textStyle={{color: '#fff', fontWeight: '500', fontSize: 12}} style={styles.buttonLong} onPress={() => this.pushNewRoute('careLocator')}>
                            HELP ME FIND HIV TESTING LOCATIONS
                        </Button>
                    </View>
                </View>
            )
        } else {
            return (
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
            )
        }
    }

    render() {
        return (
            <Container theme={theme}>
                <Header style={styles.header}>
                    <Title style={{color: '#000'}}>HOME</Title>
                </Header>
                {this.renderView()}
                <Footer>
                    <FooterComponent navigator={this.props.navigator} currentPage='home' />
                </Footer>
            </Container>
        )
    }
}



function mapActionsToProps(dispatch){
    return {
        replaceRoute:(route)=>dispatch(replaceRoute(route)),
        pushNewRouteParams:(route, params)=>dispatch(pushNewRouteParams(route, params)),
        pushNewRoute:(route)=>dispatch(pushNewRoute(route)),
        popRoute: () => dispatch(popRoute())
    }
}

function mapStateToProps(state) {
  return {
    recommendations: state.recommendations
  }
}

export default connect(mapStateToProps, mapActionsToProps)(Home);
