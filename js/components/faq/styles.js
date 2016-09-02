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
    faq: {
        borderTopColor: '#000',
        borderTopWidth: 0.5,
        borderStyle: 'solid'
    },
    faqText: {
        color: '#000',
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
        paddingTop: 0
    },
    header: { 
        backgroundColor: '#000'
    }
});
