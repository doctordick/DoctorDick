'use strict';

var React = require('react-native');

var { StyleSheet } = React;

module.exports = StyleSheet.create({
    testRec: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        width: null,
        height: null,
    },
    text: {
        marginBottom: 10,
        fontSize: 18
    }
});
