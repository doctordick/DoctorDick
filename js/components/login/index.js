'use strict';

import React, { Component } from 'react';
import { Image, Platform } from 'react-native';
import { connect } from 'react-redux';
import { pushNewRoute, replaceRoute } from '../../actions/route';
import {openDrawer} from '../../actions/drawer';
import { Container,
         Content,
         Text,
         Header,
         Title,
         InputGroup,
         Input,
         Button,
         Icon,
         View } from 'native-base';
import Modal from 'react-native-modalbox';
import login from './login-theme';
import styles from './styles';
import Privacy from './../privacy'

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            scroll: false,
            swipeToClose: true,
            selected: false,
            fieldLabel: 'I Agree'
        };
        this.selectCheckbox = this.selectCheckbox.bind(this);
    }

    selectCheckbox() {
        this.setState({
            selected: !this.state.selected
        });
    }

    replaceRoute(route) {
        this.props.replaceRoute(route);
    }

    pushNewRoute(route) {
         this.props.pushNewRoute(route);
    }

    openLegalsModal() {
        this.refs.legalsModal.open()
    }
    closeLegalsModal() {
        this.refs.legalsModal.close()
    }

    render() {
        return (
            <Container>
                <View style={styles.content} theme={login} scrollEnabled={this.state.scroll}>
                    <View style={styles.container}>
                        <Image style={{width: 200, height: 190}} source={require('../../../images/banana.png')}>
                        </Image>
                        <Image style={{ marginTop: 20, marginBottom: 20,width: 250, height: 40 }} source={require('../../../images/doctorDick.png')}>
                        </Image>
                        <Text style={{ paddingLeft: 20, paddingRight: 20, marginTop: 20, fontSize: 16, color: '#000', fontWeight: '100', textAlign: 'center'}}>
                            Doctor Dick helps you stay on top of your sexual health - so you can stay on top - or bottom - when it matters most
                        </Text>
                    </View>
                    <View style={styles.bg}>
                        <View style={{marginTop: 0}}>
                            <Button block style={{backgroundColor: '#800080', marginBottom: 20, borderRadius: 0, width: 200 }} onPress={() => this.pushNewRoute('emergency')}>
                                <Text style={{color: 'white'}}>
                                    LET'S GET STARTED
                                </Text>
                            </Button>
                        </View>
                        <Button transparent style={{alignSelf: 'center'}} onPress={() => this.pushNewRoute('faq')}>
                            <Text style={{color: '#800080'}}>
                                What is Doctor Dick?
                            </Text>
                        </Button>
                        <View style={styles.disclaimer}>
                            <Text style={ styles.disclaimerText }>
                                By clicking on 'Let's Get Started', you agree to our
                                <Text style={{ fontSize: 12, color: '#0000ee'}} onPress={this.openLegalsModal.bind(this)}> privacy policy and terms of use</Text>
                                 . These documents contain important information.
                            </Text>
                        </View>
                    </View>
                 <Modal navigator={this.props.navigator} style={[styles.modal, styles.legalsModal]} backdrop={false} ref={'legalsModal'}  swipeToClose={false} >
                     <Header style={styles.modalHeader}>
                        <Button transparent onPress={this.closeLegalsModal.bind(this)}>
                            <Icon name="ios-arrow-back" style={{fontSize: 30, lineHeight: 32, color: '#d8bfd8'}} />
                        </Button>

                        <Title style={styles.modalHeaderTitle}>Legals</Title>
                    </Header>
                        <Privacy />
                </Modal>
                </View>
            </Container>
        )
    }
}

function bindActions(dispatch){
    return {
        replaceRoute:(route)=>dispatch(replaceRoute(route)),
        pushNewRoute:(route)=>dispatch(pushNewRoute(route))
    }
}

export default connect(null, bindActions)(Login);
