'use strict';

import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { connect } from 'react-redux';

import { openDrawer } from '../../actions/drawer';
import { popRoute } from '../../actions/route';

import { Container, Header, Title, Content, Text, Button, Icon, List, ListItem, Card, CardItem, InputGroup, Input } from 'native-base';

import theme from './form-theme';
import styles from './styles';

class Form extends Component {

    popRoute() {
        this.props.popRoute();
    }

    render() {
        return (
            <Container theme={theme} style={{backgroundColor: '#384850'}} >
                <Image source={require('../../../images/glow2.png')} style={styles.container} >
                    <Header>
                        <Button transparent onPress={() => this.popRoute()}>
                            <Icon name='ios-arrow-back' style={{fontSize: 30, lineHeight: 32}} />
                        </Button>

                        <Title>Form</Title>

                        <Button transparent onPress={this.props.openDrawer}>
                            <Icon name='ios-menu' style={{fontSize: 30, lineHeight: 32}} />
                        </Button>
                    </Header>

                    <Content padder style={{backgroundColor: 'transparent'}} >
                        <Card transparent foregroundColor="#000">
                            <CardItem header>
                                <Text>Input with icon</Text>
                            </CardItem>
                            <CardItem>
                                <InputGroup style={{borderColor: '#d5d5d5'}}>
                                    <Icon name="ios-person" style={{color: '#000'}} />
                                    <Input placeholder="EMAIL" placeholderTextColor="#878787" style={{color: '#000'}} />
                                </InputGroup>
                            </CardItem>
                            <CardItem header>
                                <Text>Input</Text>
                            </CardItem>
                            <CardItem>
                                <InputGroup style={{borderColor: '#d5d5d5'}}>
                                    <Input placeholder="Name" placeholderTextColor="#878787" style={{color: '#000'}} />
                                </InputGroup>
                            </CardItem>
                            <CardItem header>
                                <Text>Input with inline label</Text>
                            </CardItem>
                            <CardItem >
                                <List>
                                    <ListItem style={{marginLeft: 0}}>
                                        <InputGroup >
                                            <Input inlineLabel label="ALIAS" placeholder="John Doe" style={{color: '#000'}}/>
                                        </InputGroup>
                                    </ListItem>
                                </List>
                            </CardItem>
                            <CardItem header>
                                <Text>Input with stacked label</Text>
                            </CardItem>
                            <CardItem>
                                <List>
                                    <ListItem style={{marginLeft: 0, borderColor: '#d5d5d5'}}>
                                        <InputGroup >
                                            <Input stackedLabel label="Address Line 1" placeholder="Address" style={{color: '#000'}} />
                                        </InputGroup>
                                    </ListItem>
                                </List>
                            </CardItem>
                        </Card>
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

export default connect(null, bindAction)(Form);
