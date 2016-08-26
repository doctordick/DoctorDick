'use strict';

import React, { Component } from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';

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
                <List>
                    <ListItem iconLeft>
                      
                      <Text >Daily Stand Up</Text>
                      <Text style={{fontWeight: '400'}} note>10:00 AM</Text>
                    </ListItem>
                    <ListItem iconLeft>
                    
                      <Text >Daily Stand Up</Text>
                      <Text style={{fontWeight: '400'}} note>10:00 AM</Text>
                    </ListItem>
                </List>
            </Container>
        )
    }
}

function bindAction(dispatch) {
    return {
        popRoute: () => dispatch(popRoute())
    }
}

export default connect(null, bindAction)(CareLocator);
