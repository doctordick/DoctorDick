'use strict';

import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { connect } from 'react-redux';

import { openDrawer } from '../../actions/drawer';
import { popRoute, replaceRoute } from '../../actions/route';

import { Container, Header, Title, Content, Button, Icon, List, ListItem, Text, Footer } from 'native-base';
import FooterComponent from './../footer';

import theme from '../../themes/base-theme';
import styles from './styles';

class Home extends Component {

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
                <Image source={require('../../../images/glow2.png')} style={styles.container} >
                    <Header>
                        <Button transparent> </Button>

                        <Title>Home</Title>

                        <Button transparent onPress={this.props.openDrawer} >
                            <Icon name='ios-menu' style={{fontSize: 30, lineHeight: 32}} />
                        </Button>
                    </Header>

                    <Content padder style={{backgroundColor: 'transparent'}}>
                        <List>
                            <ListItem iconLeft >
                                <Icon name='ios-megaphone'/>
                                <Text>Discussion With Client</Text>
                                <Text style={{fontWeight: '400'}} note>8:00 AM</Text>
                            </ListItem>
                            <ListItem iconLeft >
                                <Icon name='ios-people'/>
                                <Text >Daily Stand Up</Text>
                                <Text style={{fontWeight: '400'}} note>10:00 AM</Text>
                            </ListItem>
                            <ListItem iconLeft >
                                <Icon name='ios-flag'/>
                                <Text>Finish list Screen</Text>
                                <Text style={{fontWeight: '400'}} note>By 2:00 PM</Text>
                            </ListItem>
                            <ListItem iconLeft >
                                <Icon name='ios-restaurant'/>
                                <Text>Lunch Break</Text>
                                <Text style={{fontWeight: '400'}} note>2:00 PM</Text>
                            </ListItem>
                        </List>

                        <Button transparent large style={styles.roundedButton} onPress={() => this.replaceRoute('login')}>
                            <Icon name='ios-close-outline' />
                        </Button>
                    </Content>

                    <Footer >
                        <FooterComponent navigator={this.props.navigator} />
                    </Footer>
                </Image>
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

export default connect(null, bindAction)(Home);
