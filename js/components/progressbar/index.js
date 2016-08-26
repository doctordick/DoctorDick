'use strict';

import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { connect } from 'react-redux';

import { openDrawer } from '../../actions/drawer';
import { popRoute } from '../../actions/route';


import { Container, Header, Title, Content, Text, Button, Icon, List, ListItem, Card, CardItem } from 'native-base';
import ProgressBar from './../loaders/ProgressBar';

import theme from '../../themes/base-theme';
import styles from './styles';

class ProgressBarNSP extends Component {

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

                        <Title>ProgressBar</Title>

                        <Button transparent onPress={this.props.openDrawer}>
                            <Icon name='ios-menu' style={{fontSize: 30, lineHeight: 32}} />
                        </Button>
                    </Header>

                    <Content padder style={{backgroundColor: 'transparent'}} >
                        <Card transparent foregroundColor='#000'>
                            <CardItem header>
                                <Text>Default ProgressBar</Text>
                            </CardItem>
                            <CardItem>
                                <List>
                                    <ListItem style={{borderBottomWidth: 0}}>
                                        <ProgressBar progress={25} />
                                    </ListItem>
                                </List>
                            </CardItem>
                            <CardItem header>
                                <Text>Inverse ProgressBar</Text>
                            </CardItem>
                            <CardItem>
                                <List>
                                    <ListItem style={{borderBottomWidth: 0}}>
                                        <ProgressBar inverse progress={76} />
                                    </ListItem>
                                </List>
                            </CardItem>
                            <CardItem header>
                                <Text>Custom ProgressBar</Text>
                            </CardItem>
                            <CardItem>
                                <List>
                                    <ListItem style={{borderBottomWidth: 0}}>
                                        <ProgressBar color='#00ff03' progress={39} />
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

export default connect(null, bindAction)(ProgressBarNSP);
