'use strict';

import React, { Component } from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';

import { openDrawer } from '../../actions/drawer';
import { popRoute } from '../../actions/route';

import { Container, Header, Title, Content, Text, Button, Icon, Card, CardItem, View } from 'native-base';

import theme from '../../themes/base-theme';
import styles from './styles';

class Compose extends Component {

    popRoute() {
        this.props.popRoute();
    }

    render() {
        return (
            <Container theme={theme} style={{backgroundColor: '#384850'}}>
                <Image source={require('../../../images/glow2.png')} style={styles.container} >
                    <Header>
                        <Button transparent onPress={() => this.popRoute()}>
                            <Icon name='ios-arrow-back' />
                        </Button>
                        
                        <Title>Compose</Title>
                        
                        <Button transparent onPress={this.props.openDrawer}>
                            <Icon name='ios-menu' />
                        </Button>
                    </Header>

                    <Content padder style={{backgroundColor: 'transparent'}}>
                        <View style={styles.box}>
                            <Card foregroundColor='#000'>
                                <CardItem header>
                                    <Text>Compose Mail</Text>
                                </CardItem>

                                <CardItem header>
                                    <Text>To : pratik@gmail.com</Text>
                                </CardItem>

                                <CardItem header>
                                    <Text>Subject: Enquiry about StrapUI</Text>
                                </CardItem>

                                <CardItem>
                                    <Text>
                                        I watched Leicester City lose in the 1969 FA Cup final with my dad and granddad when I was eight and cried all the way home. I have seen them get promoted and relegated. I played for them for eight years. I even got a group of like‑minded fans and friends to stump up a few quid to salvage the club when they went into liquidation.
                                    </Text>
                                </CardItem>

                                <CardItem header>
                                    <Button rounded style={{backgroundColor: '#00c497', paddingHorizontal: 15}} textStyle={{color: '#fff'}}>
                                        Send
                                    </Button>
                                </CardItem>
                            </Card>
                        </View>
                    </Content>
                </Image>
            </Container>
        )
    }
}

function bindAction(dispatch) {
    return {
        openDrawer: ()=>dispatch(openDrawer()),
        popRoute: () => dispatch(popRoute())
    }
}

export default connect(null, bindAction)(Compose);
