'use strict';

import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { connect } from 'react-redux';

import { openDrawer } from '../../actions/drawer';
import { popRoute, replaceRoute } from '../../actions/route';

import { Container, Header, Title, Text, Icon, Button, Footer } from 'native-base';
import FooterComponent from './../footer';

import theme from '../../themes/base-theme';
import styles from './styles';

class Shop extends Component {

    constructor(props) {
        super(props);
    }

    replaceRoute(route) {
        this.props.replaceRoute(route);
    }

    popRoute() {
        this.props.popRoute();
    }

    render() {
        return (
            <Container theme={theme} style={{backgroundColor: '#384850'}}>
                <Header style={{ backgroundColor: '#800080'}} >
                    <Button transparent onPress={() => this.popRoute()}>
                        <Icon name='ios-arrow-back' style={{fontSize: 30, lineHeight: 32}} />
                    </Button>
                    <Title>Doctor Dick's Store</Title>
                </Header>
                <View style={styles.container}>
                    <Icon style={{fontSize: 200}} name='ios-cart-outline' />
                    <Text style={{fontSize: 22, fontWeight: 'bold'}}>Coming Soon...</Text>
                </View>
                <Footer style={{ backgroundColor: '#800080' }}>
                    <FooterComponent navigator={this.props.navigator} />
                </Footer>
            </Container>
        )
    }
}

function bindAction(dispatch) {
    return {
        openDrawer: ()=>dispatch(openDrawer()),
        popRoute: () => dispatch(popRoute()),
        replaceRoute:(route)=>dispatch(replaceRoute(route))
    }
}

export default connect(null, bindAction)(Shop);
