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
				<TouchableOpacity onPress={() => this.pushNewRoute('dashboard')}>
					<Icon name={'ios-home'+(this.props.currentPage === 'dashboard' ? '' : '-outline')} />
				</TouchableOpacity>
				<TouchableOpacity onPress={() => this.pushNewRoute('careLocator')}>
					<Icon name={'ios-pin'+(this.props.currentPage === 'careLocator' ? '' : '-outline')} />
				</TouchableOpacity>
				<TouchableOpacity onPress={() => this.pushNewRoute('recommendationPage')}>
					<Icon name={'ios-alarm'+(this.props.currentPage === 'recommendationPage' ? '' : '-outline')} />
				</TouchableOpacity>
        <TouchableOpacity onPress={this.props.openDrawer}>
          <Icon name='ios-more' />
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
