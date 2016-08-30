
'use strict';


var React = require('react-native');

var { StyleSheet, Dimensions } = React;

var deviceHeight = Dimensions.get('window').height;
var height = Dimensions.get('window').height;

module.exports = StyleSheet.create({
    container: {
        flex: 1,
        width: null,
        height: null,
    },
    mb25: {
    	marginBottom: 25
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