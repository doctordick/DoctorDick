'use strict';

var React = require('react-native');

var { StyleSheet, Dimensions } = React;
var height = Dimensions.get('window').height;

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
        textAlign: 'center'
    },
    buttonBlock: {
        backgroundColor: '#000',
        marginBottom: 20,
        borderRadius: 0,
        marginRight: 20,
        marginLeft: 20 
    },
    modal: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    highRiskExposureModal: {
        height: height,
        position: 'relative',
        justifyContent: 'center',
    },
    modalHeader: {
        position: 'absolute', 
        top: 0, 
        left: 0, 
        right: 0,
        backgroundColor: '#fff',
        borderBottomColor: '#000',
        borderBottomWidth: 0.5
    },
    modalHeaderTitle: {
        color: '#000'
    },
    modalTextMargin: {
        marginTop: 80,
    },
    highRiskExposureModalText: {
        color: '#696969',
        paddingRight: 20,
        paddingLeft: 20,
        fontWeight: '300',
        marginTop: 10
    },
    link: {
        color: '#0000EE',
        fontWeight: '400'
    }
});
