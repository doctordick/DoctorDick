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
  isActive(name) {
  	return this.props.currentPage === name;
  }
	render() {
		return (
			<View style={styles.footer} theme={theme}>
				<TouchableOpacity onPress={this.props.currentPage !== 'home' ? () => this.pushNewRoute('home') : null}>
					<Icon style={this.isActive('home') ? styles.activeIcon : styles.icon} name={'ios-home'+(this.props.currentPage === 'home' ? '' : '-outline')} />
					<Text style={this.isActive('home') ? styles.activeText : styles.iconText}>HOME</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={this.props.currentPage !== 'viewRecs' ? () => this.pushNewRoute('viewRecs') : null}>
					<Icon style={this.isActive('viewRecs') ? styles.activeIcon : styles.icon} name={'ios-medkit'+(this.props.currentPage === 'viewRecs' ? '' : '-outline')} />
					<Text style={this.isActive('viewRecs') ? styles.activeText : styles.iconText}>RECS</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={this.props.currentPage !== 'remindersPage' ? () => this.pushNewRoute('remindersPage') : null}>
					<Icon style={this.isActive('remindersPage') ? styles.activeIcon : styles.icon} name={'ios-alarm'+(this.props.currentPage === 'remindersPage' ? '' : '-outline')} />
					<Text style={this.isActive('remindersPage') ? styles.activeText : styles.iconText}>REMINDERS</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={this.props.currentPage !== 'findServices' ? () => this.pushNewRoute('findServices') : null}>
					<Icon style={this.isActive('findServices') ? styles.activeIcon : styles.icon} name={'ios-pin'+(this.props.currentPage === 'findServices' ? '' : '-outline')} />
					<Text style={this.isActive('findServices') ? styles.activeText : styles.iconText}>SERVICES</Text>
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
