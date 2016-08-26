'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Content, Text, List, ListItem, Thumbnail} from 'native-base';

import theme from '../../themes/base-theme';
import styles from './styles';

class AllContacts extends Component {

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
                    <ListItem>
                        <Thumbnail circular size={50} source={require('../../../images/contacts/megha.png')} />
                        <Text>Megha Kumari</Text>
                        <Text note>8861522489</Text>
                    </ListItem>
                    <ListItem>
                        <Thumbnail circular size={50} source={require('../../../images/contacts/varun.png')} />
                        <Text>Varun Sahu</Text>
                        <Text note>8861522489</Text>
                    </ListItem>
                    <ListItem>
                        <Thumbnail circular size={50} source={require('../../../images/contacts/atul.png')} />
                        <Text>Atul Ranjan</Text>
                        <Text note>8861522489</Text>
                    </ListItem>
                    <ListItem>
                        <Thumbnail circular size={50} source={require('../../../images/contacts/saurav.png')} />
                        <Text>Saurabh Sahu</Text>
                        <Text note>8861522489</Text>
                    </ListItem>
                    <ListItem>
                        <Thumbnail circular size={50} source={require('../../../images/contacts/sankha.png')} />
                        <Text>Sankhadeep Roy</Text>
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

export default connect(null, bindAction)(AllContacts);
