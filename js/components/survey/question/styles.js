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
    },
    surveyQuestion: {
        fontWeight: '300',
        color: '#696969',
        fontSize: 16,
        marginBottom: 40,
        paddingLeft: 20,
        paddingRight: 20,
        textAlign: 'center'
    },
    buttonBlock: {
        borderColor: '#517aa3',
        borderWidth: 1,
        backgroundColor: '#fff',
        marginBottom: 20,
        borderRadius: 0,
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 20,
        marginLeft: 20,
        shadowOpacity: 0
    },

});
