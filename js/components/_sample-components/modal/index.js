
'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Image, View } from 'react-native';

import {openDrawer} from '../../actions/drawer';
import {popRoute} from '../../actions/route';

import {Container, Header, Title, Content, Text, Button, Icon, List, ListItem} from 'native-base';
import Modal from 'react-native-modalbox';

import theme from '../../themes/base-theme';
import styles from './styles';

class Modal1 extends Component {

    popRoute() {
        this.props.popRoute();
    }

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            isDisabled: false,
            swipeToClose: true
        }
    }
    openModal1() {
        this.refs.modal1.open()
    }
    closeModal1() {
        this.refs.modal1.close()
    }
    openModal2() {
        this.refs.modal2.open()
    }
    closeModal2() {
        this.refs.modal2.close()
    }

    render() {
        return (
            <Container theme={theme} style={{backgroundColor: '#384850'}}>
                <Image source={require('../../../images/glow2.png')} style={styles.container} >
                    <Header>
                        <Button transparent onPress={() => this.popRoute()}>
                            <Icon name="ios-arrow-back" style={{fontSize: 30, lineHeight: 32}} />
                        </Button>

                        <Title>Modal</Title>

                        <Button transparent onPress={this.props.openDrawer}>
                            <Icon name="ios-menu" style={{fontSize: 30, lineHeight: 32}} />
                        </Button>
                    </Header>

                    <Content  style={{backgroundColor: 'transparent'}}>
                        <View style={styles.box}>
                            <View style={styles.space}>
                                <Button block rounded style={{backgroundColor: '#00c497'}} textStyle={{color: '#fff'}} onPress={this.openModal1.bind(this)}>
                                   Basic Modal
                                </Button>
                            </View>
                            <View style={styles.space}>
                                <Button block rounded style={{backgroundColor: '#00c497'}} textStyle={{color: '#fff'}} onPress={this.openModal2.bind(this)}>
                                   Custom Modal
                                </Button>
                            </View>
                        </View>

                        <Modal style={[styles.modal, styles.modal1]} backdrop={false} ref={"modal1"} swipeToClose={this.state.swipeToClose} >
                            <View style={styles.space}>
                                <Text style={{color: '#000', marginBottom: 10}}>Basic modal</Text>
                                <Button  rounded style={{backgroundColor: '#00c497'}} textStyle={{color: '#fff'}} onPress={this.closeModal1.bind(this)} >
                                 Close Modal
                                </Button>
                            </View>
                        </Modal>

                        <Modal style={[styles.modal, styles.modal2]} backdrop={false} ref={"modal2"} swipeToClose={false} >
                            <Button transparent style={{position: 'absolute', top: 0, right: 0}} onPress={this.closeModal2.bind(this)} >
                                <Icon name="ios-close" style={{color:'#000'}} />
                            </Button>
                            <View style={styles.space}>
                                <Text style={{color: '#000'}}>
                                    This is a full screen modal.
                                </Text>
                            </View>
                        </Modal>
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

export default connect(null, bindAction)(Modal1);
