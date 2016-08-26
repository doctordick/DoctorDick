'use strict';

import React, { Component } from 'react';
import { Image, View, Dimensions } from 'react-native';
import { connect } from 'react-redux';

import { openDrawer } from '../../actions/drawer';
import { popRoute } from '../../actions/route';

import { Container, Header, Title, Content, Text, Button, Icon } from 'native-base';
import Messenger from 'react-native-gifted-messenger';

import theme from '../../themes/base-theme';
import styles from './styles';

class Chat extends Component {

    getMessages() {
        return [
            {text: 'Hi... I am Pratik', name: 'Pratik', image: require('../../../images/contacts/pratik.png'), position: 'left', date: new Date(2015, 1, 3, 19, 0)},
            {text: "Hello..... Sanket here...", name: 'Sanket', image: require('../../../images/contacts/sanket.png'), position: 'right', date: new Date(2015, 1, 3, 19, 0)},
        ];
    }
    handleSend(message = {}, rowID = null) {
        // Send message.text to your server
    }
    handleReceive() {
        this._GiftedMessenger.appendMessage({
            text: 'Received message',
            name: 'Pratik',
            image: require('../../../images/contacts/pratik.png'),
            position: 'left',
            date: new Date(),
        });
    }

    popRoute() {
        this.props.popRoute();
    }

    render() {
        return (
            <Container theme={theme} style={{backgroundColor: '#384850'}}>
                <Image source={require('../../../images/glow2.png')} style={styles.container} >
                    <Header>
                        <Button transparent onPress={() => this.popRoute()}>
                            <Icon name="ios-arrow-back" />
                        </Button>
                        
                        <Title>Chat</Title>
                        
                        <Button transparent onPress={this.props.openDrawer}>
                            <Icon name="ios-menu" />
                        </Button>
                    </Header>

                    <Content padder style={{backgroundColor: 'transparent'}}>
                        <Messenger
                            enableEmptySections={true}
                            ref={(c) => this._Messenger = c}
                            messages={this.getMessages()}
                            handleSend={this.handleSend}
                            maxHeight={Dimensions.get('window').height - 144}
                            styles={{
                                bubbleLeft: {
                                backgroundColor: '#e6e6eb',
                                marginRight: 70,
                                },
                                bubbleRight: {
                                    backgroundColor: '#00c497',
                                    marginLeft: 70,
                                },
                            }}
                        />
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

export default connect(null, bindAction)(Chat);
