'use strict';

import { StyleSheet } from "react-native";

module.exports = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: null,
        height: null
    },
    containerBottom: {
        backgroundColor: '#FFF',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: null,
        height: null
    },
    link: {
        textDecorationLine: 'underline',
        fontWeight: '300',
        lineHeight: 18,
        color: '#0000ee'
    },
    faq: {
        borderTopColor: '#ccc',
        borderTopWidth: 0.5,
        borderStyle: 'solid'
    },
    faqText: {
        color: '#696969',
        fontSize: 16,
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 20,
        paddingRight: 20
    },
    faqQuestion: {
        fontWeight: '300'
    },
    selected: {
        fontWeight: 'bold'
    },
    faqAnswer: {
        fontWeight: '200',
        paddingBottom: 20,
        paddingTop: 0,
        color: '#696969'
    },
    header: {
        backgroundColor: '#6699cc'
    },
    sectionHeading: {
        alignSelf: 'flex-start',
        marginLeft: 20,
        fontSize: 20,
        fontWeight: '500',
        marginTop: 20,
        lineHeight: 40,
        marginBottom: 20,
        color: '#696969'
    }
});
