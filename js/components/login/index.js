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
import CONSTANTS from './constants';
import Modal from 'react-native-modalbox';
import login from './login-theme';
import styles from './styles';

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
                        <Image source={require('../../../images/banana.png')}>
                        </Image>
                        <Text style={{ marginTop: 20, fontSize: 40, color: 'purple'}}>
                            doctorDICK
                        </Text>
                    </View>
                    <View style={styles.bg}>
                        <View style={{marginTop: 0}}>
                        <Button block style={{backgroundColor: '#800080', marginBottom: 20, borderRadius: 0, width: 200 }} onPress={() => this.pushNewRoute('checkSymptoms')}>
                            <Text style={{color: 'white'}}>
                                Let's Get Started
                            </Text>
                        </Button>
                        </View>
                        <Button transparent style={{alignSelf: 'center'}} onPress={() => this.pushNewRoute('faq')}>
                            <Text style={{color: '#800080'}}>
                                Learn More
                            </Text>
                        </Button>
                        <View style={styles.disclaimer}>
                            <Text style={ styles.disclaimerText }>
                                By clicking on Let's Get Started, you agree to our
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

                    <View style={styles.space}>
                        <Text style={{color: '#000'}}>
                            {CONSTANTS.legals}
                        </Text>
                    </View>
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
