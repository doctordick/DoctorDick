'use strict';

import React, { Component } from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';

import { popRoute, replaceOrPushRoute } from '../../actions/route';


import {Container, Header, Title, Content, Text, Button, Icon, InputGroup, Input, View, Footer } from 'native-base';

import theme from '../../themes/base-theme';
import styles from './styles';
import FooterComponent from './../footer';
import Modal from 'react-native-modalbox';

class Reminders extends Component {

    popRoute() {
        this.props.popRoute();
    }
    navigateTo(route) {
        this.props.replaceOrPushRoute(route);
    }


    openSetReminderModal() {
        this.refs.setReminderModal.open()
    }
    closeSetReminderModal() {
        this.refs.setReminderModal.close()
    }

    render() {
        return (
            <Container theme={theme} style={{backgroundColor:'#d8bfd8'}}>
            	<View>
		            <Header style={{ backgroundColor: '#800080'}}>
		                <Button transparent onPress={() => this.popRoute()}>
		                    <Icon name='ios-arrow-back' style={{fontSize: 30, lineHeight: 32}} />
		                </Button>

		                <Title>Reminders</Title>
		            </Header>

		            <Content padder>
		                <View padder>
		                    <Button onPress={this.openSetReminderModal.bind(this)} block style={{borderRadius: 0, backgroundColor: '#800080', marginTop: 20}} textStyle={{color: '#FFF'}}>
		                        Set Reminders
		                    </Button>
		                </View>
		            	<Title style={{marginTop: 50, color: '#800080'}}>
		            		Current Reminders
		            	</Title>
		            	<Text>
		            		None
		            	</Text>
		            </Content>
	            	<Footer style={{ backgroundColor: '#800080' }}>
	            	    <FooterComponent navigator={this.props.navigator} />
	            	</Footer>
	            	 <Modal navigator={this.props.navigator} style={[styles.modal, styles.legalsModal]} backdrop={false} ref={'setReminderModal'}  swipeToClose={false} >
	            	     <Header style={styles.modalHeader}>
	            	        <Button transparent onPress={this.closeSetReminderModal.bind(this)}>
	            	            <Icon name="ios-arrow-back" style={{fontSize: 30, lineHeight: 32, color: '#d8bfd8'}} />
	            	        </Button>

	            	        <Title style={styles.modalHeaderTitle}>Set Reminder</Title>
	            	    </Header>

	            	    <View style={styles.space}>
	            	        <Title style={{color: '#000'}}>
	            	            What should Doctor Dick remind you of?
	            	        </Title>
	            	    </View>
	            	</Modal>
            	</View>
            </Container>
        )
    }
}

function bindAction(dispatch) {
    return {
        popRoute: () => dispatch(popRoute()),
        replaceOrPushRoute:(route)=>dispatch(replaceOrPushRoute(route))
    }
}

export default connect(null, bindAction)(Reminders);
