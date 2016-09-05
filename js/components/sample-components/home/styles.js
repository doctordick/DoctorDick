'use strict';

var React = require('react-native');

var { StyleSheet } = React;

module.exports = StyleSheet.create({
    container: {
        flex: 1,
        width: null,
        height: null,
    },
    roundedButton: {
        alignSelf: 'center',
        marginTop: 40,
        backgroundColor: '#00c497',
        borderRadius:90,
        width: 65,
        height:65
    },
    name: {
        color: 'red'
    },
    text: {
        marginBottom: 10,
        fontSize: 18
    }
});
