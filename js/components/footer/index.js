'use strict';

import React, {Component} from 'react';
import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { closeDrawer } from '../../actions/drawer';
import { replaceOrPushRoute } from '../../actions/route';

import { Icon, View, Text } from 'native-base';

import styles from './styles';

class Footer extends Component {

	navigateTo(route) {
        this.props.closeDrawer(); 
        this.props.replaceOrPushRoute(route);
    }

	render() {
		return (
			<View style={styles.footer}>
				<TouchableOpacity onPress={() => this.navigateTo('calendar')}>
					<Icon name='ios-calendar-outline' />
				</TouchableOpacity>
				<TouchableOpacity onPress={() => this.navigateTo('form')}>
					<Icon name='ios-pie-outline' />
				</TouchableOpacity>
				<TouchableOpacity>
					<Icon name='ios-add-circle-outline' />
				</TouchableOpacity>
				<TouchableOpacity onPress={() => this.navigateTo('contacts')}>
					<Icon name='ios-person' />
				</TouchableOpacity>
				<TouchableOpacity onPress={() => this.navigateTo('spinners')}>
					<Icon name='ios-time-outline' />
				</TouchableOpacity>
			</View>
		);
	}
}

function bindAction(dispatch) {
    return {
    	closeDrawer: ()=>dispatch(closeDrawer()),
        replaceOrPushRoute:(route)=>dispatch(replaceOrPushRoute(route))
    }
}

export default connect(null, bindAction)(Footer);
