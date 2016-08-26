'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Content, Text, List, ListItem, Thumbnail} from 'native-base';

import theme from '../../themes/base-theme';
import styles from './styles';

class Recent extends Component {

    render() {
        return (
            <Content style={{backgroundColor: 'transparent'}}>
                <List>
                    <ListItem>
                        <Thumbnail circular size={50} source={require('../../../images/contacts/sanket.png')} />
                        <Text>Kumar Sanket</Text>
                        <Text note>8861522489</Text>
                    </ListItem>
                    <ListItem>
                        <Thumbnail circular size={50} source={require('../../../images/contacts/pratik.png')} />
                        <Text>Kumar Pratik</Text>
                        <Text note>8861522489</Text>
                    </ListItem>
                </List>
            </Content>
        )
    }
}

function bindAction(dispatch) {
    return {

    }
}

export default connect(null, bindAction)(Recent);
