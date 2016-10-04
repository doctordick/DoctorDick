'use strict';

import React, { Component } from 'react';

import {Switch, Linking} from 'react-native';

import {Container, Text, Content, View, Button, Card, CardItem } from 'native-base';

import styles from './styles';
import prepRecommendations from './prepRecommendations.js';
import FindTestingCenterButton from '../find-test-center-button';
import Collapsible from 'react-native-collapsible';
import { connect } from 'react-redux';


import { pushNewRoute } from '../../../actions/route';

class RecommendationCard extends Component {

    openLink(url) {
        Linking.openURL(url).catch(err => console.error('An error occurred', err));
    }

    pushNewRoute(route) {
        this.props.pushNewRoute(route);
    }

    render() {
      const {text, summary, findPrEP} = prepRecommendations[this.props.recommendationCode]
      return (
        <Card style={{width: 350, marginLeft: -5}}>
          <CardItem style={{backgroundColor: '#FFF', justifyContent:'center'}} header>
            <Text style={{color: '#517aa3', fontWeight: '300', fontWeight: '500'}}>PrEP RECS</Text>
          </CardItem>
          <CardItem style={{borderColor: '#e9e9e9'}}>
            <Text style={{color: '#696969', fontWeight: '300'}}>Based on your most recent answers, here are Doctor D's recommendations for you:</Text>
          </CardItem>
          <CardItem style={{borderColor: '#e9e9e9'}}>
            <Text style={{color:'#517aa3', alignSelf: 'center', fontWeight: '800', fontSize: 14}}>{summary}</Text>
          </CardItem>
          <CardItem style={{borderColor: '#e9e9e9'}}>
            <Text style={{color: '#696969',fontWeight: '300'}}>{text}</Text>
            <View>
            { findPrEP && <FindTestingCenterButton destination={'prepLocator'} title={'FIND PrEP SERVICES'} />}
            </View>
            <Button transparent textStyle={{color: '#0000EE', fontSize: 14}} style={{alignSelf: 'center'}} onPress={this.openLink.bind(this, 'http://www.cdc.gov/hiv/basics/prep.html')}>
                More Information About PrEP
            </Button>
          </CardItem>
          <CardItem style={{alignItems:'center'}}>
                <Text style={{fontSize: 14, marginBottom: 10}}>HAVE YOUR BEHAVIORS CHANGED?</Text>
                <Text style={{fontSize: 14, textAlign: 'center', color: '#696969',fontWeight: '300'}}>If your sexual activity has changed, you should <Text onPress={() => this.pushNewRoute('prepSurvey')} style={{fontSize: 13, color: '#0000EE', textDecorationLine: 'underline'}}>answer the PrEP questions again.</Text></Text>
          </CardItem>
        </Card>
      )
    }
}
function mapActionsToProps(dispatch) {
  return {
    pushNewRoute: (route) => dispatch(pushNewRoute(route))
  }
}

export default connect(null, mapActionsToProps)(RecommendationCard);
