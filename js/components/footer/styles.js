
'use strict';

var React = require('react-native');

var { StyleSheet, Dimensions } = React;

var width = Dimensions.get('window').width;

module.exports = StyleSheet.create({
	footer: {
		flex: 1,
		width: width,
		backgroundColor: '#800080',
		flexDirection : 'row',
		height: 55,
  	alignSelf: 'stretch',
  	alignItems: 'center',
		justifyContent: 'space-around'
	},
});
