'use strict';

import { StyleSheet } from "react-native";

module.exports = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d8bfd8',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: null,
        height: null
    },
    faq: {
        borderTopColor: '#8E388E',
        borderTopWidth: 0.5,
        borderStyle: 'solid'
    },
    faqText: {
        color: '#8E388E',
        fontSize: 12,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 20,
        paddingRight: 20
    },
    faqQuestion: {
        fontWeight: 'bold'
    },
    faqAnswer: {
        fontWeight: '300',
        paddingBottom: 10,
        paddingTop: 0
    }
});
