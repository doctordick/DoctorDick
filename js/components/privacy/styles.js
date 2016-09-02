'use strict';

var React = require('react-native');

var { StyleSheet } = React;

module.exports = StyleSheet.create({

    container: {
        flex: 2,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    legalView: {
        flex: 1,
        marginTop: 70,
    },

    legalItemView: {
        paddingLeft: 40,
        paddingRight: 40,
        marginBottom: 30,
    },

    legalTitle: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18,
        paddingBottom: 10,
        textAlign: 'center',
    },

    legalAnswer: {
        color: 'black',
        textAlign: 'left',
    }
});
