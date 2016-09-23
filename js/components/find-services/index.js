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


class FindServices extends Component {

    pushNewRoute(route) {
        this.props.pushNewRoute(route);
    }


    render() {
        return (
            <Container theme={theme}>
                <View>
                    <CustomHeader title={'FIND SERVICES'} showBackButton={true} />
                    <Text style={styles.questionText}>
                        I'm looking for...
                    </Text>
                    <Button block textStyle={{fontWeight: 'bold', fontSize: 12, color: '#517aa3'}} style={[styles.buttonBlock, {marginTop: 30}]} onPress={() => this.pushNewRoute('careLocator')}>
                        HIV TESTING
                    </Button>
                    <Button block textStyle={{fontWeight: 'bold', fontSize: 12, color: '#517aa3'}} style={styles.buttonBlock} onPress={() => this.pushNewRoute('prepLocator')} >
                        PrEP SERVICES
                    </Button>
                </View>
                <Footer>
                    <FooterComponent navigator={this.props.navigator} currentPage='findServices' />
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

export default connect(null, bindActions)(FindServices);
