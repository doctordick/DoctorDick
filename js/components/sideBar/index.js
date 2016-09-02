'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { closeDrawer } from '../../actions/drawer';
import { pushNewRoute } from '../../actions/route';

import { View, Button, Title, Header, Text, Icon, List, ListItem, Content, Thumbnail, Badge } from 'native-base';

import styles from './styles';
import Modal from 'react-native-modalbox';
import Privacy from '../privacy';

class SideBar extends Component {

    navigateTo(route) {
        this.props.closeDrawer();
        this.props.pushNewRoute(route);
    }

    openLegalsModal() {
        this.refs.legalsModal.open()
    }
    closeLegalsModal() {
        this.refs.legalsModal.close()
    }

    render(){
        return (
            <Content style={{backgroundColor: '#363d46'}} >
                <Thumbnail size={150} square style={{alignSelf: 'center', marginTop: 50, marginBottom: 15, resizeMode: 'contain'}} source={require('../../../images/banana.png')} />
                <List  foregroundColor={'white'} >
                    <ListItem button onPress={() => this.navigateTo('faq')} iconLeft style={styles.links} >
                        <Icon name='ios-help' />
                        <Text >FAQ</Text>
                    </ListItem>
                    <ListItem button onPress={this.openLegalsModal.bind(this)} iconLeft style={styles.links} >
                        <Icon name='ios-paper-outline' />
                        <Text>Legals</Text>
                    </ListItem>
                </List>
                 <Modal navigator={this.props.navigator} style={[styles.modal, styles.legalsModal]} backdrop={false} ref={'legalsModal'}  swipeToClose={false} >
                     <Header style={styles.modalHeader}>
                        <Button transparent onPress={this.closeLegalsModal.bind(this)}>
                            <Icon name="ios-arrow-back" style={{fontSize: 30, lineHeight: 32, color: '#000'}} />
                        </Button>

                        <Title style={styles.modalHeaderTitle}>Legals</Title>
                    </Header>
                    <Privacy />
                </Modal>
            </Content>
        );
    }
}

function bindAction(dispatch) {
    return {
        closeDrawer: ()=>dispatch(closeDrawer()),
        pushNewRoute:(route)=>dispatch(pushNewRoute(route))
    }
}

export default connect(null, bindAction)(SideBar);
