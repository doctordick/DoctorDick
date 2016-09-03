'use strict';

var React = require('react-native');

var { StyleSheet } = React;

module.exports = StyleSheet.create({
    testRec: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',
        width: null,
        height: null,
    },
    text: {
        marginBottom: 10,
        fontSize: 16,
        color: '#696969'
    },
    header: { 
        backgroundColor: '#000' 
    },
    backButton: {
        fontSize: 30,
        lineHeight: 32
    },
    surveyQuestion: {
        fontWeight: '300',
        color: '#696969',
        fontSize: 16,
        marginBottom: 40,
        paddingLeft: 20,
        paddingRight: 20,
        textAlign: 'center'},
    buttonBlock: {
        backgroundColor: '#000',
        marginBottom: 20,
        borderRadius: 0,
        marginRight: 20,
        marginLeft: 20 
    }
});
