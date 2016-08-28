'use strict';

var React = require('react-native');

var { StyleSheet, Dimensions } = React;

var deviceHeight = Dimensions.get('window').height;
var height = Dimensions.get('window').height;
module.exports = StyleSheet.create({
    content: {
        flex: 1,
        backgroundColor: '#d8bfd8',
    },
    container: {
        flex: 2,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    bg: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d8bfd8',
        paddingLeft: 20,
        paddingRight: 20,
    },
    disclaimer: {
        borderTopColor: '#A9A9A9',
        borderTopWidth: 1,
        borderStyle: 'solid',
        paddingTop: 10
    },
    disclaimerText: {
        color: '#696969',
        fontSize: 12,
        textAlign: 'center'
    },
    modal: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    legalsModal: {
        height: height,
        position: 'relative',
        justifyContent: 'center',
    },
    modalHeader: {
        position: 'absolute', 
        top: 0, 
        left: 0, 
        right: 0,
        backgroundColor: '#800080'
    },
    modalHeaderTitle: {
        color: '#d8bfd8'
    }
});
