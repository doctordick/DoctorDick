'use strict';

import React, {Component} from 'react';
import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { openDrawer } from '../../actions/drawer';
import { pushNewRoute } from '../../actions/route';

import { Icon, View, Text, Container } from 'native-base';

import styles from './styles';
import theme from '../../themes/base-theme';


class Footer extends Component {

	pushNewRoute(route) {
    this.props.pushNewRoute(route);
  }

	render() {
		return (
			<View style={styles.footer} theme={theme}>
				<TouchableOpacity onPress={this.props.currentPage !== 'home' ? () => this.pushNewRoute('home') : null}>
					<Icon style={styles.icon} name={'ios-home'+(this.props.currentPage === 'home' ? '' : '-outline')} />
					<Text style={{ backgroundColor: 'transparent', color: 'black', textAlign: 'center', fontSize: 10 }}>Home</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={this.props.currentPage !== 'recommendationPage' ? () => this.pushNewRoute('recommendationPage') : null}>
					<Icon style={styles.icon} name={'ios-medkit'+(this.props.currentPage !== 'careLocator' ? '' : '-outline')} />
					<Text style={{ backgroundColor: 'transparent', color: 'black', textAlign: 'center', fontSize: 10 }}>Recs</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={this.props.currentPage !== 'reminders' ? () => this.pushNewRoute('reminders') : null}>
					<Icon style={styles.icon} name={'ios-alarm'+(this.props.currentPage !== 'reminders' ? '' : '-outline')} />
					<Text style={{ backgroundColor: 'transparent', color: 'black', textAlign: 'center', fontSize: 10 }}>Reminders</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={this.props.currentPage !== 'careLocator' ? () => this.pushNewRoute('careLocator') : null}>
					<Icon style={styles.icon} name={'ios-pin'+(this.props.currentPage === 'careLocator' ? '' : '-outline')} />
					<Text style={{ backgroundColor: 'transparent', color: 'black', textAlign: 'center', fontSize: 10 }}>Find Services</Text>
				</TouchableOpacity>
		        <TouchableOpacity onPress={this.props.openDrawer}>
		          <Icon style={styles.icon} name='ios-more' />
		        </TouchableOpacity>
			</View>
		);
	}
}

function bindAction(dispatch) {
    return {
      openDrawer: ()=>dispatch(openDrawer()),
      pushNewRoute:(route)=>dispatch(pushNewRoute(route))
    }
}

export default connect(null, bindAction)(Footer);
