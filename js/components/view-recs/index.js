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
         Footer,
         View } from 'native-base';
import theme from '../../themes/base-theme';
import styles from './styles';
import CustomHeader from '../custom-header';
import FooterComponent from './../footer';


class ViewRecs extends Component {

    pushNewRoute(route) {
        this.props.pushNewRoute(route);
    }

    render() {
        const recommendations = this.props.recommendations;
        return (
            <Container theme={theme}>
                <View>
                    <CustomHeader title={'MY RECOMMENDATIONS'} showBackButton={false} />
                    <Text style={styles.questionText}>
                        I'd like to view my...
                    </Text>
                    <Button block textStyle={{fontWeight: 'bold', fontSize: 12, color: '#517aa3'}} style={[styles.buttonBlock, {marginTop: 30}]} onPress={() => this.pushNewRoute('recommendationPage')}>
                        HIV TESTING RECS
                    </Button>
                    {recommendations.PrEP.RecommendationCode && <Button block textStyle={{fontWeight: 'bold', fontSize: 12, color: '#517aa3'}} style={styles.buttonBlock} onPress={() => this.pushNewRoute('prepRecommendationPage')} >
                        PrEP RECS
                    </Button>}
                </View>
                <Footer>
                    <FooterComponent navigator={this.props.navigator} currentPage='viewRecs' />
                </Footer>
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
function mapStateToProps(state) {
  return {
    recommendations: state.recommendations
  }
}

export default connect(mapStateToProps, bindActions )(ViewRecs);
