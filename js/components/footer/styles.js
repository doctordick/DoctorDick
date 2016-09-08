
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
		borderTopColor: '#000',
		borderTopWidth: 0.5
	},
	icon: {
		paddingLeft: 50, 
		paddingRight: 50,
		color: '#000'
	}
});
