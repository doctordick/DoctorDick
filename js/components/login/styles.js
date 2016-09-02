'use strict';

var React = require('react-native');

var { StyleSheet, Dimensions } = React;

var deviceHeight = Dimensions.get('window').height;
var height = Dimensions.get('window').height;
module.exports = StyleSheet.create({
    content: {
        flex: 1,
        backgroundColor: '#FFF',
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
        backgroundColor: '#FFF',
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
        backgroundColor: '#000'
    },
    modalHeaderTitle: {
        color: '#FFF'
    },

    legalView: {
        flex: 1,
        marginTop: 100,

    },
    space: {
        padding: 40,
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'column'
    },
    logoTitle: {
        marginTop: 20,
        marginBottom: 20,
        width: 250,
        height: 40
    },

    logoImage: {
        width: 200,
        height: 190 
    },

    slogan: {
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 20,
        fontSize: 20,
        color: '#000',
        fontWeight: '200',
        textAlign: 'center'
    },

    buttonContainer: {
        marginTop: 0
    },

    button: {
        backgroundColor: '#eee',
        marginBottom: 20,
        borderRadius: 0,
        width: 200
    },
    transButton: {
        alignSelf: 'center'
    },
    buttonBlock: {
        color: '#FFF'
    },
    disclaimerTextLink: { 
        fontSize: 12,
        color: '#0000ee'
    },
    modalBackButton: {
        fontSize: 30,
        lineHeight: 32,
        color: '#FFF'
    }
});
