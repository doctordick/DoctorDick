'use strict';

var React = require('react-native');

var { StyleSheet, Dimensions } = React;

var deviceHeight = Dimensions.get('window').height;
var height = Dimensions.get('window').height;
module.exports = StyleSheet.create({
    disclaimer: {
        borderTopColor: '#A9A9A9',
        borderTopWidth: 1,
        borderStyle: 'solid',
        marginTop: 5,
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20
    },
    disclaimerText: {
        color: '#444',
        fontSize: 12,
        textAlign: 'center',
        fontFamily: 'Avenir',
        fontWeight: '300',
        lineHeight: 18,
        fontFamily: 'Avenir'
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
        backgroundColor: '#000'
    },
    modalHeaderTitle: {
        fontFamily: 'Avenir',
        color: '#FFF'
    },

    legalView: {
        flex: 1,
        marginTop: 100,

    },
    containerAbsolute: {
        position: 'absolute',
        top: 200,
        bottom: 100,
        paddingLeft: 20,
        paddingRight: 20,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },

    slogan: {
        marginTop: 10,
        fontSize: 20,
        color: '#fff',
        fontFamily: 'Avenir',
        fontWeight: '300',
        textAlign: 'center'
    },

    title: {
        fontSize: 60,
        fontFamily: 'Avenir',
        color: '#fff',
        fontWeight: '500',
        textAlign: 'center'
    },


    button: {
        backgroundColor: '#6699CC',
        marginBottom: 5,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
    },
    transButton: {
        alignSelf: 'center'
    },
    disclaimerTextLink: {
        fontSize: 12,
        fontFamily: 'Avenir',
        fontWeight: '300',
        lineHeight: 18,
        color: '#0000ee'
    },
    modalBackButton: {
        fontSize: 30,
        lineHeight: 32,
        color: '#FFF'
    }
});
