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
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 20,
        backgroundColor: '#FFF',
        flexDirection: 'column'
    },
    questionText: {
        color: '#696969',
        fontSize: 13,
        marginTop: 25,
        fontWeight: '300'
    },
    buttonBlock: {
        width: 200,
        marginBottom: 20,
        marginTop: 40
    }
});
