'use strict';

var React = require('react-native');

var { StyleSheet, Dimensions } = React;

var width = Dimensions.get('window').width;

module.exports = StyleSheet.create({
	footer: {
		flex: 1,
		width: width,
		backgroundColor: '#fff',
		flexDirection : 'row',
		height: 55,
  		alignSelf: 'stretch',
  		alignItems: 'center',
		justifyContent: 'space-around',
		borderTopColor: '#999',
		borderTopWidth: 0.5
	},
	icon: {
		paddingLeft: 30,
		paddingRight: 30,
		marginBottom: -10,
		color: '#999'
	},
	iconText: {
		backgroundColor: 'transparent',
		color: 'black',
		textAlign: 'center',
		fontSize: 10,
		color: '#999'
	},
	activeIcon: {
		paddingLeft: 30,
		paddingRight: 30,
		marginBottom: -10,
		color: '#6699cc'
	},
	activeText: {
		backgroundColor: 'transparent',
		color: 'black',
		textAlign: 'center',
		fontSize: 10,
		color: '#6699cc'
	},
});
