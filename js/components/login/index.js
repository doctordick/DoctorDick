'use strict';

import React, { Component } from 'react';
import { Image, Platform, Dimensions } from 'react-native';
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
        var height = Dimensions.get('window').height;
        var width = Dimensions.get('window').width;

        return (
            <Container>
                <View style={styles.content} theme={login} scrollEnabled={this.state.scroll}>
                    <View style={styles.container}>
                        <Image style={{ flex: 1, resizeMode: 'cover', height: height, width: width }} source={require('../../../images/gay-men-holding-hands.jpg')}>
                        </Image>
                    </View>
                    <View style={styles.containerAbsolute}>
                        { /* <Image source={require('../../../images/doctorDick.png')}>
                         </Image> */}
                        <View>
                            <Text style={styles.title}>Doctor Dick</Text>
                            <Text style={styles.slogan}>
                                 Our Dick helps keep yours healthy
                            </Text>
                        </View>
                        <View style={{backgroundColor: 'rgba(255, 255, 255, 0.85)', marginBottom: -40 }}>
                            <Button rounded textStyle={{color: '#fff', fontWeight: '500', fontFamily: 'Avenir'}} block style={styles.button} onPress={() => this.pushNewRoute('disclaimer')}>
                                    LET'S GET STARTED
                            </Button>
                            <Button textStyle={{color: '#0000EE', fontFamily: 'Avenir'}} transparent style={styles.transButton} onPress={() => this.pushNewRoute('faq')}>
                                What is Doctor Dick?
                            </Button>
                            <View style={styles.disclaimer}>
                                <Text style={ styles.disclaimerText }>
                                    By clicking on 'Let's Get Started', you agree to our
                                    <Text style={styles.disclaimerTextLink} onPress={this.openLegalsModal.bind(this)}> privacy policy and terms of use</Text>
                                     . These documents contain important information.
                                </Text>
                            </View>
                        </View>
                    </View>
                 <Modal navigator={this.props.navigator} style={[styles.modal, styles.legalsModal]} backdrop={false} ref={'legalsModal'}  swipeToClose={false} >
                     <Header style={styles.modalHeader}>
                        <Button transparent onPress={this.closeLegalsModal.bind(this)}>
                            <Icon name="ios-arrow-back" style={styles.modalBackButton} />
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
