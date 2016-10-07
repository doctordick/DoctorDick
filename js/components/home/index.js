'use strict';

import React, { Component } from 'react';
import { Image, Platform, Linking } from 'react-native';
import { connect } from 'react-redux';
import { pushNewRoute, replaceRoute, popRoute, pushNewRouteParams } from '../../actions/route';
import { Container,
         Content,
         Text,
         Title,
         Button,
         Icon,
         textStyle,
         View,
         Footer } from 'native-base';
import FooterComponent from './../footer';
import theme from '../../themes/base-theme';
import styles from './styles';
import CustomHeader from '../custom-header'

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
                    <Text style={{ color:'#555', textAlign:'center', fontSize: 20, fontWeight: '300', marginBottom: 20}}>
                        How can Doctor D help you today?
                    </Text>
                    <View style={styles.buttonBlockLong}>
                        <Button block textStyle={{color: '#5cb85c', fontWeight: '600', fontSize: 12}} style={styles.buttonLong} onPress={() => this.pushNewRoute('prepSurvey')}>
                            IS PrEP RIGHT FOR ME?
                        </Button>
                    </View>
                    <View style={styles.buttonBlockLong}>
                        <Button block textStyle={{color: '#5cb85c', fontWeight: '600', fontSize: 12}} style={styles.buttonLong} onPress={() => this.pushNewRoute('survey')}>
                            SHOULD I GET AN HIV TEST?
                        </Button>
                    </View>
                    <View style={styles.buttonBlockLong}>
                        <Button block textStyle={{color: '#5cb85c', fontWeight: '600', fontSize: 12}} style={styles.buttonLong} onPress={() => this.pushNewRoute('remindersPage')}>
                            REMIND ME TO GET TESTED
                        </Button>
                    </View>
                    <View style={styles.buttonBlockLong}>
                        <Button block textStyle={{color: '#5cb85c', fontWeight: '600', fontSize: 12}} style={styles.buttonLong} onPress={() => this.pushNewRoute('findServices')}>
                            HELP ME FIND PrEP/HIV TESTING
                        </Button>
                    </View>
                </View>
            )
        } else {
            return (
                <View style={styles.content}>
                    <Text style={{ color:'#555', textAlign:'center', fontWeight: '300', paddingLeft: 30, paddingRight: 30}}>
                        Getting started is easy!
                        {"\n\n"}
                        First, answer a few questions so Doctor D can make recommendations about HIV testing for you.
                    </Text>
                    <View style={styles.buttonBlock}>
                        <Button rounded textStyle={{color: '#fff', fontSize: 12, fontWeight: '500'}} style={styles.button} onPress={() => this.pushNewRoute('survey')}>
                            LETS GO
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
                <View>
                    <CustomHeader title={"HOME"} showBackButton={false} />
                    {this.renderView()}
                    <Footer>
                        <FooterComponent navigator={this.props.navigator} currentPage='home' />
                    </Footer>
                </View>
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
