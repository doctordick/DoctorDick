'use strict';

import React, { Component } from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';

import { openDrawer } from '../../actions/drawer';
import { popRoute } from '../../actions/route';

import {Container, Header, Title, Content, Text, Button, Icon, InputGroup, Input, View, List, ListItem } from 'native-base';

import theme from '../../themes/base-theme';
import styles from './styles';

class CareLocator extends Component {

    popRoute() {
        this.props.popRoute();
    }

    render() {
        return (
            <Container theme={theme} style={{backgroundColor:'#384850'}}>
                <Header>
                    <Button transparent onPress={() => this.popRoute()}>
                        <Icon name='ios-arrow-back' style={{fontSize: 30, lineHeight: 32}} />
                    </Button>

                    <Title>Testing Centers</Title>

                    <Button transparent onPress={this.props.openDrawer}>
                        <Icon name='ios-menu' style={{fontSize: 30, lineHeight: 32}} />
                    </Button>
                </Header>

                <Content style={{backgroundColor: 'transparent'}}>
                    <List>
                        <ListItem iconLeft>
                            <Icon name='ios-people'/>
                            <Text >Daily Stand Up</Text>
                            <Text style={{fontWeight: '400'}} note>10:00 AM</Text>
                        </ListItem>
                        <ListItem iconLeft>
                            <Icon name='ios-flag'/>
                            <Text>Finish list Screen</Text>
                            <Text style={{fontWeight: '400'}} note>By 2:00 PM</Text>
                        </ListItem>
                        <ListItem iconLeft>
                            <Icon name='ios-restaurant'/>
                            <Text>Lunch Break</Text>
                            <Text style={{fontWeight: '400'}} note>2:00 PM</Text>
                        </ListItem>
                        <ListItem iconLeft>
                          <Icon name='ios-megaphone'/>
                            <Text>Discussion With Client</Text>
                            <Text style={{fontWeight: '400'}} note>6:00 PM</Text>
                        </ListItem>
                    </List>
                </Content>
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

export default connect(null, bindAction)(CareLocator);
