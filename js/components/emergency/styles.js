'use strict';

import { StyleSheet } from "react-native";

module.exports = StyleSheet.create({
    container: {
        flex: 1,
        width: null,
        height: null,
    },
    question: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20,
        backgroundColor: '#d8bfd8',
        flexDirection: 'column',
        alignItems: 'center'
    },
    questionText: {
        color: '#696969',
        fontSize: 14,
        textAlign: 'center',
        marginTop: 25
    }
});
